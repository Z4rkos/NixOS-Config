{ inputs, lib, config, pkgs, ... }:
let
  binDirectory = /home/z4/nix-config/home-manager/bin;
  storeLink = config.lib.file.mkOutOfStoreSymlink;
in
{
  imports = [
    ./dotfiles
    ./modules
  ];


  nixpkgs = {
    overlays = [
    ];
    config = {
      allowUnfree = true;
      # Workaround for https://github.com/nix-community/home-manager/issues/2942
      allowUnfreePredicate = (_: true);
    };
  };

  /* programs.nix-doom-emacs.enable = true; */

  home = {
    username = "z4";
    homeDirectory = "/home/z4";
    /* modules = [ doom-emacs.hmModule ]; */

    sessionVariables = {
      EDITOR = "nvim";
    };
    sessionPath = ["${binDirectory}"]; # Put my bin in PATH
    file."bin".source = storeLink /home/z4/nix-config/home-manager/bin; # Symlink that shizzle between store, here, and home.
  };

  home.packages = with pkgs; [ 
    rofi
    vimHugeX
    polybar
    kitty
    feh
    lua
    nix-zsh-completions
    zsh-syntax-highlighting
    spotify
    obsidian networkmanagerapplet
    ripgrep
    flameshot
    xwallpaper
    btop
    eww
    dunst
    ranger
    links2
    vmware-workstation
    xclip
    firefox
    discord
    nodejs
    zip
    unzip
    cmake
    openssl
    file
    cowsay
    libmysqlclient
    gimp
    distrobox
    openvpn
    p7zip
    unrar
    rarcrack
    dig
    powershell
    php
    vlc
    node2nix
    conky
    neofetch
    libreoffice-qt
    mlocate
  ];


  programs.home-manager.enable = true;
  programs.git.enable = true;

  # Reload system units when changing configs
  systemd.user.startServices = "sd-switch";

  # https://nixos.wiki/wiki/FAQ/When_do_I_update_stateVersion
  home.stateVersion = "22.11";
}
