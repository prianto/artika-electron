'use strict';

const { app, BrowserWindow, Menu, MenuItem, shell } = require('electron');
const path = require('path');

let mainWindow;
app.on('ready', function() {
  mainWindow = new BrowserWindow({
    icon: __dirname + '/app/img/icon.png'
  });
  mainWindow.setMenu(null);
  mainWindow.loadURL('http://localhost:3000');
});
