---
layout: default
permalink: /labs-projects/
---

<ul>
{% for org_hash in site.data.labs %}
{% assign org = org_hash[1] %}
  <li>
      {{ org.name }}
    </a>
    ({{ org.members | size }} members)
  </li>
{% endfor %}
</ul>
