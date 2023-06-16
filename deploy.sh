#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build-only

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://masakiLee.github.io
# git push -f git@github.com:masakiLee/masakiLee.github.io.git main

# if you are deploying to https://masakiLee.github.io/
git push -f git@github.com:masakiLee/foodHub_project.git main:gh-pages

cd -