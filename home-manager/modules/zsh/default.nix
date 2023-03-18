{ inputs, lib, config, pkgs, ... }: {
  programs.zsh = {
      enable = true;
      enableAutosuggestions = true;
      enableSyntaxHighlighting = true;
      shellAliases = {
          options =  "firefox https://search.nixos.org/options";
          packages = "firefox https://search.nixos.org/packages";
          pwn_template = "cp ~/hackin/templates/pwn_template.py ./solve.py";
          gbd = "gef";
      };
      #initExtra = "export PATH=$PATH:${binDirectory}";
      oh-my-zsh = {
        enable = true;
        theme = "robbyrussell";
        plugins = [ 
  
        ];
      };
    };
}
