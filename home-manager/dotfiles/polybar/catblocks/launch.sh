#!/usr/bin/env bash

# Add this script to your wm startup file.

DIR=$HOME/.config/polybar/catblocks

# Terminate already running bar instances
killall -q polybar

# Wait until the processes have been shut down
while pgrep -u $UID -x polybar >/dev/null; do sleep 1; done

# Launch the bar
for m in $(xrandr -q | grep -w "connected" | cut -d" " -f1); do
    MONITOR=$m polybar -q main -c "$DIR"/config.ini &
done
