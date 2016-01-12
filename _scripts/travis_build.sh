#!/bin/bash

set -e # halt script on error

bundle exec jekyll build

# Deploy to the server
rake rsync

#echo "Successful!"

#bundle exec htmlproof ./_site

#if [[ $TRAVIS_BRANCH == 'master' ]] ; then
#  bundle exec rake stage
#elif [[ $TRAVIS_BRANCH == 'live' ]] ; then
#  bundle exec rake publish
#else
#  echo 'Invalid branch. You can only deploy from master and live.'
#  exit 1
#fi
