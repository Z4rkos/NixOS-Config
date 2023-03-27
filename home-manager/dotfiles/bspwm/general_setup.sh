#! /usr/bin/env nix-shell
#! nix-shell -i bash -p bash


# --- Desktop and Monitor Stuff ---
export main_screen=HDMI-0
export side_screen=eDP-1-1

if xrandr -q | grep -w connected | grep "$main_screen"; then
    xrandr --output "$main_screen" --primary --left-of "$side_screen" --output "$side_screen" --auto &
    sleep 1
    bspc monitor "$main_screen" -d 1 2 3 4 5
    bspc monitor "$side_screen" -d 6 7 8 9 0
else
    bspc monitor -d 1 2 3 4 5 6 7 8 9 0
fi

# -- "Settings" --
setxkbmap -option caps:escape 
xset r rate 250 35 


# --- Launch Stuffs ---
picom --config /home/z4/.config/picom.conf &
sxhkd &
