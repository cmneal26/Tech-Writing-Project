---
layout: layouts/our-mission.njk
title: Our Mission
templateClass: tmpl-our-mission
eleventyNavigation:
  key: Our Mission
  order: 4
---


**replace the content here in `our-missions/index.md` with the content from `drafts/our-mission-content.md`**

This content wasn't displaying appropriately on the page because I didn't add this line to the `template` associated with this `Markdown`.

```
{% raw %}
  {{ content | safe }}
{% endraw %}

```

