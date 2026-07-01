#!/bin/sh

# Packages the UI Bundle into a ZIP file.

cd "$(dirname "$0")"

zip -r ui_bundle.zip \
  layouts/ \
  css/ \
  helpers/ \
  img/ \
  partials/ \
  js/ \
  font/ \
  favicon.ico \
  ui.yml
