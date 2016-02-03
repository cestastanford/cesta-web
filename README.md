# Ockham

**IN DEVELOPMENT**

Ockham is a platform for publishing collaborative research in the
humanities built on top of [Jekyll](http://jekyllrb.com).

Beginning with Jekyll, Twitter Bootstrap, and GitHub, we are building a
static site publishing platform for humanities research. The goal is to
keep it simple. No CMS, no elaborate back-end administration, no
databases, no major security updates to maintain, just content managed
directly by the scholars who create it.

By design, content and formatting are kept separate, while making the
maintaining and updating information easy for individuals without
knowledge of (or interest in) HTML. We seek to make this happen by
integrating cloud file sharing and Github.

## Installation

The Gemfile located in the root directory contains the necessary Ruby gems
needed for Ockham to run properly. The gems include `jekyll`, `jekyll-scholar`,
`rake`, and `stringex`.

- `jekyll`: Ockham is built to work with Jekyll, a static site generator that
converts Markdown files and template layouts into a website.
- `jekyll-scholar`: Jekyll-Scholar is a set of extensions for working with
bibliographies, reading lists, and citations. You can read more in the
[documentation](https://github.com/inukshuk/jekyll-scholar).
- `jekyll-pandoc`:
- `rake`: The Ruby software task management tool.
- `stringex`: Extensions for Ruby's [String
class](http://www.ruby-doc.org/core-2.1.1/String.html). Read more in the
[documentation](https://github.com/rsl/stringex).

To install the Ruby gems, ensure that the `bundler` Ruby gem is
installed. From the command line,

```
$ gem install bundler
```

Once `bundler` is installed, simply run `bundle install` from the command line
in the directory where Ockham will be installed. The Gemfile will fetch the
most recent versions of the above gems.

Once the Gems are in place, Ockham can be installed by placing the contents
into the root directory. Once the files are in place, run `rake preview` from
the command line to preview the site on a local server.

More `rake` tasks are available to developers to make editing, updating,
uploading, testing, and adding content easier. Run `rake` from the
command line to see what tasks are available to you.

## Layouts

Ockham includes layouts for the type of research project content we have identified as essential:

- People
- Projects
- Laboratory Notebook
- Partners
- Funding
- Publications

## Plugins

Ockham uses several plugins to extend the capabilities of Jekyll. Since
these plugins cannot be used directly with GitHub Pages, you will need
to deploy the site through Travis CI.

## Deploying

Deployment is handled with two basic steps:

1. build
2. deploy

The build pipeline is meant to be streamlined, and most of it is handled with the Rakefile. You will need to edit the Rakefile to meet your needs. Right now, there are two ways to deploy sites:

- `rsync`: Using rsync allows you to use plugins that are included with
Ockham. The site is generated locally, then using `rake deploy` you can send
the files to your server using `rsync`.
- `Github pages`: If you are using Github pages to host Ockham, you will be
unable to use the included plugins. Github Pages only allows certain plugins
to run within their system, and you will be limited to only those plugins.

By default, Ockham uses `rsync` to handle deployments. From the command line, typing

  rake deploy

will run the Jekyll build process and upload the results to the server. If you'd like to check your work first, you can run `rake preview` to see the site locally at [localhost:4000](http://localhost:4000).

## Requirements

* Ruby >= 2.1.5
* Gems:
  * jekyll-scholar
  * rake
  * stringex
  * jekyll >= 3.0

## About

Ockham developed by Jason A. Heppler and Nicole Coleman at the [Center for Spatial and Textual Analysis (CESTA)](http://cesta.stanford.edu), [Stanford University](http://stanford.edu).

## License

Ockham is released under the MIT License <http://heppler.mit-license.org>.

## Upcoming Features

[ ] A GUI editing interface for Markdown
[ ] A deploy process for Github pages built into the Rakefile
