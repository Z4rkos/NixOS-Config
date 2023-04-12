{...}:
{

  # Enable networking
  networking = {
    hostName = "plato";

    networkmanager.enable = true;

    interfaces."vmnet8".ipv4.routes = [
      # pfSense route
      {
        address = "192.168.42.0";
        prefixLength = 24;
        via = "172.16.42.128";
      }
    ];

    # Firewall
    firewall = {
      enable = true;
    # Open ports in the firewall.
    /* allowedTCPPorts = [ 8000 9997 ]; */
    /* allowedUDPPorts = [ 9669 9997 ]; */
    };
    # Configure network proxy if necessary
    # proxy.default = "http://user:password@proxy:port/";
    # proxy.noProxy = "127.0.0.1,localhost,internal.domain";
  };
}
