#!/usr/bin/env sh

NODE_VERSION=`node -p "require('./package.json').engines.node"`

nvm install $NODE_VERSION
nvm use $NODE_VERSION
