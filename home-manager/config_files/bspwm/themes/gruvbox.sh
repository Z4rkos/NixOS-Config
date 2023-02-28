#! /bin/sh

# --- Border Stuff ---
bspc config normal_border_color  '#1E1E2E'
bspc config active_border_color  $color1
bspc config focused_border_color '#cc241d'
bspc config border_width 2

# --- Polybar ---
/home/z4/.config/polybar/gruvblox_solid/launch.sh &

# --- Kitty ---
#kitty +kitten themes --reload-in=all Gruvbox Dark Hard &

# --- Neovim ---
echo "gruvbox" > /home/z4/.current_theme 

# --- Wallpaper and Color stuffs ---
feh --bg-max /home/z4/pictures/abstract_sun.jpg

