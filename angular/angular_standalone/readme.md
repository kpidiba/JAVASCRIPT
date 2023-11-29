# ANGULAR STANDALONE

## Introduction

**Angular 15** est sortie il y a 
quelques mois maintenant, il est temps de faire un petit retour sur la 
principale nouveauté de cette release : les [**standalone components**](https://github.com/angular/angular/discussions/43784).

Cette “petite” RFC vient bousculer l’un des concepts coeurs d’Angular, le [NgModule](https://angular.io/guide/ngmodules).

Les objectifs de cet ajout sont humbles :

- Rendre Angular plus simple
- Réduire le code redondant

Et ce n’est que le début, car une [nouvelle RFC](https://github.com/angular/angular/discussions/45554) a été déposée en avril 2022, pour compléter cette notion, avec pour but
 la possibilité de construire des applications Angular sans utiliser le [NgModule](https://angular.io/guide/ngmodules).

Angular change, mais concrètement, ça donne quoi ?

‍

## C’est quoi un standalone component ?

Aujourd’hui, un [Component](https://angular.io/guide/component-overview) doit être rattaché à un [NgModule](https://angular.io/guide/ngmodules) pour être utilisable.

En modifiant le décorateur du Component, il est maintenant possible de le déclarer “standalone”.

Avant :

```markup
@Component({
  selector: 'app-delia',
  templateUrl: './delia.component.html'
})
export class DeliaComponent {}

@NgModule({
  declarations: [DeliaComponent],
  imports: [BrowserModul],
  bootstrap: [DeliaComponent]
})
export class DeliaModule {}
```

En mode standalone :

```markup
@Component({
  selector: 'app-delia',
    standalone: true,
// notre composant n'est plus rattaché à un module, mais il peut importer des modules,
// des composants, des directives,....
    imports: [CommonModule, DeliaRennesComponent], 
  templateUrl: './delia.component.html'
})
export class DeliaComponent {}
```

Cette feature avait été proposé en preview dans la version 14, elle est maintenant considérée comme stable

‍

## Une application Angular constituée de standalone component uniquement ?

C’est possible !

Le
 framework offre une nouvelle fonction bootstrapApplication() permettant
 de bootstrap non plus un module au lancement de l’application, mais un 
composant standalone.

```markup
bootstrapApplication(DeliaComponent);
```
