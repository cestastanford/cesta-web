---
title: People
permalink: /people/
layout: page
...

<div class="row">

{% for member in site.data.people_palladio %}
{% if member.active=="yes" %}
<div class="col-md-4">
    <a href="#">
      <img class="img-thumbnail img-resized" src="http://galileo.stanford.edu/images/placeholder.gif" alt="{{ member.full_name }}" title="{{ member.full_name }}"/>
    </a>

    <div class="people-body">
        <span class="person-name">{{ member.full_name }}</span>
        <br/>
        <small>{{ member.affiliation }}</small>
    </div>
</div>
{% else %}
<h4>Emertius</h4>
<div class="col-md-4">
    <a href="#">
      <img class="img-thumbnail img-resized" src="http://galileo.stanford.edu/images/placeholder.gif" alt="{{ member.full_name }}" title="{{ member.full_name }}"/>
    </a>

    <div class="people-body">
        <span class="person-name">{{ member.full_name }}</span>
        <br/>
        <small>{{ member.affiliation }}</small>
    </div>
</div>

{% endif %}
{% endfor %}

</div>
