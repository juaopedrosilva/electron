const { app, BrowserWindow } = require("electron")

function createWindow(){
    const win = new BrowserWindow({ width: 800, height: 600})
    win.loadURL("https://blog-template.000webhostapp.com/  ")
}

app.on("ready", createWindow)