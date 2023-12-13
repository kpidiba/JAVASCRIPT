## DESCRIPTION

- https://angulardev.fr/a-la-decouverte-du-fameux-standalone-component-clgdak6x4000809jwesbj8blq

Depuis la ***version 14***, une nouveauté a fait son apparition dans le framework Angular qui par la suite est devenue stable dans la ***version 15***. Il s'agit des ***composants autonomes*** (***standalone component*** en anglais).

Afin de comprendre l'utilité des ***composants autonomes***, analysons ensemble l'architecture d'un projet Angular avant leur arrivée.

Angular est un framework modulaire c'est-à-dire que chaque composant 
est rattaché à un module et les modules reliés entre eux donnent 
naissance à notre application web. Ceci est possible grâce à `NgModule` que nous retrouvons dans tous nos modules.

En effet, `NgModule` nous permet d'indiquer à notre 
composant toutes les dépendances dont il a besoin pour bien fonctionner.
 Nous nous retrouvons donc avec plein de modules dans nos projets parce 
que même le plus insignifiant des composants a besoin d'un module.

Après de longues discussions au sein de la core team, ils ont décidé de créer les ***composants autonomes***.
 Cette autonomie permet aux composants d'avoir les mêmes aptitudes qu'un
 module en plus d'être des composants. Tout ceci est possible grâce à un
 seul attribut qu'on glisse dans le décorateur `@Component` de notre composant :

```
@Component({
  standalone: true,
  imports: [MatButtonModule],
  ...
})
export class PhotoGalleryComponent {
  // logic
}
```

- `standalone` est ***l'attribut a ajouté dans notre composant pour le rendre autonome.***

- `imports` est ***l'attribut qui permet de rattacher des modules existants à notre composant autonome en se référant au fonctionnement du*** `NgModule`***.***

> *Nous remarquons qu'il est également possible d'importer des modules existants dans notre composant autonome. C'est super ça !*
> 
> ***Cependant, une question se pose. Nous utilisons nos 
> modules pour faire du chargement paresseux (lazy-loading) au niveau de 
> notre système de routes ce qui améliore évidemment les performances de 
> nos applications. Y a t-il un moyen de le faire si nous avons un 
> composant autonome ?***
> 
> *La core team de Angular a pensé à tout !*

Effectivement, il y a un moyen de rendre nos ***composants paresseux***. Voici quelques exemples provenant de la documentation de Angular :

```
export const ROUTES: Route[] = [
  {path: 'admin', loadComponent: () => import('./admin/panel.component').then(mod => mod.AdminPanelComponent)},
  // ...
];
```

```
// In the main application:
export const ROUTES: Route[] = [
  {path: 'admin', loadChildren: () => import('./admin/routes').then(mod => mod.ADMIN_ROUTES)},
  // ...
];

// In admin/routes.ts:
export const ADMIN_ROUTES: Route[] = [
  {path: 'home', component: AdminHomeComponent},
  {path: 'users', component: AdminUsersComponent},
  // ...
];
```

```
// In the main application:
export const ROUTES: Route[] = [
  {path: 'admin', loadChildren: () => import('./admin/routes')},
  // ...
];

// In admin/routes.ts:
export default [
  {path: 'home', component: AdminHomeComponent},
  {path: 'users', component: AdminUsersComponent},
  // ...
] as Route[];
```

---

> ***Comment transformer une application déjà existante en une application de composants autonomes ?***

Pour ce faire, nous avons une ligne de commande toute fournie. Il suffit de faire ceci :

```
ng generate @angular/core:standalone
```

Après l'exécution de cette commande, nous aurons une série de 
questions qui nous aiderons à faire le choix propice à notre besoin.

---

> Pour finir, nous aborderons un peu les bonnes pratiques liées à cette nouveauté. Il s'agira d'identifier ***quand est-ce qu'il est pertinent d'utiliser un composant autonome ou non ?***
> 
> ***Personnellement, je conseillerai l'utilisation du 
> standalone component lorsque nous avons un module qui pilote par exemple
>  un seul composant. Si des composants se partagent des dépendances 
> communes, l'idéal serait de les faire regrouper dans un module afin 
> d'avoir un code plus lisible et bien structuré***.

En somme, nous avons vu ce que c'est qu'un ***composant autonome*** (***standalone component*** en anglais), quel est son utilité et dans quel cas il faut l'utiliser.  
Il
 est toutefois possible d'indiquer par défaut dans un projet Angular que
 nous voulons utiliser que des composants autonomes. Nous devons 
modifier le fichier `angular.json` au niveau des `schematics` et faire ceci :

```
 ...
 "projects": {
     "my-project": {
       "projectType": "application",
       "schematics": {
         "@schematics/angular:component": {
           "standalone": true
         }
       }
 }
 ...
```

Pour ceux qui aimeraient créer des composants autonomes, servez-vous ici :

```
 ng generate component --standalone card
```

## SOURCES

- https://www.youtube.com/watch?v=prnu9xVnZyU&t=337s

## GOOD PRACTICES

- CREATE ROUTE FOR ANY COMPONENT YOU CREATE

- name example :**pokemon.routes.ts**

```ts
const pokemonRoutes = Routes = [
    {
    path:'edit/pokemon/:id',
    loadComponent:() => import('./pokemon/pokemon.component').then(module => module.EditComponent),
    canActivate:[AuthGuard]
    }
]
```

## BOOTSTRAPING STANDALONE COMPONENT

- Delete app.module.ts

- clear  and add in main.ts

- routes (**Main routes in main.ts**)

```ts
const routes: Routes = [
    {
   path: 'foo',
   loadComponent: () => import('path/to/component').then(m => m.ComponentName)
  }

]
```

- ```ts
  bootstrapApplication(AppComponent,{providers: [provideRouter(routes)]}).catch((err)=>console.error(err));
  ```

- or launch **ng g @angular/core:standalone** 

```bash
ng g @angular/core:standalone
```

- **bootstrap the application using standalone API**

## APPCOMPONENT STANDALONE

- Import module required like(RouterOutlet,Component,RouterLink)

## ROUTING - LAZY LOADING

In the context of Angular, lazy loading is **a design pattern used to defer the initialization of modules until they are needed**.
 It is a great strategy to reduce the time to interactive (TTI) of a 
single page application (SPA) and thereby provide a better user 
experience.

- you will create it for every component

```ts
export const routesName: Routes = [{
    path: '',
    providers: [PokemonService],
    children:[
  {
   path: 'foo',
   loadComponent: () => import('path/to/component').then(m => m.ComponentName)
  },{
   path: '',
   loadChildren: () => import('path/to/Componentroute').then(m => m.ComponentRoute)
  },{
   path: '**',
   loadComponent: () => import('path/to/page/not/found').then(m => m.ComponentName)
  }
]
}]
```

- to Delete app-routing.modules.ts et declare the routes in  app.module.ts or main.ts

### ANGULAR SERVICES

- ### CREATE COMPONENT STANDALONE

- ng g c {{ name }}  --standalone

- Direct import of Modules and Component in **import:** to use it
