{config, lib, ...}:
{
    programs.neovim = {
        enable = true;
        defaultEditor = true;
        extraConfig = lib.fileContents ./dotfiles/nvim/init.lua;
    };
}
