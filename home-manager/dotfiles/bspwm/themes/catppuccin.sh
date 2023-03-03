#!/bin/bash

function run {
    if ! grep $1 ;
    then
        $@&
    fi
}
# --- Wallpaper ---
feh --bg-max ~/Pictures/fractal.png &

# --- Polybar ---
run $HOME/.config/polybar/catblocks/launch.sh &

# --- Kitty ---
kitty +kitten themes --reload-in=all Catppuccin-Mocha &

# --- Neovim ---
# Gets set automatically by a lua script that reads from the .current_theme file.
echo "catppuccin" > $HOME/.current_theme &

# --- Border Stuff ---
bspc config normal_order_color  '#1E1E2E'
bspc config active_border_color  $color1
bspc config focused_border_color '#88c0d0'
bspc config border_width 1

