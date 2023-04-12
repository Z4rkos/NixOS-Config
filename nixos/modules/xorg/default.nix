{ config, lib, pkgs, ... }: 
{
  services.xserver = {
    enable = true;
    windowManager.bspwm.enable = true;
    displayManager.startx = {
      enable = true;
    };
    autorun = false;
    exportConfiguration = true;
    /* layout = "us,no"; */
    xkbVariant = "";
    /* xkbOptions = "grp:rctrl_rshift_toggle"; */

    /* config = '' */
    /*   Section "Monitor" */
    /*       Identifier "eDP-1-1" */
    /*       Option "Primary" "true" */
    /*   EndSection */

    /*   Section "Monitor" */
    /*       Identifier "HDMI-0" */
    /*       Option "RightOf" "eDP-1-1" */
    /*   EndSection */
    /* ''; */
  };
}
      /* Section "Screen" */
      /*   Option         "metamodes" "nvidia-auto-select +0+0 {ForceCompositionPipeline=On, ForceFullCompositionPipeline=On}" */
      /*   Option         "AllowIndirectGLXProtocol" "off" */
      /* EndSection */
      /* Section "Extensions" */
      /*   Option         "Composite" "Disable" */
      /* EndSection */
