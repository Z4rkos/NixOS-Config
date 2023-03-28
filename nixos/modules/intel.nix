{config, lib, ...}:
{
  hardware.cpu.intel.updateMicrocode = lib.mkDefault config.hardware.enableRedistributableFirmware;

# Only use this for Kaby-lake CPUs!
  boot.kernelParams = [
    "i915.enable_fbc=1"
    "i915.enable_psr=2"
  ];
}
