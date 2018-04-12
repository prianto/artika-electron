const {app, BrowserWindow} = require('electron');
const serve = require('electron-serve');
const isDev = require('electron-is-dev');

const loadURL = serve({directory: 'build'});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    icon: __dirname + '/icon.png'
  });
  mainWindow.setMenu(null);

  if (isDev) {
    mainWindow.loadURL('http://localhost:3000');
  } else {
    loadURL(mainWindow);
  }

  mainWindow.on('closed', () => mainWindow = null);
});

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
