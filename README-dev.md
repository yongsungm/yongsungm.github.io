# Local Development Guide

This guide will help you set up and run your TechFolio portfolio site locally for development.

## Prerequisites

You'll need Ruby installed on your system:

- **macOS**: `brew install ruby`
- **Ubuntu/Debian**: `sudo apt-get install ruby-full build-essential zlib1g-dev`
- **Windows**: Use [RubyInstaller](https://rubyinstaller.org/)
- **Other systems**: See [Ruby installation guide](https://www.ruby-lang.org/en/downloads/)

## Quick Start

1. **Initial setup** (run once):
   ```bash
   ./local-dev.sh
   ```

2. **Start development server**:
   ```bash
   ./local-dev.sh serve
   ```

3. **Build site only**:
   ```bash
   ./local-dev.sh build
   ```

## Manual Commands

If you prefer to run commands manually:

```bash
# Install dependencies
bundle install

# Serve with live reload
bundle exec jekyll serve --livereload

# Build for production
bundle exec jekyll build

# Clean build files
bundle exec jekyll clean
```

## Development Workflow

1. **Content editing**: Edit markdown files in `projects/` and `essays/`
2. **Bio updates**: Modify `_data/bio.json`
3. **Styling**: Edit SCSS files in `css/`
4. **Configuration**: Update `_config.yml`

The development server will automatically reload when you make changes.

## Site Structure

- **Local URL**: http://localhost:4000
- **Build output**: `_site/` directory
- **Live reload**: Automatically refreshes browser on file changes

## Troubleshooting

### Common Issues

1. **Ruby version conflicts**: Use a Ruby version manager like `rbenv` or `rvm`
2. **Permission errors**: Don't use `sudo` with gem commands
3. **Port conflicts**: Jekyll uses port 4000 by default, add `--port 4001` to change

### Clean Reset

If you encounter issues:

```bash
bundle exec jekyll clean
rm -rf _site
bundle install
./local-dev.sh serve
```

## GitHub Pages Compatibility

This setup uses the same Jekyll version and plugins as GitHub Pages to ensure compatibility. Your local build should match the deployed site exactly.