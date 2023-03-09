{ config, lib, pkgs, ... }: 
{
  services.xserver = {
    enable = true;
    windowManager.bspwm.enable = true;
    displayManager.sddm = {
      enable = true;
    };
    config = ''
      Section "Device"
        Option         "TripleBuffer" "on"
        Option         "Coolbits" "28"
      EndSection

      Section "Screen"
        Option         "metamodes" "nvidia-auto-select +0+0 {ForceCompositionPipeline=On, ForceFullCompositionPipeline=On}"
        Option         "AllowIndirectGLXProtocol" "off"

      Section "Extensions"
        Option         "Composite" "Disable"
      EndSection
    '';
    layout = "us,no";
    xkbVariant = "";
    xkbOptions = "grp:rctrl_rshift_toggle";
  };
}
