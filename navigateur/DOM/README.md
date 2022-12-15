# DOM

Le DOM, qui signifie **Document Object Model** (c'est-à-dire "modèle d'objet de document", en français), est une **interface de programmation** qui est une représentation du HTML d'une page web et qui permet d'accéder aux éléments de cette page web et de les modifier avec le langage JavaScript.

### querySelector

If an element has the `id` attribute, we can get the element using this method

- **can be use on element**

```js
document.querySelector('#hello')
```

- **nodeName** : avoir le nom de l'element

- **innerHTML** : recuperer l' element html

- **innerText** : pour le text a l' interrieur ,enleve les espaces

- **textContent** : garde les espaces(affiche les elements caches)

### querySelectorAll()

Selectionner une liste d' elelments

```js
document.querySelectorAll('li')
```

### ATTRIBUTS

```js
const li =document.querySelector('ul').setAttribute('hidden','hidden') //give hidden attribut
li.getAtrribute('light')
```

- **removeAttribute** (pour supprimer les attributs)

- **getAttribute ('class')**

- **classList.remove("class")** : enlever une classe

- **classList.toggle()** : ajoute si elle n' existe pas , et enleve si elle existe

### CSS

- **style.color** : modification de la couleur

- **style.fontWeight** 

Meme chose pour le reste du style css

- **getComputedStyle()** : permet d' avoir le style d' un element

```js
getComputedStyle(li).color
```

### CREATE NEW HTML ELEMENT

Example with node add:

```js
const newLi = document.createElement('li')
newLi.innerHTML = "hello world";
document.querySelector('ul').appendChild(newLi);
```

**conseiller utilier append()**

- ajoute element a la fin

- **prepend()** : ajoute au debut

```js
const newLi = document.createElement('li')
newLi.innerHTML = "hello world";
document.querySelector('ul').append(newLi);
```

NB: lorsqu' un element est ajoute dans le DOM c' est la meme reference qui est utilise donc si on fait append et prepend sur un meme element c' est le dernier qu' il prendra en compte.

### INSERTADJACENT(location,element)

- Location

```js
<!--- beforbegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

### PARCOURS DES ENFANTS

- collection dynamique:

```js
let dy = document.querySelector('ul');
dy.children    
```

- **childNotes** : retourne tous les noeuds meme ceux qui ne sont pas des elements html.

- **firstChild**

- **firstElementChild**

- **childElementCount**

- **parentNode** : noeud parent

- **parentElement** : element parent

- **remove()** : to remove an element

- **cloneNode(true)** : clone un element.

- **contains()** : verifier si un element est contenu dans un autre

- 
