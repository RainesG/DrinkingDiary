# Drinking Diary - WeChat Mini Program

A WeChat Mini Program for tracking drinking habits and maintaining a drinking diary.

## Project Structure

```json
DrinkingDiary/
├── app.js                 # Mini Program entry point
├── app.json              # Global configuration
├── app.wxss              # Global styles
├── sitemap.json          # Search indexing configuration
├── project.config.json   # Project configuration for WeChat Developer Tools
├── pages/                # Page files
│   ├── index/           # Home page
│   │   ├── index.js
│   │   ├── index.wxml
│   │   ├── index.wxss
│   │   └── index.json
│   └── logs/            # Logs page
│       ├── logs.js
│       ├── logs.wxml
│       ├── logs.wxss
│       └── logs.json
└── utils/               # Utility functions
    └── util.js
```

## Getting Started

1. **Install Dependencies**

   ```bash
   # Install pnpm if you haven't already
   npm install -g pnpm
   
   # Install project dependencies
   pnpm install
   ```

2. **Install WeChat Developer Tools**
   - Download and install [WeChat Developer Tools](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

3. **Open Project**
   - Open WeChat Developer Tools
   - Import this project directory
   - Update the `appid` in `project.config.json` with your Mini Program AppID

4. **Development**
   - Edit files in the project
   - Use the simulator to preview changes
   - Test on real devices using the preview feature

## Features

- User authentication and profile management
- Drinking habit tracking
- Log history and statistics
- Modern UI with WeChat design guidelines

## Development Notes

- Uses WeChat Mini Program framework
- Supports ES6 syntax
- Includes basic user authentication flow
- Ready for expansion with additional features
- Uses pnpm as package manager for better performance and disk space efficiency

## Package Management

This project uses **pnpm** as the package manager. Here are some useful commands:

```bash
# Install dependencies
pnpm install

# Add a new dependency
pnpm add <package-name>

# Add a development dependency
pnpm add -D <package-name>

# Update dependencies
pnpm update

# Run scripts
pnpm run <script-name>

# Clean install
pnpm install --force
```

## Next Steps

1. Add drinking entry functionality
2. Implement data storage and retrieval
3. Add statistics and charts
4. Include reminder notifications
5. Add social sharing features

## Resources

- [WeChat Mini Program Documentation](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [WeChat Developer Tools](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)
