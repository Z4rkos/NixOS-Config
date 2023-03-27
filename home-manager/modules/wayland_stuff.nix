{ inputs, lib, config, pkgs, ... }: {
    home.packages = with pkgs; [
        waybar
        hyprpaper
        wofi
    ];
}
