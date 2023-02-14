{pkgs, ...}: {
        environment.systemPackages = with pkgs; [
            nerdfonts
            jetbrains-mono
            font-awesome
            fire-code
            fira-code-symbols
        ];

        fonts.font = with pkgs; [
            nerdfonts
            (nerdfonts.override { fonts = ["JetBrainsMono"]; })
            font-awesome
            fire-code
            fira-code-symbols
        ];
    }
