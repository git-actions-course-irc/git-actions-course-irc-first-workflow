#!/bin/sh
echo "::debug::Running entrypoint.sh"
echo "Hello $1"
time=$(date)
echo "time=$time" >> $GITHUB_OUTPUT
echo "HELLO_TIME=$time" >> $GITHUB_ENV