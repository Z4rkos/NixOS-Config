# This is your home-manager configuration file
# Use this to configure your home environment (it replaces ~/.config/nixpkgs/home.nix)

{ inputs, lib, config, pkgs, ... }: {
  # You can import other home-manager modules here
  imports = [
    # If you want to use home-manager modules from other flakes (such as nix-colors):
    # inputs.nix-colors.homeManagerModule

    # You can also split up your configuration and import pieces of it here:
    # ./nvim.nix
  ];

  nixpkgs = {
    # You can add overlays here
    overlays = [
      # If you want to use overlays exported from other flakes:
      #neovim-nightly-overlay.overlays.default
      #rust-overlay.overlays.default

      # Or define it inline, for example:
      # (final: prev: {
      #   hi = final.hello.overrideAttrs (oldAttrs: {
      #     patches = [ ./change-hello-to-hi.patch ];
      #   });
      # })
    ];
    # Configure your nixpkgs instance
    config = {
      # Disable if you don't want unfree packages
      allowUnfree = true;
      # Workaround for https://github.com/nix-community/home-manager/issues/2942
      allowUnfreePredicate = (_: true);
    };
  };

  # TODO: Set your username
  home = {
    username = "z4";
    homeDirectory = "/home/z4";
  };

  /* # Add stuff for your user as you see fit: */
  /* programs.neovim = { */
  /*   enable = true; */
  /*   #defaultEditor = true; */
  /*   plugins = with pkgs.vimPlugins; [ nvim-treesitter ]; */
  /*   #extraConfig = lib.fileContents /home/z4/.config/nvim/init.lua; */

  /* }; */

  xdg.configFile.nvim.source = ~/nix-config/home-manager/config_files/nvim;

  programs.zsh = {
    enable = true;
    enableAutosuggestions = true;
    enableSyntaxHighlighting = true;
    oh-my-zsh = {
      enable = true;
      theme = "robbyrussell";
      plugins = [ 

      ];
    };
  };

 # programs.kitty = {
 #   enable = true;
 #   settings = {
 #     scrollback_lines = 10000;
 #     font_size = 14;
 #     background_opacity = "0.90";
 #     input_delay = 3;
 #   };   
 # };

  home.packages = with pkgs; [ 
        steam 
        polybar
        rofi
        polybar
        kitty
        feh
        nix-zsh-completions
        zsh-syntax-highlighting
  ];

  # Enable home-manager and git
  programs.home-manager.enable = true;
  programs.git.enable = true;

  # Nicely reload system units when changing configs
  systemd.user.startServices = "sd-switch";

  # https://nixos.wiki/wiki/FAQ/When_do_I_update_stateVersion
  home.stateVersion = "22.11";
}
