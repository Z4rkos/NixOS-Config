{config, pkgs, ...}: {
        environment.systemPackages = with pkgs; [
            nerdfonts
            jetbrains-mono
            font-awesome
            fira-code
            fira-code-symbols
            waffle
            terminus_font
        ];

        fonts.fonts = with pkgs; [
            (nerdfonts.override { fonts = ["JetBrainsMono"]; })
            font-awesome
            fira-code
            fira-code-symbols
            waffle
            terminus_font
        ];
    }
