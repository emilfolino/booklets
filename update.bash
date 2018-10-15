#!/usr/bin/env bash

git pull > /dev/null 2>&1

echo "HTTP/1.0 200 OK"
echo "Content-type: text/plain"
echo ""
