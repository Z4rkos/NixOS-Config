{ config, ... }: {

  services.xserver.videoDrivers = [ "nvidia" ];

  # LoL won't lauch if this is 1 on X
  boot.kernelParams = if config.programs.hyprland.enable then [ "nvidia-drm.modeset=1" ] else [];

  hardware.nvidia = {
      package = config.boot.kernelPackages.nvidiaPackages.beta;

      # LoL won't lauch if this is true on X
      modesetting.enable = if config.programs.hyprland.enable then true else false;

      # Enable nvida-settings
      nvidiaSettings = true;

      #hardware.opengl.enable = true;

      # Need this for dual monitor to work.
      prime = {
        sync.enable = true;

        # Bus ID of the NVIDIA GPU. You can find it using lspci, either under 3D or VGA
        nvidiaBusId = "PCI:01:00:0";

        # Bus ID of the Intel GPU. You can find it using lspci, either under 3D or VGA
        intelBusId = "PCI:00:02:0";
      };
  };
}
