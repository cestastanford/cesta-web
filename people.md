---
title: People
permalink: /people/
layout: page
...

<div class="row">

{% assign activeSortedNames = site.data.cesta-active | sort: 'last_name' %}
{% for member in activeSortedNames %}
<div class="col-md-4">
    <a href="#">
      <img class="img-thumbnail img-resized" src="{{ site.baseurl }}/images/headshot/{{ member.portrait }}" alt="{{ member.full_name }}" title="{{ member.full_name }}"/>
    </a>

    <div class="people-body">
        <span class="person-name">{{ member.full_name }}</span>
        <br/>
        <small>{{ member.by-line }}</small>
    </div>
</div>
{% endfor %}
</div>

<div class="row">
<h4>Emeritus Members</h4>
{% assign inactiveSortedNames = site.data.cesta-inactive | sort: 'last_name' %}
{% for member in inactiveSortedNames %}
<div class="col-md-4">
    <a href="#">
      <img class="img-thumbnail img-resized" src="{{ site.baseurl }}/images/headshot/{{ member.portrait }}" alt="{{ member.full_name }}" title="{{ member.full_name }}"/>
    </a>

    <div class="people-body">
        <span class="person-name">{{ member.full_name }}</span>
        <br/>
        <small>{{ member.by-line }}</small>
    </div>
</div>
{% endfor %}

</div>
