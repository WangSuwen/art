#!/bin/bash
BUILD="build"
if [ -d $BUILD ]; then
  rm -rf $BUILD
fi
echo "webpack building..."
npm run build
