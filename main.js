const { app, BrowserWindow } = require('electron');

const createWindow = function () {
  const win = new BrowserWindow({ width: 800, height: 500 });
  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();
});
