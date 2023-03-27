# Edit this configuration file to define what should be installed on
# your system.  Help is available in the configuration.nix(5) man page
# and in the NixOS manual (accessible by running ‘nixos-help’).

{ config, lib, pkgs, specialArgs, ... }: {

  nix.settings = {
    experimental-features = [ "nix-command" "flakes" ];
    substituters = ["https://hyprland.cachix.org"];
    trusted-public-keys = ["hyprland.cachix.org-1:a7pgxzMz7+chwVL3/pzj6jIBMioiJM7ypFP8PwtkuGc="];
  };


  imports =
    [ # Include the results of the hardware scan.
      ./hardware-configuration.nix
      ./nvidia.nix
      ./fonts.nix
      ./xorg
      ./hyprland.nix
    ];
  virtualisation.vmware.host.enable = true;
  virtualisation.docker.enable = true;

  # Bootloader.
  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;
  boot.loader.efi.efiSysMountPoint = "/boot/efi";

  networking.hostName = "plato"; # Define your hostname.
  # networking.wireless.enable = true;  # Enables wireless support via wpa_supplicant.

  # Configure network proxy if necessary
  # networking.proxy.default = "http://user:password@proxy:port/";
  # networking.proxy.noProxy = "127.0.0.1,localhost,internal.domain";

  # Enable networking
  networking.networkmanager.enable = true;

  # Set your time zone.
  time.timeZone = "Europe/Oslo";

  # Select internationalisation properties.
  i18n.defaultLocale = "en_US.UTF-8";

  /* # Enable the X11 windowing system. */
  /* services.xserver = { */
  /*   enable = true; */
  /*   windowManager.bspwm.enable = true; */
  /*   displayManager.sddm = { */
  /*     enable = true; */
  /*   }; */
  /*   layout = "us,no"; */
  /*   xkbVariant = ""; */
  /*   xkbOptions = "grp:rctrl_rshift_toggle"; */
  /* }; */

  /* services.xserver = { */
  /*   enable = true; */
  /*   windowManager.bspwm.enable = true; */
  /*   displayManager.sddm = { */
  /*     enable = true; */
  /*   }; */
  /*   config = '' */
  /*     Section "Device" */
  /*       Option         "TripleBuffer" "on" */
  /*       Option         "Coolbits" "28" */
  /*     EndSection */

  /*     Section "Screen" */
  /*       Option         "metamodes" "nvidia-auto-select +0+0 {ForceCompositionPipeline=On, ForceFullCompositionPipeline=On}" */
  /*       Option         "AllowIndirectGLXProtocol" "off" */

  /*     Section "Extensions" */
  /*       Option         "Composite" "Disable" */
  /*     EndSection */
  /*   ''; */
  /*   layout = "us,no"; */
  /*   xkbVariant = ""; */
  /*   xkbOptions = "grp:rctrl_rshift_toggle"; */
  /* }; */

  # Enable CUPS to print documents.
  services.printing.enable = true;

  # Enable sound with pipewire.
  sound.enable = true;
  hardware.pulseaudio.enable = true;
  security.rtkit.enable = true;
  services.pipewire = {
    enable = false;
    alsa.enable = true;
    alsa.support32Bit = true;
    pulse.enable = true;
    # If you want to use JACK applications, uncomment this
    #jack.enable = true;

    # use the example session manager (no others are packaged yet so this is enabled by default,
    # no need to redefine it in your config for now)
    #media-session.enable = true;
  };

  # Enable touchpad support (enabled default in most desktopManager).
  services.xserver.libinput.enable = true;

  # Define a user account. Don't forget to set a password with ‘passwd’.
  users.users.z4 = {
    isNormalUser = true;
    shell = pkgs.zsh;
    description = "Sokrates";
    extraGroups = [ "networkmanager" "wheel" "audio" "video" "docker" ];
    packages = with pkgs; [
    ];
  };

  # Allow unfree packages
  nixpkgs.config.allowUnfree = true;

  
  hardware.opengl.driSupport32Bit = true;
  # List packages installed in system profile. To search, run:
  # $ nix search wget
  environment.systemPackages = with pkgs; [
    neovim
    sxhkd
    bspwm
    wget
    git
    xdotool
    picom
    killall
    gnome.gnome-keyring # Required to make NetworkManager remember passwords...
    libsecret
    rustc # Store collision if i put this in home-manager instead. Too lazy to fix it atm.
    rustup
    cargo
    ntfs3g # So I can mount ntfs
    glibc
  ];

  services.gnome.gnome-keyring.enable = true;
  # Some programs need SUID wrappers, can be configured further or are
  # started in user sessions.
  # programs.mtr.enable = true;
  # programs.gnupg.agent = {
  #   enable = true;
  #   enableSSHSupport = true;
  # };

  # List services that you want to enable:

  #services.picom.enable = true;
  # Enable the OpenSSH daemon.
  # services.openssh.enable = true;

  # Open ports in the firewall.
  /* networking.firewall.allowedTCPPorts = [ 8000 9997 ]; */
  /* networking.firewall.allowedUDPPorts = [ 9669 9997 ]; */
  # Or disable the firewall altogether.
  networking.firewall.enable = false;

  # This value determines the NixOS release from which the default
  # settings for stateful data, like file locations and database versions
  # on your system were taken. It‘s perfectly fine and recommended to leave
  # this value at the release version of the first install of this system.
  # Before changing this value read the documentation for this option
  # (e.g. man configuration.nix or on https://nixos.org/nixos/options.html).
  security.sudo.extraRules = [
      {
        groups = [ "wheel" ];
        commands = [ { command = "ALL"; options = [ "NOPASSWD" ]; } ];
      }
  ];
  system.stateVersion = "22.11"; # Did you read the comment?

}
