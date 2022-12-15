# SUCRE SYNTAXIQUE

permet d'ecrire une chose plus rapidement

- methode anonymme

```javascript
 (n) => n*2
```

- condition with function

```javascript
const b = fn1() || fn2()
```

- verification sur un obje

```javascript
const person = {firstname:"jhon"}
console.log(person?.age?.toString())
```

- destructuration,passer des valeurs au variable en passant par un tableau

```javascript
const [premierNote,deuxiemeNote] = [12,15]
const [premier,...deuxieme] = [12,14,23]
//with object
const {firstname:prenom} = {
    firstname: 'Jhon',
    lastname: 'Doe'
}
```

- tableau

```javascript
const notes = [1,2]
[...,3,4]
```
