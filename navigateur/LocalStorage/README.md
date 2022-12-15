# LOCALSTORAGE(no security)

Les objets de stockage Web `localStorage` et `sessionStorage` permettent d’enregistrer les paires clé/valeur dans le navigateur.

Ce qui est intéressant à leur sujet, c’est que les données survivent à une actualisation de la page (pour `sessionStorage`) et même à un redémarrage complet du navigateur (pour `localStorage`). Nous verrons cela très bientôt.

Nous avons déjà des cookies. Pourquoi des objets supplémentaires ?

- Contrairement aux cookies, les objets de stockage Web ne sont pas envoyés au serveur à chaque requête. Grâce à cela, nous pouvons stocker beaucoup plus. La plupart des navigateurs autorisent au moins 5 mégaoctets de données (ou plus) et ont des paramètres pour configurer cela.
- Contrairement aux cookies également, le serveur ne peut pas manipuler les objets de stockage via les en-têtes HTTP. Tout se fait en JavaScript.
- Le stockage est lié à l’origine (triplet domaine/protocole/port). Autrement dit, différents protocoles ou sous-domaines impliquent différents objets de stockage, ils ne peuvent pas accéder aux données les uns des autres.
- Depend du nom de domaine

Les deux objets de stockage fournissent les mêmes méthodes et propriétés :

- `setItem(key, value)` – stocke la paire clé/valeur.
- `getItem(key)` – récupère la valeur par clé.
- `removeItem(key)` – supprime la clé avec sa valeur.
- `clear()` – supprime tout.
- `key(index)` – récupère la clé sur une position donnée.
- `length` – le nombre d’éléments stockés.

```js
localStorage.setItem('test', 1);
alert( localStorage.getItem('test') );
```

```js

```

### ITERATION

```js
let keys = Object.keys(localStorage);
for(let key of keys) {
  alert(`${key}: ${localStorage.getItem(key)}`);
}
```
