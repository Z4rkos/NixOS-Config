#!/bin/bash

# --- Wallpaper and Color stuffs ---
feh --bg-max $HOME/Pictures/matrix.png &

# --- Polybar ---
# $HOME/.config/polybar/hacker/launch.sh &
killall polybar

# --- Kitty ---
kitty +kitten themes --reload-in=all Homebrew &

# --- Neovim ---
echo "phosphor" > $HOME/.current_theme &

# --- Border Stuff ---
bspc config normal_border_color  '#001E00'
bspc config active_border_color  $color1
bspc config focused_border_color '#00ff00'
bspc config border_width 2
