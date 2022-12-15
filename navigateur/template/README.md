# TEMPLATE

<**template**> L'élément HTML <**template**> (ou **Template** Content ou modèle de contenu) **est** un mécanisme utilisé pour stocker du contenu HTML (côté client) qui ne doit pas être affiché lors du chargement de la page mais qui peut être instancié et affiché par la suite grâce à un script **JavaScript**.

L’élément intégré `<template>` sert de stockage pour les modèles de balisage HTML. Le navigateur ignore son contenu et vérifie uniquement la validité de la syntaxe, mais nous pouvons y accéder et l’utiliser dans JavaScript, pour créer d’autres éléments.

**HTML**

```html
<template id="test">
    <div>
           <p>hello world man</p>
    </div>
</template>
```

```js
document.getElementById('test').content //Noeud qui represente les elements enfants
 document.getElementById('test').content.cloneNode(true)//cloner 
```

**NB:** peut contenir plusieurs elements, n' existe pas vraiment donc on ne peut pas brancher les eventlistiner directement.
