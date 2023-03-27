{pkgs, ...}: 
{

  programs.doom-emacs = {
    enable = true;
    doomPrivateDir = ./.;
  };

  services.emacs = {
      enable = true;
      client.enable = true;
  };
}
