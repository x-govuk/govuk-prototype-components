import test from 'ava'
import nunjucks from 'nunjucks'
import { decorate } from '../../lib/decorate.js'

test.before(t => {
	const views = [
    './',
    './node_modules/govuk-frontend',
    './tests/fixtures'
  ]
  const env = nunjucks.configure(views)
  env.addGlobal('decorate', decorate)

  t.context.nunjucks = env
  t.context.data = {
    data: {
      account: {
        'email-address': 'test@example.org'
      },
      country: 'england',
      'passport-issued': {
        day: '31',
        month: '12',
        year: '1999'
      }
    }
  }
});

test('Returns form component without decorate attribute', t => {
  const { nunjucks, data } = t.context
  const result = nunjucks.render('input-not-decorated.njk', data)

  t.regex(result, /id=""/);
  t.regex(result, /name=""/);
})

test('Returns form component without any session data', t => {
  const { nunjucks } = t.context
  const result = nunjucks.render('input.njk', {})

  t.regex(result, /id=""/);
  t.regex(result, /name=""/);
})

test('Decorates form component', t => {
  const { nunjucks, data } = t.context
  const result = nunjucks.render('input.njk', data)

  t.regex(result, /for="account-email-address"/);
  t.regex(result, /id="account-email-address"/);
  t.regex(result, /name="\[account\]\[email-address\]"/);
  t.regex(result, /value="test@example.org"/);
})

test('Decorates form component with items', t => {
  const { nunjucks, data } = t.context
  const result = nunjucks.render('radios.njk', data)

  t.regex(result, /for="country"/);
  t.regex(result, /for="country-2"/);
  t.regex(result, /id="country".*name="\[country\].*value="england".*checked/);
  t.regex(result, /id="country-2".*name="\[country\].*value="scotland"/);
})

test('Decorates form component with items (data stored in array)', t => {
  const { nunjucks } = t.context
  const result = nunjucks.render('radios.njk', {
    data: { country: ['england'] }
  })

  t.regex(result, /for="country"/);
  t.regex(result, /for="country-2"/);
  t.regex(result, /id="country".*name="\[country\].*value="england".*checked/);
  t.regex(result, /id="country-2".*name="\[country\].*value="scotland"/);
})

test('Uses label text if no value given for option', t => {
  const { nunjucks, data } = t.context
  const result = nunjucks.render('radios-no-values.njk', data)

  t.regex(result, /id="country".*name="\[country\].*value="England"/);
  t.regex(result, /id="country-2".*name="\[country\].*value="Scotland"/);
  t.regex(result, /id="country-3".*name="\[country\].*value="Wales"/);
  t.regex(result, /id="country-4".*name="\[country\].*value="Northern Ireland"/);
  t.regex(result, /id="country-6".*name="\[country\].*value="Another country"/);
})

test('Decorates date input component', t => {
  const { nunjucks, data } = t.context
  const result = nunjucks.render('date-input.njk', data)

  t.regex(result, /for="passport-issued-day"/);
  t.regex(result, /for="passport-issued-month"/);
  t.regex(result, /for="passport-issued-year"/);
  t.regex(result, /id="passport-issued-day".*name="\[passport\-issued\]\[day\].*value="31"/);
  t.regex(result, /id="passport-issued-month".*name="\[passport\-issued\]\[month\].*value="12"/);
  t.regex(result, /id="passport-issued-year".*name="\[passport\-issued\]\[year\].*value="1999"/);
})

test('Strips data from key path', t => {
  const { nunjucks, data } = t.context
  const result = nunjucks.render('input-data-in-key-path.njk', data)

  t.regex(result, /for="account-email-address"/);
  t.regex(result, /id="account-email-address"/);
  t.regex(result, /name="\[account\]\[email-address\]"/);
  t.regex(result, /value="test@example.org"/);
})

test('Add message if error', t => {
  const { nunjucks, data } = t.context
  const result = nunjucks.render('input.njk', { ...data, ...{
    errors: {
      'account.email-address': {
        msg: 'Enter an email address in the correct format'
      }
    }
  }})

  t.regex(result, /id="account-email-address-error"/);
  t.regex(result, /Error:/);
  t.regex(result, /Enter an email address in the correct format/);
  t.regex(result, /aria-describedby="account-email-address-error"/);
})
