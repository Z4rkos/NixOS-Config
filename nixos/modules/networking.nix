{...}:
{

  # Enable networking
  networking = {
    networkmanager.enable = true;
    hostName = "plato";
    wireless.enable = true;  # Enables wireless support via wpa_supplicant.

    routes = [
      # pfSense route
      {
        address = "192.168.42.0";
        prefixLength = 24;
        via = "172.16.42.128";
      }
    ];

    # Firewall
    firewall = {
      enable = false;
    # Open ports in the firewall.
    /* allowedTCPPorts = [ 8000 9997 ]; */
    /* allowedUDPPorts = [ 9669 9997 ]; */
    };
    # Configure network proxy if necessary
    # proxy.default = "http://user:password@proxy:port/";
    # proxy.noProxy = "127.0.0.1,localhost,internal.domain";
  };
}
