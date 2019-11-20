import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

// const electron = require('electron');
// const ipcRenderer = electron.ipcRenderer;
const { ipcRenderer, remote } = require('electron');

const Menu = remote.Menu;

class App extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    this.initMenu();

    axios.get("https://reddit.com/r/aww.json?raw_json=1")
      .then(response => {
        this.setState({
          posts: response.data.data.children
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  showImage = image => {
    ipcRenderer.send('toggle-image', image);
  }

  initMenu = () => {
    const menu = Menu.buildFromTemplate([
      {
        label: "File",
        submenu: [
          {
            label: "New Window",
            accelerator: "CmdOrCtrl+T",
            click: ()=>{
              ipcRenderer.send("The-new-window")
            }
          },
          {
            label: "Open File...",
            accelerator: "CmdOrCtrl+O",
            click: ()=>{
              ipcRenderer.send("Open-File")
            }
          },
          {
            label: "Close Window",
            accelerator: "CmdOrCtrl+W",
            click: ()=>{
              ipcRenderer.send("Closing-the-window")
            }
          },
            { type: "separator" },
          {
            label: "Settings",
            accelerator: "CmdOrCtrl+,",
            click: () => {
              ipcRenderer.send("toggle-settings");
            }
          },
          {
            label: "Email Link...",
            click: () => {
              ipcRenderer.send("Email-Link");
            }
          },
            { type: "separator" },
          {
            label: "Quit",
            accelerator: "CmdOrCtrl+Q"
          },
        ]
      },
      {
        label: "Edit",
        submenu: [
          {
            label: "Cut",
            accelerator: "CmdOrCtrl+X",
            click: () => {
              ipcRenderer.send("cutting-option");
            }
          },
          {
            label: "Copy",
            accelerator: "CmdOrCtrl+C",
            click: () => {
              ipcRenderer.send("copy-option");
            }
          },
          {
            label: "Paste",
            accelerator: "CmdOrCtrl+V",
            click: () => {
              ipcRenderer.send("pasting-option");
            }
          }
        ]
      },
      {
        label: "Tool",
        submenu: [
          {
            label: "Page Info",
            accelerator: "CmdOrCtrl+I",
            click: () => {
              ipcRenderer.send("Info-page");
            }
          },
        ]
      },
      {
        label: "Help",
        submenu: [
          {
            label: "Errors",
            accelerator: "CmdOrCtrl+E",
            click: () => {
              ipcRenderer.send("Helper");
            }
          },
        ]
      },
    ]);
    Menu.setApplicationMenu(menu);
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <ul className="list-group list-group-flush">
          {posts.map(post =>
          <li
            key={post.data.id}
            className="list-group-item flex-container"
            onClick={() => this.showImage(post.data.preview.images[0].source.url)}
          >
            <img src={post.data.thumbnail} alt="thumb" className="image" />
            <div>{post.data.title}</div>
          </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
