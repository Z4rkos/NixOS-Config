#!/usr/bin/env bash

# --- Border Stuff ---
bspc config normal_border_color  '#30365F'
bspc config active_border_color  '#30365F'
bspc config focused_border_color '#7a5ccc'
bspc config border_width 2

eww -c /home/z4/nix-config/home-manager/dotfiles/eww/bspwm_leftbar/ open-many bar_0 bar_1

# --- Kitty ---
#kitty +kitten themes --reload-in=all Gruvbox Dark Hard &

# --- Neovim ---
echo "spaceduck" > /home/z4/.current_theme &

# --- Wallpaper and Color stuffs ---
xwallpaper --center /home/z4/pictures/black_tech_bouble.jpg &


