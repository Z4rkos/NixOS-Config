{ config, lib, pkgs, ... }: {

  services.xserver.videoDrivers = [ "nvidia" ];
  hardware.nvidia = {
      package = config.boot.kernelPackages.nvidiaPackages.beta;
      #hardware.nvidia.modesetting.enable = true;
      nvidiaSettings = true;
      #hardware.opengl.enable = true;
      # boot.kernelParams = [ "module_blacklist=i915" ];
      #boot.extraModprobeConfig = ''
      #      options bbswitch load_state=-1 unload_state=1 nvidia-drm nvidia-uvm
      #    '';
      prime = {
        sync.enable = true;

        # Bus ID of the NVIDIA GPU. You can find it using lspci, either under 3D or VGA
        nvidiaBusId = "PCI:01:00:0";

        # Bus ID of the Intel GPU. You can find it using lspci, either under 3D or VGA
        intelBusId = "PCI:00:02:0";
      };
  };
}
