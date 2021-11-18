const { app, BrowserWindow } = require("electron");
require("@electron/remote/main").initialize();

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
    },
  });

  win.removeMenu();
  win.loadURL("http://localhost:3000");
}

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("active", function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
app.on("ready", createWindow);
