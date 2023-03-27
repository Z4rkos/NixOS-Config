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
            font-awesome_5
            fira-code
            fira-code-symbols
            waffle
            terminus_font
            nerdfonts
            /* (nerdfonts.override { fonts = ["JetBrainsMono"]; }) */
        ];
    }
