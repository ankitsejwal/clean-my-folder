const { app, BrowserWindow } = require('electron');

const createWindow = function () {
  const win = new BrowserWindow({ width: 800, height: 500 });
  win.loadFile('index.html');
};

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows.length === 0) createWindow();
  });
});
