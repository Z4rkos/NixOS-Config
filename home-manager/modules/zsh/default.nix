{ inputs, lib, config, pkgs, ... }: {
  programs.zsh = {
      enable = true;
      /* initExtra = '' */
      /* ''; */


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
        theme = "robbyrussell";
        plugins = [ 
  
        ];
      };
    };
}
