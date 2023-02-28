#!/bin/bash

function run {
    if ! grep $1 ;
    then
        $@&
    fi
}

# --- Wallpaper and Color stuffs ---
feh --bg-max ~/Pictures/black_white_space_dude.jpg


# --- Lauch Stuffs ---
run $HOME/.config/polybar/black_white_solid/launch.sh

echo "256_noir" > ~/.current_theme

kitty +kitten themes --reload-in=all Default &

# --- Border Stuff ---
bspc config normal_border_color  '#000000'
bspc config active_border_color  '#222222'
bspc config focused_border_color '#ffffff'

bspc config border_width 2

