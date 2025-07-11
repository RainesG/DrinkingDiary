#!/bin/bash

# Setup script for Drinking Diary Mini Program

echo "🍺 Setting up Drinking Diary Mini Program..."

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Installing pnpm..."
    npm install -g pnpm
else
    echo "✅ pnpm is already installed"
fi

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Setup git hooks
echo "🔧 Setting up git hooks..."
pnpm run prepare

# Make setup script executable
chmod +x scripts/setup.sh

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Open WeChat Developer Tools"
echo "2. Import this project directory"
echo "3. Update the appid in project.config.json"
echo "4. Start developing!"
echo ""
echo "Useful commands:"
echo "  pnpm run lint     - Check code quality"
echo "  pnpm run format   - Format code"
echo "  pnpm run dev      - Development info"
