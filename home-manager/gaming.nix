{ inputs, lib, config, pkgs, ... }: {
    home.packages = with pkgs; [
        steam
        gamemode
        lutris
        /* protonup-qt */
    ];
}
