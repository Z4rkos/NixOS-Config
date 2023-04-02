{ inputs, lib, config, pkgs, ... }: {
    home.packages = with pkgs; [
        waybar
        hyprpaper
        wofi
        libsForQt5.qt5ct
        libva
    ];
}
