{ pkgs, lib, config, ... }:

{
  # other configuration options
  programs.neovim = {
    enable = true;
    /* package = pkgs.neovim-nightly; */
    /* extraConfig = "/home/z4/nix-config/home-manager/dotfiles/nvim"; */
    extraConfig = ''
    '';
    extraPackages = with pkgs; [
      vimPlugins.nvim-treesitter.withAllGrammars
    ];
    plugins = with pkgs.vimPlugins; [
      indentLine
      nvim-tree-lua
      nvim-web-devicons

      nvim-treesitter
    ];
  };
  /* home.file = { */
  /*   ".config/nvim".source = config.lib.file.mkOutOfStoreSymlink /home/z4/nix-config/home-manager/dotfiles/nvim; */
  /* }; */
}

