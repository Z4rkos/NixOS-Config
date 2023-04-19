{ pkgs, lib, config, ... }:

let
  conf_path = /home/z4/nix-config/home-manager/dotfiles/nvim-nix;
in
  {
    # other configuration options
    programs.neovim = {
      enable = true;
      extraConfig = ''
        luafile ${conf_path}/settings.lua
        luafile ${conf_path}/keybindings.lua
        luafile ${conf_path}/plugins/treesitter.lua
        luafile ${conf_path}/plugins/telescope.lua
        luafile ${conf_path}/plugins/nvim-tree.lua
        luafile ${conf_path}/plugins/evil_lualine.lua
        luafile ${conf_path}/plugins/autopairs.lua
        luafile ${conf_path}/plugins/cmp.lua
        luafile ${conf_path}/plugins/lsp/lsp.lua
        source ${conf_path}/colors/spaceduck.vim
      '';
      
      extraPackages = with pkgs; [
        vimPlugins.nvim-treesitter.withAllGrammars
      ];

      plugins = with pkgs.vimPlugins; [
        # Workflow support
        nvim-tree-lua
        telescope-nvim
        lualine-nvim
        luasnip

        # Eye candy
        nvim-web-devicons
        nvim-treesitter.withAllGrammars

        # LSP
        nvim-lspconfig
        
        # C0mpletion
        cmp-nvim-lsp
        cmp-clippy
        cmp-buffer
        cmp-spell
        cmp-path
        cmp-fuzzy-path
        cmp_luasnip

        # Debuggind
        nvim-dap
        nvim-dap-ui
        nvim-dap-virtual-text

        rust-tools-nvim
        
        vim-nix
        indentLine
        plenary-nvim
        trouble-nvim
        nvim-autopairs
      ];
    };
  }

