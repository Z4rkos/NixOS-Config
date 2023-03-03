#! /usr/bin/env nix-shell
#! nix-shell -i bash -p bash

# Add this script to your wm startup file.

DIR=/home/z4/.config/polybar/gruvblox_solid/

# Terminate already running bar instances
killall polybar

# Wait until the processes have been shut down
while pgrep -u $UID -x polybar >/dev/null; do sleep 0.5; done

# Launch the bar
for m in $(xrandr -q | grep -w "connected" | cut -d " " -f1); do
    MONITOR=$m polybar -c "$DIR"/config.ini &
done
