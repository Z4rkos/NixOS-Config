{ config, lib, pkgs, ... }: 
{
  services.xserver = {
    enable = true;
    windowManager.bspwm.enable = true;
    displayManager.sddm = {
      enable = true;
    };
    /* config = '' */
    /*   Section "Device" */
    /*     Identifier     "Card0" */
    /*     Option         "TripleBuffer" "on" */
    /*     Option         "Coolbits" "28" */
    /*   EndSection */
    /* ''; */
    exportConfiguration = false;
    layout = "us,no";
    xkbVariant = "";
    xkbOptions = "grp:rctrl_rshift_toggle";
  };
}
      /* Section "Screen" */
      /*   Option         "metamodes" "nvidia-auto-select +0+0 {ForceCompositionPipeline=On, ForceFullCompositionPipeline=On}" */
      /*   Option         "AllowIndirectGLXProtocol" "off" */
      /* EndSection */
      /* Section "Extensions" */
      /*   Option         "Composite" "Disable" */
      /* EndSection */
