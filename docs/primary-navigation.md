---
eleventyExcludeFromCollections: true
layout: sub-navigation
title: Primary navigation
---

{% from "example/macro.njk" import appExample %}
{% from "govuk/components/notification-banner/macro.njk" import govukNotificationBanner %}

{{ govukNotificationBanner({
  html: "### This component has been retired\n\nUse the [service navigation component](https://design-system.service.gov.uk/components/service-navigation/) in the GOV.UK Design System to help users navigate to the main sections of your service." | markdown
}) }}
