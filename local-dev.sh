#!/bin/bash

# TechFolio Local Development Script
# This script sets up and runs the Jekyll site locally

set -e

echo "🚀 TechFolio Local Development Setup"
echo "===================================="

# Check if Ruby is installed
if ! command -v ruby &> /dev/null; then
    echo "❌ Ruby is not installed. Please install Ruby first:"
    echo "   - On macOS: brew install ruby"
    echo "   - On Ubuntu/Debian: sudo apt install ruby-full"
    echo "   - On other systems: https://www.ruby-lang.org/en/downloads/"
    exit 1
fi

echo "✅ Ruby version: $(ruby --version)"

# Check if Bundler is installed
if ! command -v bundle &> /dev/null; then
    echo "📦 Installing Bundler..."
    gem install bundler
fi

echo "✅ Bundler version: $(bundle --version)"

# Install dependencies
echo "📦 Installing Jekyll and dependencies..."
bundle install

# Check if site builds successfully
echo "🔨 Building site to check for errors..."
bundle exec jekyll build

echo ""
echo "✅ Setup complete! Your site is ready for local development."
echo ""
echo "🌐 To start the development server:"
echo "   ./local-dev.sh serve"
echo ""
echo "📝 To build the site:"
echo "   ./local-dev.sh build"
echo ""

# If 'serve' argument is passed, start the server
if [ "$1" = "serve" ]; then
    echo "🌐 Starting Jekyll development server..."
    echo "   Site will be available at: http://localhost:4000"
    echo "   Press Ctrl+C to stop the server"
    echo ""
    bundle exec jekyll serve --livereload --open-url
elif [ "$1" = "build" ]; then
    echo "🔨 Building site for production..."
    bundle exec jekyll build
    echo "✅ Site built successfully in _site/ directory"
fi