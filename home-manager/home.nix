# This is your home-manager configuration file
# Use this to configure your home environment (it replaces ~/.config/nixpkgs/home.nix)

{ inputs, lib, config, pkgs, unstable, ... }:
let
  binDirectory = /home/z4/nix-config/home-manager/bin;
  storeLink = config.lib.file.mkOutOfStoreSymlink;
in
{
  imports = [
    # inputs.nix-colors.homeManagerModule
    ./dotfiles
    ./zsh
    ./gaming.nix
    #./nvim.nix
  ];

  home.file."bin".source = storeLink /home/z4/nix-config/home-manager/bin;

  nixpkgs = {
    overlays = [
    ];
    config = {
      allowUnfree = true;
      # Workaround for https://github.com/nix-community/home-manager/issues/2942
      allowUnfreePredicate = (_: true);
    };
  };

  # TODO: Set yourusername
  home = {
    username = "z4";
    homeDirectory = "/home/z4";

    sessionVariables = {
      EDITOR = "nvim";
    };
    sessionPath = ["${binDirectory}"];
  };



  programs.zsh = {
    enable = true;
    enableAutosuggestions = true;
    enableSyntaxHighlighting = true;
    shellAliases = {
        options =  "firefox https://search.nixos.org/options";
        packages = "firefox https://search.nixos.org/packages";
    };
    #initExtra = "export PATH=$PATH:${binDirectory}";
    oh-my-zsh = {
      enable = true;
      theme = "robbyrussell";
      plugins = [ 

      ];
    };
  };

  home.packages = with pkgs; [ 
        rofi
        vimHugeX
        polybar
        kitty
        feh
        python311
        lua
        nix-zsh-completions
        zsh-syntax-highlighting
        spotify
        obsidian
        networkmanagerapplet
        ripgrep
        flameshot
        xwallpaper
        btop
        emacs
        eww
        dunst
        ranger
        links2
  ];


  # Enable home-manager and git
  programs.home-manager.enable = true;
  programs.git.enable = true;

  # Nicely reload system units when changing configs
  systemd.user.startServices = "sd-switch";

  # https://nixos.wiki/wiki/FAQ/When_do_I_update_stateVersion
  home.stateVersion = "22.11";
}
