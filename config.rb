###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

activate :directory_indexes

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload, :no_swf => true
end

activate :external_pipeline,
         name: :webpack,
         command: build? ? './node_modules/webpack/bin/webpack.js --bail -p' : './node_modules/webpack/bin/webpack.js --watch --color -d',
         source: '.tmp/dist',
         latency: 1

set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascript'

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
  activate :minify_html
  activate :asset_hash
end
