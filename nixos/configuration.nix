{ config, lib, pkgs, specialArgs, ... }: 
{

  nix.settings = {
    experimental-features = [ "nix-command" "flakes" ];
    substituters = ["https://hyprland.cachix.org"];
    trusted-public-keys = ["hyprland.cachix.org-1:a7pgxzMz7+chwVL3/pzj6jIBMioiJM7ypFP8PwtkuGc="];
  };


  imports =
    [ # Include the results of the hardware scan.
      ./hardware-configuration.nix
      ./modules
    ];



  boot = {
    # Would like to use this, but nvidia beta doenst like it.
   # kernelPackages = pkgs.linuxPackages_latest;
    /* "zswap.enabled=1" */
  kernelParams = [

    # MuQSS Stuff
    "nohz_full=1"
    "rcu_nocbs=0-7,8-15"
    "muqss"
    "quiet"
    "splash"
  ];
  # Bootloader.
    loader = {
      systemd-boot.enable = true;
      efi.canTouchEfiVariables = true;
      efi.efiSysMountPoint = "/boot/efi";
    };
  };


  # Set your time zone.
  time.timeZone = "Europe/Oslo";

  # Select internationalisation properties.
  i18n.defaultLocale = "en_US.UTF-8";
  i18n.inputMethod = {
      enabled = "fcitx5";
  };

  # Enable CUPS to print documents.
  /* services.printing.enable = true; */

  # Enable sound.
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

  services.dbus.enable = true;

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
  nixpkgs.config = { 
    allowUnfree = true;
    /* allowBroken = true; */
  };

  
  hardware.opengl = {
    enable = true;
    /* nvidiaPackages = true; */
    driSupport32Bit = true;
  };
  # List packages installed in system profile. To search, run:
  # $ nix search wget
  environment.systemPackages = with pkgs; [
    neovim
    sxhkd
    bspwm
    wget
    git
    xdotool
    picom-jonaburg
    killall
    gnome.gnome-keyring # Required to make NetworkManager remember passwords...
    libsecret
    rustc # Store collision if i put this in home-manager instead. Too lazy to fix it atm.
    rustup
    cargo
    ntfs3g # So I can mount ntfs
    glibc
    libgccjit
    binutils
    nixos-option # For troubleshooting
  ];

  services.gnome.gnome-keyring.enable = true;

  virtualisation.vmware.host.enable = true;
  virtualisation.docker.enable = true;


  # Enable networking
  networking.networkmanager.enable = true;
  networking.hostName = "plato"; # Define your hostname.

  networking.firewall.enable = true;
  # Open ports in the firewall.
  /* networking.firewall.allowedTCPPorts = [ 8000 9997 ]; */
  /* networking.firewall.allowedUDPPorts = [ 9669 9997 ]; */
  # Configure network proxy if necessary
  # networking.proxy.default = "http://user:password@proxy:port/";
  # networking.proxy.noProxy = "127.0.0.1,localhost,internal.domain";
  # networking.wireless.enable = true;  # Enables wireless support via wpa_supplicant.


  security.sudo.extraRules = [
      {
        groups = [ "wheel" ];
        commands = [ { command = "ALL"; options = [ "NOPASSWD" ]; } ];
      }
  ];
  system.stateVersion = "22.11"; # Did you read the comment?

}
