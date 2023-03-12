{ inputs, lib, config, pkgs, ... }: 
  let
    pythonPackages = with pkgs.python310Packages; [
      pip
      flake8
      ];
  in
  {
    home.packages = with pkgs; [
      python311
    ] ++ pythonPackages;
}
