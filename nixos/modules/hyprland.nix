{ config, lib, pkgs, ... }: 
{
  programs.hyprland = {
      enable = false;
      xwayland = {
        enable = true;
      };
      nvidiaPatches = true;
    };
  /* lib.nix-doom-emacs.enable = true; */
}
