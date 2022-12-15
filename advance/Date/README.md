# DATE OBJET

Faisons connaissance avec un nouvel objet intégré: [Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date). il stocke la date, l’heure et fournit des méthodes pour la gestion de la date / heure.

Par exemple, nous pouvons l’utiliser pour enregistrer les heures de création / modification, pour mesurer l’heure ou simplement pour imprimer la date du jour.

```js
let now = new Date();
alert( now );
```

Crée un objet `Date` avec l’heure correspondant au nombre de millisecondes (1/1000 de seconde) écoulée après le 1er janvier 1970 UTC.

Un nombre entier représentant le nombre de millisecondes écoulées depuis le début de 1970 est appelé un *timestamp* (horodatage).

- functions

```js
new Date().toLocaleDateString('en-US')
new Date().toLocaleTimeString('en-US')
```

- [getFullYear()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getFullYear)
  
  Obtenir l’année (4 chiffres)

- [getMonth()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getMonth)
  
  Obtenir le mois, **de 0 à 11**.

- [getDate()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getDate)
  
  Obtenir le jour du mois, de 1 à 31.

- [getHours()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getHours), [getMinutes()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getMinutes), [getSeconds()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getSeconds), [getMilliseconds()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getMilliseconds)
