{ config, lib, pkgs, ... }: 
{
  programs.hyprland = {
      enable = true;
      xwayland = {
        enable = true;
      };
      nvidiaPatches = true;
    };
  /* lib.nix-doom-emacs.enable = true; */
}
