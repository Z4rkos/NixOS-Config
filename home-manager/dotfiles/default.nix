{config, ...}:
  let
    dotfilesDir = /home/z4/nix-config/home-manager/dotfiles;
    files = builtins.readDir dotfilesDir;
    storeLink = config.lib.file.mkOutOfStoreSymlink;
  in
    {
  xdg.configFile = builtins.mapAttrs (name: file: {
    source = config.lib.file.mkOutOfStoreSymlink "${dotfilesDir}/${name}";
  }) files;

      /* home.file =  { */
      /*   ".config/bspwm".source = storeLink /home/z4/nix-config/home-manager/dotfiles/bspwm; */
      /*   ".config/polybar".source = storeLink /home/z4/nix-config/home-manager/dotfiles/polybar; */
      /*   ".config/eww".source = storeLink /home/z4/nix-config/home-manager/dotfiles/polybar; */
      /*   ".config/picom.conf".source = storeLink /home/z4/nix-config/home-manager/dotfiles/picom.conf; */
      /*   ".config/nvim".source = storeLink /home/z4/nix-config/home-manager/dotfiles/nvim; */
      /*   ".config/kitty".source = storeLink /home/z4/nix-config/home-manager/dotfiles/kitty; */
      /*   ".config/sxhkd".source = storeLink /home/z4/nix-config/home-manager/dotfiles/sxhkd; */
      /*   ".config/rofi".source = storeLink /home/z4/nix-config/home-manager/dotfiles/rofi; */
      /* }; */
    }
