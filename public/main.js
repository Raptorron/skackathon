const electron = require('electron');
const ipcMain = electron.ipcMain;
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const electronDev = require('electron-is-dev');

let mainWindow;
let imageWindow;
let newWindow;
let openFile;
let closeWindow;
let emailLink;
let cut;
let copy;
let paste;
let pageInfo;
let theAbyss;
let settingsWindow;

function createWindow() {

  mainWindow = new BrowserWindow({width: 900, height: 680, webPreferences: { nodeIntegration: true }});
  imageWindow = new BrowserWindow({width: 600, height: 600, parent: mainWindow, show: false});
  newWindow = new BrowserWindow({width: 600, height: 600, parent: mainWindow, show: false});
  openFile = new BrowserWindow({width: 600, height: 600, parent: mainWindow, show: false});
  settingsWindow = new BrowserWindow({width: 600, height: 600, parent: mainWindow, show: false});
  closeWindow = new BrowserWindow({width: 600, height: 600, parent: mainWindow, show: false});
  emailLink = new BrowserWindow({width: 600, height: 600, parent: mainWindow, show: false});
  cut = new BrowserWindow({width: 600, height: 600, parent: mainWindow, show: false});
  copy = new BrowserWindow({width: 600, height: 600, parent: mainWindow, show: false});
  paste = new BrowserWindow({width: 600, height: 600, parent: mainWindow, show: false});
  pageInfo = new BrowserWindow({width: 600, height: 600, parent: mainWindow, show: false});
  theAbyss = new BrowserWindow({width: 600, height: 600, parent: mainWindow, show: false});
  settingsWindow = new BrowserWindow({width: 600, height: 600, parent: mainWindow, show: false});

  mainWindow.loadURL(electronDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  imageWindow.loadURL(electronDev ? 'http://localhost:3000/image' : `file://${path.join(__dirname, '../build/index.html')}`);
  newWindow.loadURL(electronDev ? 'http://localhost:3000/settings' : `file://${path.join(__dirname, '../build/index.html')}`);
  openFile.loadURL(electronDev ? 'http://localhost:3000/settings' : `file://${path.join(__dirname, '../build/index.html')}`);
  closeWindow.loadURL(electronDev ? 'http://localhost:3000/settings' : `file://${path.join(__dirname, '../build/index.html')}`);
  emailLink.loadURL(electronDev ? 'http://localhost:3000/settings' : `file://${path.join(__dirname, '../build/index.html')}`);
  cut.loadURL(electronDev ? 'http://localhost:3000/settings' : `file://${path.join(__dirname, '../build/index.html')}`);
  copy.loadURL(electronDev ? 'http://localhost:3000/settings' : `file://${path.join(__dirname, '../build/index.html')}`);
  paste.loadURL(electronDev ? 'http://localhost:3000/settings' : `file://${path.join(__dirname, '../build/index.html')}`);
  pageInfo.loadURL(electronDev ? 'http://localhost:3000/settings' : `file://${path.join(__dirname, '../build/index.html')}`);
  theAbyss.loadURL(electronDev ? 'http://localhost:3000/settings' : `file://${path.join(__dirname, '../build/index.html')}`);
  settingsWindow.loadURL(electronDev ? 'http://localhost:3000/settings' : `file://${path.join(__dirname, '../build/index.html')}`);


  mainWindow.on('closed', () => mainWindow = null);

  imageWindow.on('close', (e) => {
    e.preventDefault();
    imageWindow.hide();
  });

  newWindow.on('close', (e) => {
    e.preventDefault();
    newWindow.hide();
  });

  openFile.on('close', (e) => {
    e.preventDefault();
    openFile.hide();
  });

  closeWindow.on('close', (e) => {
    e.preventDefault();
    closeWindow.hide();
  });

  emailLink.on('close', (e) => {
    e.preventDefault();
    emailLink.hide();
  });

  cut.on('close', (e) => {
    e.preventDefault();
    cut.hide();
  });

  copy.on('close', (e) => {
    e.preventDefault();
    copy.hide();
  });

  paste.on('close', (e) => {
    e.preventDefault();
    paste.hide();
  });

  pageInfo.on('close', (e) => {
    e.preventDefault();
    pageInfo.hide();
  });

  theAbyss.on('close', (e) => {
    e.preventDefault();
    theAbyss.hide();
  });

  settingsWindow.on('close', (e) => {
    e.preventDefault();
    settingsWindow.hide();
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('toggle-image', (event, arg) => {
  imageWindow.show();
  imageWindow.webContents.send('image', arg);
})

ipcMain.on('The-new-window', () => {
  newWindow.isVisible() ? newWindow.hide() : newWindow.show();
})

ipcMain.on('Open-File', () => {
  openFile.isVisible() ? openFile.hide() : openFile.show();
})

ipcMain.on('Closing-the-window', () => {
  closeWindow.isVisible() ? closeWindow.hide() : closeWindow.show();
})

ipcMain.on('Email-Link', () => {
  emailLink.isVisible() ? emailLink.hide() : emailLink.show();
})

ipcMain.on('cutting-option', () => {
  cut.isVisible() ? cut.hide() : cut.show();
})

ipcMain.on('copy-option', () => {
  copy.isVisible() ? copy.hide() : copy.show();
})

ipcMain.on('pasting-option', () => {
  paste.isVisible() ? paste.hide() : paste.show();
})

ipcMain.on('Info-page', () => {
  pageInfo.isVisible() ? pageInfo.hide() : pageInfo.show();
})

ipcMain.on('Helper', () => {
  theAbyss.isVisible() ? theAbyss.hide() : theAbyss.show();
})

ipcMain.on('toggle-settings', () => {
  settingsWindow.isVisible() ? settingsWindow.hide() : settingsWindow.show();
})
