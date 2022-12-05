# FUNCTIONS

Les fonctions sont les principales "composantes" du programme. Ils permettent au code d'être appelé plusieurs fois sans répétition.

Nous avons déjà vu des exemples de fonctions intégrées, telles que `alert(message)`, `prompt(message, default)` et `confirm(question)`. Mais nous pouvons aussi créer nos propres fonctions.

## REMARQUE

- Les fonctions ont une portee globale.

- Une fonction peut renvoyer une valeur. Si ce n'est pas le cas, le résultat est `undefined`.

- Les fonctions doivent être courtes et faire exactement une seule chose. Si cette chose est conséquente, il vaut peut-être la peine de scinder la fonction en quelques fonctions plus petites. Parfois, suivre cette règle peut ne pas être aussi facile, mais c’est définitivement une bonne pratique.

- Une fonction peut renvoyer une valeur. Si ce n'est pas le cas, le résultat est `undefined`.

- Fais reference a l' objet globale par defaut mais on peut le changer avec call,utiliser this pour voir l'objet

## STARTED

Pour créer une fonction, nous pouvons utiliser une *déclaration de fonction*.

```js
function hello() {
  alert( 'Hello everyone!' );
}
```

Le mot-clé `function` commence en premier, puis le *nom de la fonction*, puis une liste de *paramètres* entre les parenthèses (séparés par des virgules, vides dans l'exemple ci-dessus, nous verrons des exemples plus tard) et enfin le code de la fonction, également appelé "le corps de la fonction", entre des accolades.

```js
function name(parameter1, parameter2, ... parameterN) {
 // body
}
```

### FUNCTION ANONYME

```javascript
const func =(a,b)=>{
    return a+b;
}
func(1,2);
```

**or**

```javascript
const func = (a,b) => return a+b
```

- Fais reference a l' objet globale

**PAST FUNCTION AS PARAMETER**

```javascript
const isPair = function(a,fn){
    if(a % 2 === 0){
    fn(a);
}

isPair(3,function(n){
    console.log("value : "+n);
}
```

## PLUS

En utilisant un opérateur point d’interrogation `'?'` :

```js
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
```

En utilisant OU `||` (la variante la plus courte) :

```js
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}
```

Notez que les parenthèses autour de `age > 18` ne sont pas obligatoires ici. Elles existent pour une meilleure lisibilité.



### USUAL FUNCTIONS

- **Array.prototype.at** : parcourir le tableau dans le sens inverse

- **Array.prototype.concat:** concatener les tableaux

- **Array.prototype.filter:** filtrer les resultats,avec des criteres

```javascript
const notes = [12,15,13,17,10];
const goodNotes = notes.filter((note) => note =>10);
```

- **Array.prototype.find** : retourne le premier element qui correspond a la condition

```javascript
const notes = [1,23,14];
const find= notes.find(element => element <3)
```

- **Array.prototype.flat** : applatir un tableau.

- **Array.prototype.forEach**

- **Array.from** : creer un tableau avec differentes choses

- **Arrary.prototype.includes** : verify si un tableau contient une certaine valeur

- **Array.prototye.indexOf** : return l' index d' une valeur  si elle le trouve

- **Arrary.prototype.join** : joindre les elements d' un tableau

- **Arrary.map** : modifier un tableau en lui appliquant un methode

```javascript
const array = [1,2,3,4];
const map1 = array.map(x => x*4);
console.log(map1);// Array(4,8,12,16)
```

- **Array.prototype.pop** : enlever un element

- **Array.prototype.push** : ajouter un element

- **Array.prototype.reduce**

```javascript
//calcul de la somme
 const notes = [1,2,3,4,5];
notes.reduce((acc,note) => {
    return acc+note;
},0);
```

- **Array.prototype.reverse** : inverse un tableau

- **Array.prototype.shift** : retire le premier element et modifie le tableau

- **Array.prototype.slice** : recupere les elements a partir d' un index

- **Object.keys** : get table of keys of an objects

- **Object.values** : get table of values of an objects
