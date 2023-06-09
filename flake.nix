{
  description = "A somewhat functional and cool NixOS config.";

  inputs = {
    # Nixpkgs
    nixpkgs.url = "github:nixos/nixpkgs/nixos-22.11";
    unstable.url = "github:nixos/nixpkgs/nixos-unstable";
    /* nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable"; */

    # Home manager
    home-manager.url = "github:nix-community/home-manager";
    home-manager.inputs.nixpkgs.follows = "nixpkgs";

    # Other
    hyprland.url = "github:hyprwm/Hyprland";
    doom-emacs.url = "github:nix-community/nix-doom-emacs";

    neovim-nightly.url = "github:nix-community/neovim-nightly-overlay";
    # rust-overlay.url = "github:oxalica/rust-overlay";
    # nix-colors.url = "github:misterio77/nix-colors";
  };

  outputs = { 
    nixpkgs, 
    home-manager, 
    /* unstable, */ 
    hyprland, 
    doom-emacs, 
    neovim-nightly,
    ... 
    }@inputs: {
      # NixOS configuration entrypoint
      # Available through 'nixos-rebuild --flake .#your-hostname'
      nixosConfigurations = {
        # FIXME replace with your hostname
        plato = nixpkgs.lib.nixosSystem {
          specialArgs = { inherit inputs; }; # Pass flake inputs to our config
          # > Our main nixos configuration file <
          modules = [ ./nixos/configuration.nix hyprland.nixosModules.default];
        };
      };

      # Standalone home-manager configuration entrypoint
      # Available through 'home-manager --flake .#your-username@your-hostname'
      homeConfigurations = {
        "z4@plato" = home-manager.lib.homeManagerConfiguration {
          pkgs = nixpkgs.legacyPackages.x86_64-linux; # Home-manager requires 'pkgs' instance
          extraSpecialArgs = { inherit inputs; }; # Pass flake inputs to our config
          # > Our main home-manager configuration file <
          modules = [ ./home-manager/home.nix doom-emacs.hmModule ];
        };
      };
    };
}
