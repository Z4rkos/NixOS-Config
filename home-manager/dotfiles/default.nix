{config, ...}:
  let
    dotfilesDir = /home/z4/nix-config/home-manager/dotfiles;
    files = builtins.readDir dotfilesDir;
    storeLink = config.lib.file.mkOutOfStoreSymlink;
  in
    {
    /* xdg.configFile = builtins.mapAttrs (name: file: { */
    /*   source = storeLink "${dotfilesDir}/${name}"; */
    /* }) files; */

      imports = [ 
        ./doom-emacs 
        ./nvim
      ];

      home.file =  {
        # Dotfiles I change alot is managed non-atoically.
        ".config/bspwm".source = storeLink /home/z4/nix-config/home-manager/dotfiles/bspwm;
        ".config/polybar".source = storeLink /home/z4/nix-config/home-manager/dotfiles/polybar;
        ".config/eww".source = storeLink /home/z4/nix-config/home-manager/dotfiles/eww;
        ".config/picom.conf".source = storeLink /home/z4/nix-config/home-manager/dotfiles/picom.conf;
        ".config/nvim".source = storeLink /home/z4/nix-config/home-manager/dotfiles/nvim;
        ".config/kitty".source = storeLink /home/z4/nix-config/home-manager/dotfiles/kitty;
        ".config/sxhkd".source = storeLink /home/z4/nix-config/home-manager/dotfiles/sxhkd;
        ".config/rofi".source = storeLink /home/z4/nix-config/home-manager/dotfiles/rofi;
        ".config/conky".source = storeLink /home/z4/nix-config/home-manager/dotfiles/conky;
        ".config/hypr".source = storeLink /home/z4/nix-config/home-manager/dotfiles/hypr;
        ".config/waybar".source = storeLink /home/z4/nix-config/home-manager/dotfiles/waybar;


        ".config/sx".source = /home/z4/nix-config/home-manager/dotfiles/sx;
      };
    }
