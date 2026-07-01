#!/bin/sh

cd "$(dirname $0)"

ui/package.sh

antora generate antora-playbook.yml
