---
layout: sub-navigation
order: 2
title: Warn on saved changes
description: A data attribute to warn users if they try to leave a page without saving changes to a form.
eleventyNavigation:
  parent: Data attributes
---

If a user makes a change then tries to close their tab, window, or click a link to navigate away, they will see a default browser message warning them about unsaved changes. This message is different on each browser and cannot be edited.

The message will say something similar to:

> You have unsaved changes, are you sure you want to leave?

## Example usage

Add the attribute `data-module="warn-on-unsaved-changes"` to any form element. If that form is changed but not submitted, then the warning will be triggered when the user attempts to leave.

```html
<form action="…" data-module="warn-on-unsaved-changes">
  …
</form>
```
