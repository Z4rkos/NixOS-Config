vim.g.mapleader = " "

-- Functional wrapper for mapping custom keybindings
local function map(mode, lhs, rhs, opts)
    local options = { noremap = true, silent = true}
    if opts then
        options = vim.tbl_extend("force", options, opts)
    end
    vim.api.nvim_set_keymap(mode, lhs, rhs, options)
end

-- Vim --

-- Navigate buffers
map("n", "<S-l>", ":bnext<CR>")
map("n", "<S-h>", ":bprevious<CR>")

-- Delete buffer
map("n", "<Leader>e", ":Bdelete<cr>")


-- Rename
map("n", "<F2>", ":IncRename ")

-- Resize with arrows
map("n", "<C-Up>", ":resize -2<CR>")
map("n", "<C-Down>", ":resize +2<CR>")
map("n", "<C-Left>", ":vertical resize -2<CR>")
map("n", "<C-Right>", ":vertical resize +2<CR>")

-- Navigate buffers 
map("n", "<C-h>", "<C-W>h")
map("n", "<C-j>", "<C-W>j")
map("n", "<C-k>", "<C-W>k")
map("n", "<C-l>", "<C-W>l")

-- Go to tabs with ctrl {tab_num}
map ("n", "<C-1>", "1gt")
map ("n", "<C-2>", "2gt")
map ("n", "<C-3>", "3gt")
map ("n", "<C-4>", "4gt")
map ("n", "<C-5>", "5gt")
-- map ("n", "<C-6>", "6gt")
-- map ("n", "<C-7>", "7gt")
-- map ("n", "<C-8>", "8gt")
-- map ("n", "<C-9>", "9gt")

-- escape removes highlighting by setting the search register (@/) to an empty string.
map("n", "<esc>", ':let@/=""<esc>')

-- Stay in indent mode
map("v", "<", "<gv")
map("v", ">", ">gv")

-- Move text up and down
map("v", "<A-j>", ":m .+1<CR>==")
map("v", "<A-k>", ":m .-2<CR>==")

-- Move text up and down in visual block mode
map("x", "J", ":move '>+1<CR>gv-gv")
map("x", "K", ":move '<-2<CR>gv-gv")
map("x", "<A-j>", ":move '>+1<CR>gv-gv")
map("x", "<A-k>", ":move '<-2<CR>gv-gv")

-- Leader p to not yank when pasting
map("x", "<leader>p", "\"_dP")

-- Leader y to yank to clipboard
map("n", "<leader>y", "\"+y")
map("v", "<leader>y", "\"+y")

-- Leader d to not yank
map("n", "<leader>d", "\"_d")
map("v", "<leader>d", "\"_d")

map("n", "<leader>c", "\"_c")
map("v", "<leader>c", "\"_c")

-- Vimwiki --
map("v", "<leader>b", "c*<esc>pa*")
map("v", '<leader>\"', 'c"<esc>pa"<esc>')
map("v", "<leader>\'", "c'<esc>pa'<esc>")

-- Telescope --
map("n", "<Leader>f", "<cmd>Telescope find_files<cr>")
map("n", "<Leader>g", "<cmd>Telescope live_grep<cr>")
map("n", "<Leader>b", "<cmd>Telescope buffers<cr>")
map("n", "<Leader>h", "<cmd>Telescope help_tags<cr>")


-- NerdTree --
map("n", "<Leader>t", ":NvimTreeToggle<cr>", {noremap=false})

-- SnipRun --
map("x", "<Leader>r", ":SnipRun<cr>")
map("v", "<Leader>r", ":SnipRun<cr>")

-- DAP --
-- map("n", "<Leader>dsc", ":lua require('dap').continue()<CR>")
-- map("n", "<Leader>dsv", ":lua require('dap').step_over()<CR>")
-- map("n", "<Leader>dsi", ":lua require('dap').step_into()<CR>")
-- map("n", "<Leader>dso", ":lua require('dap').step_out()<CR>")

-- map("n", "<Leader>dhh", ":lua require('dap.ui.variables').hover()<CR>")
-- map("v", "<Leader>dhv", ":lua require('dap.ui.variables').visual_hover()<CR>")

-- map("n", "<Leader>duh", ":lua require('dap.ui.widgets').hover()<CR>")
-- map("n", "<Leader>duf", ":lua local widgets=require('dap.ui.widgets');widgets.centered_float(widgets.scopes)<CR>")

-- map("n", "<Leader>dro", ":lua require('dap').repl.open()<CR>")
-- map("n", "<Leader>drl", ":lua require('dap').repl.run_last()<CR>")

-- map("n", "<Leader>dbc", ":lua require('dap').set_breakpoint(vim.fn.input('Breakpoint condition: '))<CR>")
-- map("n", "<Leader>dbm", ":lua require('dap').set_breakpoint({ nil, nil, vim.fn.input('Log point message: ') })<CR>")
-- map("n", "<Leader>dbt", ":lua require('dap').toggle_breakpoint()<CR>")

-- map("n", "<Leader>dc", ":lua require('dap.ui.variables').scopes()<CR>")
-- map("n", "<Leader>di", ":lua require('dapui').toggle()<CR>")
