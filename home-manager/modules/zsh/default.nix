{ inputs, lib, config, pkgs, ... }: {
  home.packages = with pkgs; [
    nix-zsh-completions
    zsh-syntax-highlighting
    zsh-powerlevel10k
  ];

  programs.zsh = {
      enable = true;
      /* dotDir = ".config/zsh"; */

  plugins = [
    {
      name = "powerlevel10k";
      src = pkgs.zsh-powerlevel10k;
      file = "share/zsh-powerlevel10k/powerlevel10k.zsh-theme";
    }
    {
      name = "powerlevel10k-config";
      src = lib.cleanSource ./p10k-config;
      file = "p10k.zsh";
    }
  ];

      enableAutosuggestions = true;
      enableSyntaxHighlighting = true;
      enableVteIntegration = true;
      shellAliases = {
          options =  "firefox https://search.nixos.org/options";
          packages = "firefox https://search.nixos.org/packages";
          pwn_template = "cp ~/hackin/templates/pwn_template.py ./solve.py";
          gbd = "gef";
      };
      initExtra = "export PATH=$PATH:/home/z4/bin";
      oh-my-zsh = {
        enable = true;
        /* theme = "robbyrussell"; */
        plugins = [ 
  
        ];
      };
    };
}
