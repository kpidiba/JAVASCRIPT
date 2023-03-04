# ANGULAR

### DESCRIPTION

**Angular** (communément appelé « **Angular 2+ »** ou « **Angular v2 et plus »**)[2](https://fr.wikipedia.org/wiki/Angular#cite_note-2),[3](https://fr.wikipedia.org/wiki/Angular#cite_note-3) est un *[framework](https://fr.wikipedia.org/wiki/Framework "Framework")* pour clients, [open source](https://fr.wikipedia.org/wiki/Open_source "Open source"), basé sur [TypeScript](https://fr.wikipedia.org/wiki/TypeScript "TypeScript") et codirigé par l'équipe du projet « Angular » chez [Google](https://fr.wikipedia.org/wiki/Google "Google") ainsi que par une communauté de particuliers et de sociétés. Angular est une réécriture complète d'[AngularJS](https://fr.wikipedia.org/wiki/AngularJS "AngularJS"), [cadriciel](https://fr.wikipedia.org/wiki/Cadriciel "Cadriciel") construit par la même équipe. Il permet la création d’applications Web et plus particulièrement d'[applications Web monopages](https://fr.wikipedia.org/wiki/Application_web_monopage "Application web monopage") : des applications Web accessibles via une page Web unique qui permet de fluidifier l’expérience utilisateur et d’éviter les chargements de pages à chaque nouvelle action. Le *framework* est basé sur une architecture du type [MVC](https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur "Modèle-vue-contrôleur") et permet donc de séparer les données, le visuel et les actions pour une meilleure gestion des responsabilités. Un type d’architecture qui a largement fait ses preuves et qui permet une forte maintenabilité et une amélioration du travail collaboratif.

### CREATE PROJECT

```js
ng new project_name
or
ng new myProject --skip-install=true
cd myProject
npm install
```

### CONCEPTS

- components

- data bindings

### FRAMEWORK

- Framework generally contains set of libraries

- You can extend framework

### COMMANDS

- change port: ng serve --port 3000

### LIBRARY

- Library generally perform specific operation

- You can build mutiple libs to build apps

### SPA(Singe Page Application)

 is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) and [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) when different content is to be shown. 

- SPA does not make requests to server for every  URL requests

- Generalement on cree plusieurs pages pour chaque vue

- Ressource are on client browser 

# components

The component is a combination of data html   template and logics    .

The component represent an area  of a view that shows inside the browser. The component are loads inside the browser

- create componentt for every component(side bar,nav bar)

- **selector** (convention name : **app-{component name}**),indentify the component

- generate with component with angular cli

```bash
ng g c component_name
```

- component_name.component.spec.ts (pour les test unitaires)

- app.module.ts (import components)

### DIRECTIVE TYPES

- Component directive(    directive with template view)

- Structural directive (which can change the DOM  layout by adding and removing DOM  elements)

- Attribute Directive (we can change appearance or behavior of an element,component or another directive)

- custom directive (create own custom directive)

- **ng For** :render array inside a view ,**structural directive** ,manipulate DOM.

```ts
//for array
<li *ngFor="let post of listPost">{{ post }}</li>
//for object
<li *ngFor="let obj of listObject">{{ obj  | json }}</li>
```

- **ngIf**

```js
<div *ngIf="listPost.length > 0 "></div>
```

- **ngTemplate** 

```js
<ng-template #emptyList>
    <p>there is no data in list post</p>
</ng-template>


<h3>List Object</h3>
<div *ngIf='listObject.length > 0; else emptyList' >
  <ul>
    <li *ngFor="let obj of listObject;let i = index">
      index:{{ i }}  name:{{ obj.name }}
      <button (click)="onDelete(obj,i)">delete</button>
    </li>
  </ul>
</div>
```

- **ngSwitchCase** 

```js
<button (click)="sendStep('step 1')">Step 1</button>
<button (click)="sendStep('step 2')">Step 2</button>
<button (click)="sendStep('step 3')">Step 3</button>

<div [ngSwitch]="stepForm">
  <div *ngSwitchCase="'step 1'">Step 1 Form</div>
  <div *ngSwitchCase="'step 2'">Step 2 Form</div>
  <div *ngSwitchCase="'step 3'">Step 3 Form</div>
  <div *ngSwitchDefault>Something Else Default</div>
</div>
```

- **ngStyle** 

```js
<h3 [ngStyle]="{
  color:boolColor? 'blue':'orange',
  textTransform:boolColor?'uppercase':'lowercase'
}">style changing</h3>
```

- **ngClass** 

```js
[ngClass] = "{
    'main':isActive,
    'text-weight':isActive
}"
```

### DATA BINDING

create variable in component.ts and use **{{  }}** to show the value in html or other

### share data between component

- Parent to Child Component via @input Decorator

```ts
//child ts file
@Input() parent_value:string;
  constructor() {
    this.parent_value ="";

}
//in parent declare value 
//using it in html
<child_name [parent_value]='parent_value' ></child_name>
```

- Child to Parent Component via @ViewChild Decorator

```js
class IMPlements AfterViewInit
//import child_name.component.ts and add to viewchild
@ViewChild(PostComponent) childCompo: any;
//init value with this
ngAfterViewInit(): void {
    console.log(this.childCompo);
    this.message_child = this.childCompo.childVar;
  }
```

- Child to Parent when there is Event ,using the **@Output  Decorator** and **Event Emitter**

```js
//in child view
@Output() message_event = new EventEmitter<string>;
sendMessage() {
    this.message_event.emit(this.secondChildM);
 }
//in child html
<button (click)="sendMessage()" >Event button</button>
//in parent html
<app-post [parent_value]='parent_value' (message_event)="receiveMessage($event)" ></app-post>
receiveMessage($event:string){
    console.log($event);
  }
```

- component is a parent of a component that the contains

### DISPLAY DATA

- STRING INTERPOLATION: **{{  }}** creer une variable dans la classe et l' afficher dans le fichier html

### PROPERTY BINDING

```js
<img [src]="imageUrl" alt="property binding">
```

### CLASS BINDING

Exemple:create text-red class in css and put color:red;

```js
<h4  [class.text-red] = "boolColor" >fromchild :{{ fromChildValue }}</h4>
//declare boolColor as Boolean with value false
boolColor:bool = true;
```

### STYLE BINDING

- ressources **Dom style** in w3school website

```js
<h1 [style.backgroundColor]=" boolColor ?'red':'green'">Angular Root Tag</h1>
```

### EVENT BINDING

```js
<button (click)='sendMessage()' >Click</button>
```

- event filter: **$event**

### TEMPLATE VARIABLE

- declare template variable with #variable_name

```js
//in html
<input (keyup)="onKeyUp(username)" #username >
//in ts
onKeyUp(value:HTMLInputElement){
    // console.log($event.key);
    // console.log($event.keyCode);
    console.log("value: "+value.value);
  }
```

### TWO WAY BINDING

```js
import { FormsModule } from '@angular/forms';
//add FormsModule to app.module.ts , import
<input type="text" [(ngModel)] = "twoWayBinding">
```

### ONE WAY DATA BINDING vs TWO WAY DATA BINDING

- ONe way

Can only binding data component to view

```js
component ----unidirectionel ---> view (html)
```

- two way , **view and modify**

### CHANGE DETECTION

### STRUCTURAL VS ATTRIBUTE DIRECTIVES

- **STRUCTURAL DIRECTIVES** : 
  
  - We can manipulate the DOM by adding and removing HTML Elements to the DOM
  
  - With the *****  we can easily Identify a Structural Directive
  
  - **NgFor,NgIf,NgSwitch**

- ****ATTRIBUTE DIRECTIVES**** 
  
  - change appearance or the behavior of a DOM Element
  
  - **NgClass ,NgStyle**

### 

### ANGULAR PIPES

It used to transforming data into a particular format when we only  need that data transformed 'in' a template.

- Uppercase Pipe

- Lowercase pipe

- Decimal/Number pipe

- Date pipe

- Json Pipe

- Percent Pipe

- Slice Pipe

```js
{{ pipv | uppercase }}
{{ count | number }}
{{ dcount | number:'2.3-4' }}
{{ count | currency:'JPY' }}
{{ count | currency:'EUR' }} <br>
{{ "date:"+today | date }}
{{ davidO | json }} 
{{ 0.2345| percent }}
//custom pipe
- create folder
import {Pipe , PipeTransform} from '@angular/core'


@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransfrom{
    transfrom(value:string,length:number):unknow{
    if(!length ){
        length = 20;
    }
    return value.substring(0,length);
}
}
}
```

### ANGULAR SERVICES

we use angular services to share data among components whether there is relationship between components or not ....

- **create services manual**

- create folder Services and create file post.service.ts

```ts
export class PostService{
    postList : Array<any> = [{}];
}
```

- create service with angular cli

```ts
ng g s services/service_name
```

### DEPENDENCY INJECTION

- **make service injectable to any component** 

```js
//in service class
@Injectable({
    providedIn: 'root',
})
```

### ANGULAR DRIVEN FORM

- two form types (reactive form and template driven form z)

- **all are in form component** 
