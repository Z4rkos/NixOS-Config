{ config, lib, pkgs, ... }: {

  services.xserver.videoDrivers = [ "nvidia" ];
  /* boot.extraModprobeConfig = '' */
  /*       options bbswitch load_state=-1 unload_state=1 nvidia-drm nvidia-uvm */
  /*     ''; */

  hardware.nvidia = {
      package = config.boot.kernelPackages.nvidiaPackages.beta;
      /* open = true; */
      modesetting.enable = false;
      nvidiaSettings = true;
      #hardware.opengl.enable = true;
      # boot.kernelParams = [ "module_blacklist=i915" ];
      prime = {
        sync.enable = true;

        # Bus ID of the NVIDIA GPU. You can find it using lspci, either under 3D or VGA
        nvidiaBusId = "PCI:01:00:0";

        # Bus ID of the Intel GPU. You can find it using lspci, either under 3D or VGA
        intelBusId = "PCI:00:02:0";
      };
  };
}
