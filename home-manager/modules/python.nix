{ inputs, lib, config, pkgs, ... }: 
  let
    pythonPackages = p: with p; [
      pip
      flake8
      openai
      requests
      ];
  in
  {
    home.packages = with pkgs; [
      (python3.withPackages pythonPackages)
    ];
}
