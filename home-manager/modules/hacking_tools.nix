{ inputs, lib, config, pkgs, ... }: {
    home.packages = with pkgs; [
        metasploit
        nmap
        burpsuite
        thc-hydra
        ghidra
        radare2
        pwndbg
        gef
        gdb
        gobuster
        nikto
        dirb
        wireshark
        whois
        john
        cyberchef
        hashcat
        stegseek
        stegsolve
    ];
}
