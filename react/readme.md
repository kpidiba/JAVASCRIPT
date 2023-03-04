# REACT

## DESCRIPTION

***React*** (aussi appelé **React.js** ou **ReactJS**) est une [bibliothèque](https://fr.wikipedia.org/wiki/Biblioth%C3%A8que_Logicielle "Bibliothèque Logicielle") JavaScript [libre](https://fr.wikipedia.org/wiki/Logiciel_libre "Logiciel libre") développée par [Facebook](https://fr.wikipedia.org/wiki/Facebook "Facebook") (maintenant [Meta](https://fr.wikipedia.org/wiki/Meta_(entreprise) "Meta (entreprise)")) depuis [2013](https://fr.wikipedia.org/wiki/2013_en_informatique "2013 en informatique"). Le but principal de cette bibliothèque est de faciliter la création d'[application web monopage](https://fr.wikipedia.org/wiki/Application_web_monopage "Application web monopage"), via la création de composants dépendant d'un état et générant une page (ou portion) [HTML](https://fr.wikipedia.org/wiki/HTML "HTML") à chaque changement d'état.

*React* est une bibliothèque qui ne gère que l'interface de l'application, considéré comme la vue dans le modèle [MVC](https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur "Modèle-vue-contrôleur"). Elle peut ainsi être utilisée avec une autre bibliothèque ou un [framework](https://fr.wikipedia.org/wiki/Framework "Framework") MVC comme [AngularJS](https://fr.wikipedia.org/wiki/AngularJS "AngularJS"). La bibliothèque se démarque de ses concurrents par sa flexibilité et ses performances, en travaillant avec un [DOM](https://fr.wikipedia.org/wiki/Document_Object_Model "Document Object Model") virtuel et en ne mettant à jour le rendu dans le navigateur qu'en cas de nécessité[2](https://fr.wikipedia.org/wiki/React#cite_note-medium-baer-2).

La bibliothèque est utilisée par [Netflix](https://fr.wikipedia.org/wiki/Netflix "Netflix")[3](https://fr.wikipedia.org/wiki/React#cite_note-3) (depuis le 25 octobre 2017, une migration de la partie client vers du JavaScript pur a permis d'augmenter les performances de 50%[4](https://fr.wikipedia.org/wiki/React#cite_note-4)), [Yahoo](https://fr.wikipedia.org/wiki/Yahoo "Yahoo")[5](https://fr.wikipedia.org/wiki/React#cite_note-5), [Airbnb](https://fr.wikipedia.org/wiki/Airbnb "Airbnb")[6](https://fr.wikipedia.org/wiki/React#cite_note-6), [Sony](https://fr.wikipedia.org/wiki/Sony "Sony")[7](https://fr.wikipedia.org/wiki/React#cite_note-7), [Atlassian](https://fr.wikipedia.org/wiki/Atlassian "Atlassian")[8](https://fr.wikipedia.org/wiki/React#cite_note-8) ainsi que par les équipes de [Meta](https://fr.wikipedia.org/wiki/Meta_(entreprise) "Meta (entreprise)"), pratiquant [l'autoéquipement](https://fr.wikipedia.org/wiki/Auto%C3%A9quipement "Autoéquipement") sur les réseaux sociaux Facebook, [Instagram](https://fr.wikipedia.org/wiki/Instagram "Instagram") ou encore [WhatsApp](https://fr.wikipedia.org/wiki/WhatsApp "WhatsApp")[2](https://fr.wikipedia.org/wiki/React#cite_note-medium-baer-2). À la fin de 2015, [WordPress.com](https://fr.wikipedia.org/wiki/WordPress.com "WordPress.com") annonce Gutenberg, une interface pour les éditeurs de sites WordPress, développée en JavaScript avec  **Node.js** et **React**.



### HOW IT WORK

**React Is a Library, Not a Framework** 

One of the biggest advantages of using React is that you can [infuse HTML code with JavaScript](https://www.hostinger.com/tutorials/add-javascript-to-html).

Users can create a representation of a DOM node by declaring the **Element** function in React



## CREATE PROJECT

```bash
npx create-react-app project-name
```

### LAUNCH PROJECT

```bashag-0-1gpvnf3gpag-1-1gpvnf3gp
npm start
```

### II- RESSOURCES

### WEBSITE

- https://reactjs.org/docs/getting-started.html

- 

### YOUTUBE

### III- CONCEPTS

- **SPA**

- **Components and props** 

- **JSX**

### IV- ARCHITECTURE

- **package.json** :contains informations about project and dependencies that we have install

- **node_modules/** : contains package you have installed

- **public/** : contains static file

- **<div id="root"></div>**



### JSX

JSX allows us to write HTML elements in JavaScript and place them in the DOM 
without any `createElement()`  and/or `appendChild()` methods.

JSX converts HTML tags into react elements.
