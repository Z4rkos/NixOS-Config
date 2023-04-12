{ pkgs, config, ... }:

{
  # other configuration options
  programs.neovim = {
    enable = true;
    extraConfig = "/home/z4/nix-config/home-manager/dotfiles/nvim";
    extraPackages = with pkgs; [
      vimPlugins.nvim-treesitter.withAllGrammars
    ];
    /* config = { */
    /*   "init.vim".source = "${config.programs.neovim.extraConfig}/init.lua"; */
    /*   # other Neovim configuration options */
    /* }; */
  };
  home.file = {
    ".config/nvim".source = config.lib.file.mkOutOfStoreSymlink /home/z4/nix-config/home-manager/dotfiles/nvim;
  };
}

