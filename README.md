# ReTabs - Chrome extension
> A Chrome extension that saves the tabs in your current Chrome window. 

## Table of Contents
- [General Info](#general-info)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Available Scripts](#available-scripts)
- [Features](#features)

## General Info
This is a Chrome extension that saves the tabs that are open in your current Chrome window, and then you can restore them
later, even after you close the window or when you turn off your computer. It saves the tabs across all your devices where 
you are logged in with your Google account. 

## Technologies
- React
- JavaScript
- Vite

## Prerequisites
- Node.js
- npm or yarn

## Setup

1. Clone the repository
```
git clone https://github.com/LimbersMay/changeTerminalDirectory.git
```

2. Install dependencies
```
npm install
```

**By default**, the extension will use the ChromeLocalStorage class to save the tabs. However, the syntax in this class is only available
in a Chrome extension, so you will need to switch to the ChromeMokeLocalStorage and MokeLocalTab classes to run the 
extension in development mode.

**You need to change it in the following files**:
- src/store/rememberTabs/preferences/thunks.ts
- src/store/rememberTabs/tab/thunks.ts

**The above steps are not required if you build the extension and load it in Chrome**.

## Available Scripts
- `npm run dev` - runs the app in development mode
- `npm run build` - builds the app for production to the `dist` folder
- `npm run preview` - locally preview the production build

## Features
- Save. The extension saves the tabs that are open in your current Chrome window.
- Restore. Restore the saved tabs.
- Delete. Deletes the saved tabs.
- Language. The extension is available in English, Spanish and French.
- Layouts. Two layouts are available: simple and extended
