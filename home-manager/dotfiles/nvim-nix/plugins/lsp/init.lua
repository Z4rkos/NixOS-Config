local status_ok, _ = pcall(require, "lspconfig")
if not status_ok then
	return
end

require("plugins.lsp.lsp-installer")
require("plugins.lsp.handlers").setup()
require("plugins.lsp.null-ls")

-- require('plugins.lsp.rust_tools')
-- require('plugins.lsp.inlay_hints').enable()
