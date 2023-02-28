
{ inputs, lib, config, pkgs, ... }: {
    home.packages = with pkgs; [
        metasploit
        nmap
        burpsuite
        thc-hydra
        ghidra
        gobuster
    ];
}
