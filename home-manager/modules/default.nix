{config, pkgs, ...}:
{
  imports = [
    ./gaming.nix
    ./hacking_tools.nix
    ./zsh
    ./python.nix
    /* (if config.programs.hyprland.enable then ./wayland_stuff.nix else {}) */
    ./wayland_stuff.nix
    ./direnv.nix
  ];
}
