###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout
set :haml, {:ugly => true, :format => :html5}

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration
activate :directory_indexes

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload, :no_swf => true
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  activate :autoprefixer do |config|
    config.browsers = ['last 2 versions', 'Explorer >= 9']
  end
  activate :minify_html
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end
