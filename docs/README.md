# Desktop Pet - Developer Documentation 🛠️

Welcome to the developer documentation for **Desktop Pet**! This section provides an overview of the project's architecture, key components, and instructions on how to contribute.

## Table of Contents

- [Desktop Pet - Developer Documentation 🛠️](#desktop-pet---developer-documentation-️)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Key Components](#key-components)
    - [1. **Main Process (`src/index.ts`)**:](#1-main-process-srcindexts)
    - [2. **Tray Icon (`src/tray.ts`)**:](#2-tray-icon-srctrayts)
    - [3. **Music Manager (`src/music-manager.ts`)**:](#3-music-manager-srcmusic-managerts)
    - [4. **Preload Script (`src/preload.ts`)**:](#4-preload-script-srcpreloadts)
    - [5. **Windows (`src/window-main.ts`, `src/window-credits.ts`)**:](#5-windows-srcwindow-maints-srcwindow-creditsts)
  - [Development Setup](#development-setup)
  - [Building and Running the Project](#building-and-running-the-project)
  - [Contributing Guidelines](#contributing-guidelines)

## Project Structure

Here's an overview of the project's structure:
```plaintext
desktop-pet/
├── assets/ # Contains images, styles, audio files, and static HTML files
├── dist/ # Generated build files (output from TypeScript compiler)
├── docs/ # Documentation files (you're here!)
├── node_modules/ # Project dependencies
├── src/ # Source code (TypeScript)
│ ├── index.ts # Main entry point for the Electron app
│ ├── preload.ts # Preload script to bridge the gap between Electron's main and renderer processes
│ ├── tray.ts # Manages the tray icon and its interactions
│ ├── window-main.ts # Defines the main window and its properties
│ ├── window-credits.ts # Manages the credits window
│ ├── music-manager.ts # Handles music playback functionality
│ ├── notification.ts # Handles system notifications
│ └── ... # Other source files
├── .github/ # GitHub-specific files (issue templates, PR templates, etc.)
├── .gitignore # Specifies files to ignore in git
├── LICENSE # Project license (MIT)
├── package.json # Project metadata and scripts
├── README.md # General overview and user documentation
├── CODE_OF_CONDUCT.md # Code of Conduct for contributors
└── tsconfig.json # TypeScript configuration
```

## Key Components
### 1. **Main Process (`src/index.ts`)**:
- This is the entry point for the Electron app. It manages the lifecycle of the application, including the creation of the main window and tray icon.
### 2. **Tray Icon (`src/tray.ts`)**:
- This file handles the creation and management of the tray icon. It allows users to interact with the desktop pet through the system tray.
### 3. **Music Manager (`src/music-manager.ts`)**:
- This module is responsible for managing background music playback, including selecting random tracks from the assets folder.
### 4. **Preload Script (`src/preload.ts`)**:
- The preload script is used to expose certain APIs from the Electron main process to the renderer process in a secure way.
### 5. **Windows (`src/window-main.ts`, `src/window-credits.ts`)**:
- These files define the main application window and the credits window, including their appearance and behavior.
## Development Setup
To get started with development, follow these steps:
1. **Clone the repository**:
```bash
git clone https://github.com/thenolle/desktop-pet.git
cd desktop-pet
```
2. **Install dependencies**:
- Recommended: `pnpm install`
- Alternatively: `npm install`
3. **Build the project**:
- Recommended: `pnpm build`
- Alternatively: `npm run build`
## Building and Running the Project
Once you've set up the project, you can start the application using the following command:
- Recommended: `pnpm start`
- Alternatively: `npm start`
This will build the project (if necessary) and launch the Desktop Pet application.

## Contributing Guidelines
For details on how to contribute, please refer to the [CONTRIBUTING.md](../CONTRIBUTING.md) file.

---

Happy coding! Feel free to reach out via [GitHub Issues](https://github.com/thenolle/desktop-pet/issues) or [Discord](https://discord.com/invite/Fp5vyeJCZF) if you have any questions or need help.
