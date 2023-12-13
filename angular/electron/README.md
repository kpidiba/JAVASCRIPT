# ELECTRON

### DESCRIPTION

****Electron** est un [environnement permettant de développer](https://fr.wikipedia.org/wiki/Environnement_de_d%C3%A9veloppement "Environnement de développement") des applications multi-plateformes de bureau avec des technologies web ([JavaScript](https://fr.wikipedia.org/wiki/Javascript "Javascript"), [HTML](https://fr.wikipedia.org/wiki/HTML "HTML") et [CSS](https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade "Feuilles de style en cascade")).

L'infrastructure ([backend](https://fr.wikipedia.org/wiki/Backend "Backend")) est codée en [node.js](https://fr.wikipedia.org/wiki/Node.js "Node.js"), et l'interface ([frontend](https://fr.wikipedia.org/wiki/Frontal_(serveur) "Frontal (serveur)")) est bâtie sur les outils [Chromium](https://fr.wikipedia.org/wiki/Chromium "Chromium"), la partie open source de [Google Chrome](https://fr.wikipedia.org/wiki/Google_Chrome "Google Chrome")[2](https://fr.wikipedia.org/wiki/Electron_(framework)#cite_note-site_officiel-2).

Electron est un [logiciel libre](https://fr.wikipedia.org/wiki/Logiciel_libre "Logiciel libre") [open source](https://fr.wikipedia.org/wiki/Open_source "Open source") développé par [GitHub](https://fr.wikipedia.org/wiki/Github_(entreprise) "Github (entreprise)") sous [licence MIT](https://fr.wikipedia.org/wiki/Licence_MIT "Licence MIT").

Electron a notamment permis de développer les éditeurs de texte libres [Atom](https://fr.wikipedia.org/wiki/Atom_(%C3%A9diteur_de_texte) "Atom (éditeur de texte)") de [GitHub](https://fr.wikipedia.org/wiki/Github_(entreprise) "Github (entreprise)") et [Visual Studio Code](https://fr.wikipedia.org/wiki/Visual_Studio_Code "Visual Studio Code") de [Microsoft](https://fr.wikipedia.org/wiki/Microsoft "Microsoft")[3](https://fr.wikipedia.org/wiki/Electron_(framework)#cite_note-:0-3).

### DEPLOYMENT SOFTWARE

- InnoSetup

## Histoire

- Le 11 avril 2013 Création de Electron sous le nom Atom Shell en référence à l'éditeur [Atom](https://fr.wikipedia.org/wiki/Atom_(%C3%A9diteur_de_texte) "Atom (éditeur de texte)") dont il est une émanation .
- Le 6 mai 2014, [Atom](https://fr.wikipedia.org/wiki/Atom_(%C3%A9diteur_de_texte) "Atom (éditeur de texte)") et Atom Shell deviennent open-source sous une [licence MIT](https://fr.wikipedia.org/wiki/Licence_MIT "Licence MIT")[4](https://fr.wikipedia.org/wiki/Electron_(framework)#cite_note-4)
- le 17 avril 2015 Atom Shell a été renommé Electron[5](https://fr.wikipedia.org/wiki/Electron_(framework)#cite_note-5)
- Le 11 mai 2016, Electron passe en version 1.0[6](https://fr.wikipedia.org/wiki/Electron_(framework)#cite_note-6)
- En mai 2016, Electron est autorisé pour les applications packagées au Mac App Store[7](https://fr.wikipedia.org/wiki/Electron_(framework)#cite_note-7).
- En août 2016, le support de Windows Store pour les applications Electron est ajouté[](https://fr.wikipedia.org/wiki/Electron_(framework)#cite_note-8)

### RESSOURCES

1. - [8 Top-Class Free Angular Templates 2023 - AdminLTE.IO](https://adminlte.io/blog/free-angular-templates/) 
   - https://themeselection.com/angular-material-admin-template-free/ 

### STEPS

```
npm install electron --save-dev
```

- full screen :
  
  ```javascript
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  ```

- Create a new file named `index.js` in the root of your Angular project. This file will be the entry point for Electron. Add the following content to `main.js`,in **{folder}** put project folder name:

javascript

```javascript
const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(`file://${__dirname}/dist/{folder}/index.html`);

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
```

- Update your `package.json`:
  
  Modify the `scripts` section of your `package.json` to include Electron as the entry point: 

```json
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "electron": "electron main",
    "build": "ng build",
    "build-electron": "ng build --prod && npm run electron",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
```

### BUGS

### 1. WARNING in budgets, maximum exceeded for initial

- DEFINITION OF **BUGDET**:A performance budget is a group of limits to certain values that
  affect site performance, that may not be exceeded in the design and
  development of any web project.In our case budget is the limit for bundle sizes.

- Bundling is **merging your dependencies into a single optimized file**.
   Compiling is transforming code into something parsable by browsers. 
  Bundling is resolving your applications dependency graph and reducing 
  the number of files.

- **TO REPAIR IT**: 

```json
 "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "electron": "electron .",
    "main" : "main.js",
    "build": "ng build",
    "build-electron": "ng build --prod && npm run electron",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
```

- npm run electron

### ELECTRON PACKAGER

https://www.npmjs.com/package/electron-packager

```bash
npm install electron-packager -g (-g is Optional)
npm install electron-packager — save-dev
```

to build exe 

```bash
electron-packager ./ name_of_project
```

- change application icon: "icon:__dirname+'/src/assets/icons/logo.jpg'" in 

```js
  win = new BrowserWindow({
    width: 1024,
    height: 640,
    webPreferences: {
      nodeIntegration: true,
    },
    icon:__dirname+'/src/assets/icons/logo.jpg'
  });
```

**NB:** make sure you convert png to ico 

### HOW TO DEPLOY WITH INNO SETUP

- after install  choose **Create a new script file using the Script Wizard** 

- Fill required field

- Choose Executable

- choose Add Files

- create folder and add all folders after click add Folder
