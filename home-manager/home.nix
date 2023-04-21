{ inputs, lib, config, pkgs, ... }:
let
  username = "z4";
  binDirectory = /home/${username}/nix-config/home-manager/bin;
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


  home = {
    username = username;
    homeDirectory = "/home/${username}";

    sessionVariables = {
      EDITOR = "nvim";
      TEST = "test";
    };
    # This stopped working when I stopped using SDDM.
    sessionPath = [ "${binDirectory}" ]; # Put my bin in PATH
    file."bin".source = storeLink binDirectory; # Symlink that shizzle between store, here, and home.
  };

  home.packages = with pkgs; [ 
    (callPackage  /home/z4/testing/poetry_test {})
    (callPackage /home/z4/projects/centipyde {})
    rofi
    vimHugeX
    polybar
    kitty
    feh
    lua
    spotify
    obsidian 
    networkmanagerapplet
    ripgrep
    flameshot
    xwallpaper
    btop
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
    dig
    powershell
    php
    vlc
    node2nix
    neofetch
    libreoffice-qt
    mlocate
    notify
    libnotify
    jq
    socat
    eww
    aspino
    blueman
    gnumake
    qbittorrent
    osu-lazer
    tree-sitter
    rnix-lsp
    pandoc
    bat
    gcc_multi
    helix
    nodePackages.typescript-language-server
    nodePackages.bash-language-server
    rust-analyzer
    remmina
  ];


  programs.home-manager.enable = true;
  programs.git.enable = true;

  # Reload system units when changing configs
  systemd.user.startServices = "sd-switch";

  # https://nixos.wiki/wiki/FAQ/When_do_I_update_stateVersion
  home.stateVersion = "22.11";
}
