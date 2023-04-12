local function file_exists(file)
    local f = io.open(file, "r")
    if f then f:close() end
    return f ~= nil
end

local function get_line(file)
    local f = io.open(file, "r")
    if not f then
        print("Error: file " .. file .. " not found.")
        return nil
    end
    local line = f:read("*line")
    f:close()
    return line
end

local function get_theme()
    local home = os.getenv("HOME")
    local theme_file = string.format("%s/.current_theme", home)
    if file_exists(theme_file) then
        theme = get_line(theme_file)
    else
        print("Error: theme file not found.")
        return nil
    end
    return theme
end


local theme = get_theme()
if theme then
    vim.cmd(':colorscheme ' .. theme)
else
    print("Error: theme not found.")
    vim.cmd(':colorscheme default')
end

-- vim.cmd [[
-- try
--   :colorscheme theme
-- catch /^Vim\%((\a\+)\)\=:E185/
--   colorscheme default
--   set background=dark
-- endtry
-- ]]

-- vim.cmd [[
-- try
--   :colorscheme ]] .. theme .. [[
-- catch /^Vim\%((\a\+)\)\=:E185/
--   colorscheme default
--   set background=dark
-- endtry
-- ]]
