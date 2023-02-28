#!/bin/bash


# --- Wallpaper ---
feh --bg-max ~/Pictures/nature_winter.jpg &

# --- Polybar ---
$HOME/.config/polybar/nordblocks/launch.sh &

# --- Kitty ---
kitty +kitten themes --reload-in=all Nord &

# --- Neovim ---
echo "nord" > $HOME/.current_theme &

# --- Border Stuff ---
bspc config normal_order_color  '#1E1E2E'
bspc config active_border_color  $color1
bspc config focused_border_color '#88c0d0'
bspc config border_width 1
