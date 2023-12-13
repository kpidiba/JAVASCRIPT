# LIST

- BOOTSTRAP

- MATERIAL UI

- TOASTR

- SWEETALERT

# BOOTSTRAP

```bash
npm i bootstrap@5.2.3
npm i @popperjs/core
```

#### we just need to add below code into angular.json file on top:

```json
"styles": [

...

"node_modules/bootstrap/dist/css/bootstrap.min.css"

],

"scripts": [

"node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

]
```

- restart the server

# MATERIAL UI

[Angular Material UI component library](https://material.angular.io/guide/getting-started) 

```bash
ng add @angular/material
```

- material icons: https://fonts.google.com/icons 

# TOASTR

## https://www.npmjs.com/package/ngx-toastr

Latest version available for each version of Angular

| ngx-toastr | Angular   |
| ---------- | --------- |
| 11.3.3     | 8.x       |
| 12.1.0     | 9.x       |
| 13.2.1     | 10.x 11.x |
| 14.3.0     | 12.x 13.x |
| 15.2.2     | 14.x.     |
| 16.2.0     | 15.x      |
| current    | >= 16.x   |

```shell
npm install ngx-toastr --save
```

`@angular/animations` package is a required dependency for the default toast

```shell
npm install @angular/animations --save
```

Don't want to use `@angular/animations`? See [Setup Without Animations](https://www.npmjs.com/package/ngx-toastr#setup-without-animations).

## [](https://www.npmjs.com/package/ngx-toastr#setup)

**step 1:** add css

- copy [toast css](https://github.com/scttcper/ngx-toastr/blob/HEAD/src/lib/toastr.css) to your project.
- If you are using sass you can import the css.

```css
// regular style toast
@import 'ngx-toastr/toastr';

// bootstrap style toast
// or import a bootstrap 4 alert styled design (SASS ONLY)
// should be after your bootstrap imports, it uses bs4 variables, mixins, functions
@import 'ngx-toastr/toastr-bs4-alert';

// if you'd like to use it without importing all of bootstrap it requires
@import 'bootstrap/scss/functions';
@import 'bootstrap/scss/variables';
@import 'bootstrap/scss/mixins';
// bootstrap 4
@import 'ngx-toastr/toastr-bs4-alert';
// boostrap 5
@import 'ngx-toastr/toastr-bs5-alert';
```

- If you are using angular-cli you can add it to your angular.json

```ts
"styles": [
  "styles.scss",
  "node_modules/ngx-toastr/toastr.css" // try adding '../' if you're using angular cli before 6
]
```

**step 2:** add `ToastrModule` to app `NgModule`, or `provideToastr` to providers, make sure you have `BrowserAnimationsModule` (or `provideAnimations`) as well.

- Module based

```ts
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  bootstrap: [App],
  declarations: [App],
})
class MainModule {}
```

- Standalone

```ts
import { AppComponent } from './src/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
  ]
});
```

## [](https://www.npmjs.com/package/ngx-toastr#use)Use

```ts
import { ToastrService } from 'ngx-toastr';

@Component({...})
export class YourComponent {
  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
```

## [](https://www.npmjs.com/package/ngx-toastr#options)Options

There are **individual options** and **global options**.

### [](https://www.npmjs.com/package/ngx-toastr#individual-options)Individual Options

Passed to `ToastrService.success/error/warning/info/show()`

| Option            | Type                                        | Default           | Description                                                                                                                                     |
| ----------------- | ------------------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| toastComponent    | Component                                   | Toast             | Angular component that will be used                                                                                                             |
| closeButton       | boolean                                     | false             | Show close button                                                                                                                               |
| timeOut           | number                                      | 5000              | Time to live in milliseconds                                                                                                                    |
| extendedTimeOut   | number                                      | 1000              | Time to close after a user hovers over toast                                                                                                    |
| disableTimeOut    | `boolean \| 'timeOut' \| 'extendedTimeOut'` | false             | Disable both timeOut and extendedTimeOut when set to `true`. Allows specifying which timeOut to disable, either: `timeOut` or `extendedTimeOut` |
| easing            | string                                      | 'ease-in'         | Toast component easing                                                                                                                          |
| easeTime          | string \| number                            | 300               | Time spent easing                                                                                                                               |
| enableHtml        | boolean                                     | false             | Allow html in message                                                                                                                           |
| newestOnTop       | boolean                                     | true              | New toast placement                                                                                                                             |
| progressBar       | boolean                                     | false             | Show progress bar                                                                                                                               |
| progressAnimation | `'decreasing' \| 'increasing'`              | 'decreasing'      | Changes the animation of the progress bar.                                                                                                      |
| toastClass        | string                                      | 'ngx-toastr'      | CSS class(es) for toast                                                                                                                         |
| positionClass     | string                                      | 'toast-top-right' | CSS class(es) for toast container                                                                                                               |
| titleClass        | string                                      | 'toast-title'     | CSS class(es) for inside toast on title                                                                                                         |
| messageClass      | string                                      | 'toast-message'   | CSS class(es) for inside toast on message                                                                                                       |
| tapToDismiss      | boolean                                     | true              | Close on click                                                                                                                                  |
| onActivateTick    | boolean                                     | false             | Fires `changeDetectorRef.detectChanges()` when activated. Helps show toast from asynchronous events outside of Angular's change detection       |

#### [](https://www.npmjs.com/package/ngx-toastr#setting-individual-options)Setting Individual Options

success, error, info, warning take `(message, title, ToastConfig)` pass an
options object to replace any default option.

```ts
this.toastrService.error('everything is broken', 'Major Error', {
  timeOut: 3000,
});
```

### [](https://www.npmjs.com/package/ngx-toastr#global-options)Global Options

All [individual options](https://www.npmjs.com/package/ngx-toastr#individual-options) can be overridden in the global
options to affect all toasts. In addition, global options include the following
options:

| Option                  | Type    | Default                                                                    | Description                                                                                                   |
| ----------------------- | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| maxOpened               | number  | 0                                                                          | Max toasts opened. Toasts will be queued. 0 is unlimited                                                      |
| autoDismiss             | boolean | false                                                                      | Dismiss current toast when max is reached                                                                     |
| iconClasses             | object  | [see below](https://www.npmjs.com/package/ngx-toastr#iconclasses-defaults) | Classes used on toastr service methods                                                                        |
| preventDuplicates       | boolean | false                                                                      | Block duplicate messages                                                                                      |
| countDuplicates         | boolean | false                                                                      | Displays a duplicates counter (preventDuplicates must be true). Toast must have a title and duplicate message |
| resetTimeoutOnDuplicate | boolean | false                                                                      | Reset toast timeout on duplicate (preventDuplicates must be true)                                             |
| includeTitleDuplicates  | boolean | false                                                                      | Include the title of a toast when checking for duplicates (by default only message is compared)               |

##### [](https://www.npmjs.com/package/ngx-toastr#iconclasses-defaults)iconClasses defaults

```ts
iconClasses = {
  error: 'toast-error',
  info: 'toast-info',
  success: 'toast-success',
  warning: 'toast-warning',
};
```

#### [](https://www.npmjs.com/package/ngx-toastr#setting-global-options)Setting Global Options

Pass values to `ToastrModule.forRoot()` or `provideToastr()` to set global options.

- Module based

```ts
// root app NgModule
imports: [
  ToastrModule.forRoot({
    timeOut: 10000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
  }),
],
```

- Standalone

```ts
import { AppComponent } from './src/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';

bootstrapApplication(AppComponent, {
  providers: [
    provideToastr({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),   ]
});
```

### [](https://www.npmjs.com/package/ngx-toastr#toastr-service-methods-return)Toastr Service methods return:

```ts
export interface ActiveToast {
  /** Your Toast ID. Use this to close it individually */
  toastId: number;
  /** the title of your toast. Stored to prevent duplicates if includeTitleDuplicates set */
  title: string;
  /** the message of your toast. Stored to prevent duplicates */
  message: string;
  /** a reference to the component see portal.ts */
  portal: ComponentRef<any>;
  /** a reference to your toast */
  toastRef: ToastRef<any>;
  /** triggered when toast is active */
  onShown: Observable<any>;
  /** triggered when toast is destroyed */
  onHidden: Observable<any>;
  /** triggered on toast click */
  onTap: Observable<any>;
  /** available for your use in custom toast */
  onAction: Observable<any>;
}
```

### [](https://www.npmjs.com/package/ngx-toastr#put-toasts-in-your-own-container)Put toasts in your own container

Put toasts in a specific div inside your application. This should probably be
somewhere that doesn't get deleted. Add `ToastContainerModule` to the ngModule
where you need the directive available. Make sure that your container has
an `aria-live="polite"` attribute, so that any time a toast is injected into
the container it is announced by screen readers.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ToastrModule.forRoot({ positionClass: 'inline' }),
    ToastContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Add a div with `toastContainer` directive on it.

```ts
import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  template: `
    <h1><a (click)="onClick()">Click</a></h1>
    <div aria-live="polite" toastContainer></div>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;

  constructor(private toastrService: ToastrService) {}
  ngOnInit() {
    this.toastrService.overlayContainer = this.toastContainer;
  }
  onClick() {
    this.toastrService.success('in div');
  }
}
```

## [](https://www.npmjs.com/package/ngx-toastr#functions)Functions

##### [](https://www.npmjs.com/package/ngx-toastr#clear)Clear

Remove all or a single toast by optional id

```ts
toastrService.clear(toastId?: number);
```

##### [](https://www.npmjs.com/package/ngx-toastr#remove)Remove

Remove and destroy a single toast by id

```
toastrService.remove(toastId: number);
```

## [](https://www.npmjs.com/package/ngx-toastr#systemjs)SystemJS

If you are using SystemJS, you should also adjust your configuration to point to
the UMD bundle.

In your SystemJS config file, `map` needs to tell the System loader where to
look for `ngx-toastr`:

```js
map: {
  'ngx-toastr': 'node_modules/ngx-toastr/bundles/ngx-toastr.umd.min.js',
}
```

## [](https://www.npmjs.com/package/ngx-toastr#setup-without-animations)Setup Without Animations

If you do not want to include `@angular/animations` in your project you can
override the default toast component in the global config to use `ToastNoAnimation` instead of the default one.

In your main module (ex: `app.module.ts`)

```ts
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';

@NgModule({
  imports: [
    // ...

    // BrowserAnimationsModule no longer required
    ToastNoAnimationModule.forRoot(),
  ],
  // ...
})
class AppModule {}
```

That's it! Animations are no longer required.

## [](https://www.npmjs.com/package/ngx-toastr#using-a-custom-toast) Using A Custom Toast

Create your toast component extending Toast see the demo's pink toast for an example [ngx-toastr/src/app/pink.toast.ts at master · scttcper/ngx-toastr · GitHub](https://github.com/scttcper/ngx-toastr/blob/master/src/app/pink.toast.ts)

```ts
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    ToastrModule.forRoot({
      toastComponent: YourToastComponent, // added custom toast!
    }),
  ],
  bootstrap: [App],
  declarations: [App, YourToastComponent], // add!
})
class AppModule {}
```

## [](https://www.npmjs.com/package/ngx-toastr#faq)FAQ

1. ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it
   was checked  
   When opening a toast inside an angular lifecycle wrap it in setTimeout

```ts
ngOnInit() {
    setTimeout(() => this.toastr.success('sup'))
}
```

2. Change default icons (check, warning sign, etc)  
   Overwrite the css background-image: [ngx-toastr/src/lib/toastr.css at master · scttcper/ngx-toastr · GitHub](https://github.com/scttcper/ngx-toastr/blob/master/src/lib/toastr.css).

3. How do I use this in an ErrorHandler?  
   See: [Cannot Inject ToastrService into a custom error handler. · Issue #179 · scttcper/ngx-toastr · GitHub](https://github.com/scttcper/ngx-toastr/issues/179).

4. How can I translate messages?  
   See: [how to translate toastr messessage · Issue #201 · scttcper/ngx-toastr · GitHub](https://github.com/scttcper/ngx-toastr/issues/201).

5. How to handle toastr click/tap action?
   
   ```ts
   showToaster() {
    this.toastr.success('Hello world!', 'Toastr fun!')
      .onTap
      .pipe(take(1))
      .subscribe(() => this.toasterClickedHandler());
   }
   
   toasterClickedHandler() {
    console.log('Toastr clicked');
   }Dependencies
   
   Latest version available for each version of Angular
   ngx-toastr     Angular
   11.3.3     8.x
   12.1.0     9.x
   13.2.1     10.x 11.x
   14.3.0     12.x 13.x
   15.2.2     14.x.
   16.2.0     15.x
   current     >= 16.x
   Install
   
   npm install ngx-toastr --save
   
   @angular/animations package is a required dependency for the default toast
   
   npm install @angular/animations --save
   
   Don't want to use @angular/animations? See Setup Without Animations.
   Setup
   
   step 1: add css
   
       copy toast css to your project.
       If you are using sass you can import the css.
   
   // regular style toast
   @import 'ngx-toastr/toastr';
   
   // bootstrap style toast
   // or import a bootstrap 4 alert styled design (SASS ONLY)
   // should be after your bootstrap imports, it uses bs4 variables, mixins, functions
   @import 'ngx-toastr/toastr-bs4-alert';
   
   // if you'd like to use it without importing all of bootstrap it requires
   @import 'bootstrap/scss/functions';
   @import 'bootstrap/scss/variables';
   @import 'bootstrap/scss/mixins';
   // bootstrap 4
   @import 'ngx-toastr/toastr-bs4-alert';
   // boostrap 5
   @import 'ngx-toastr/toastr-bs5-alert';
   
       If you are using angular-cli you can add it to your angular.json
   
   "styles": [
     "styles.scss",
     "node_modules/ngx-toastr/toastr.css" // try adding '../' if you're using angular cli before 6
   ]
   
   step 2: add ToastrModule to app NgModule, or provideToastr to providers, make sure you have BrowserAnimationsModule (or provideAnimations) as well.
   
       Module based
   
   import { CommonModule } from '@angular/common';
   import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
   
   import { ToastrModule } from 'ngx-toastr';
   
   @NgModule({
     imports: [
       CommonModule,
       BrowserAnimationsModule, // required animations module
       ToastrModule.forRoot(), // ToastrModule added
     ],
     bootstrap: [App],
     declarations: [App],
   })
   class MainModule {}
   
       Standalone
   
   import { AppComponent } from './src/app.component';
   import { provideAnimations } from '@angular/platform-browser/animations';
   
   import { provideToastr } from 'ngx-toastr';
   
   bootstrapApplication(AppComponent, {
     providers: [
       provideAnimations(), // required animations providers
       provideToastr(), // Toastr providers
     ]
   });
   
   Use
   
   import { ToastrService } from 'ngx-toastr';
   
   @Component({...})
   export class YourComponent {
     constructor(private toastr: ToastrService) {}
   
     showSuccess() {
       this.toastr.success('Hello world!', 'Toastr fun!');
     }
   }
   
   Options
   
   There are individual options and global options.
   Individual Options
   
   Passed to ToastrService.success/error/warning/info/show()
   Option     Type     Default     Description
   toastComponent     Component     Toast     Angular component that will be used
   closeButton     boolean     false     Show close button
   timeOut     number     5000     Time to live in milliseconds
   extendedTimeOut     number     1000     Time to close after a user hovers over toast
   disableTimeOut     boolean | 'timeOut' | 'extendedTimeOut'     false     Disable both timeOut and extendedTimeOut when set to true. Allows specifying which timeOut to disable, either: timeOut or extendedTimeOut
   easing     string     'ease-in'     Toast component easing
   easeTime     string | number     300     Time spent easing
   enableHtml     boolean     false     Allow html in message
   newestOnTop     boolean     true     New toast placement
   progressBar     boolean     false     Show progress bar
   progressAnimation     'decreasing' | 'increasing'     'decreasing'     Changes the animation of the progress bar.
   toastClass     string     'ngx-toastr'     CSS class(es) for toast
   positionClass     string     'toast-top-right'     CSS class(es) for toast container
   titleClass     string     'toast-title'     CSS class(es) for inside toast on title
   messageClass     string     'toast-message'     CSS class(es) for inside toast on message
   tapToDismiss     boolean     true     Close on click
   onActivateTick     boolean     false     Fires changeDetectorRef.detectChanges() when activated. Helps show toast from asynchronous events outside of Angular's change detection
   Setting Individual Options
   
   success, error, info, warning take (message, title, ToastConfig) pass an options object to replace any default option.
   
   this.toastrService.error('everything is broken', 'Major Error', {
     timeOut: 3000,
   });
   
   Global Options
   
   All individual options can be overridden in the global options to affect all toasts. In addition, global options include the following options:
   Option     Type     Default     Description
   maxOpened     number     0     Max toasts opened. Toasts will be queued. 0 is unlimited
   autoDismiss     boolean     false     Dismiss current toast when max is reached
   iconClasses     object     see below     Classes used on toastr service methods
   preventDuplicates     boolean     false     Block duplicate messages
   countDuplicates     boolean     false     Displays a duplicates counter (preventDuplicates must be true). Toast must have a title and duplicate message
   resetTimeoutOnDuplicate     boolean     false     Reset toast timeout on duplicate (preventDuplicates must be true)
   includeTitleDuplicates     boolean     false     Include the title of a toast when checking for duplicates (by default only message is compared)
   iconClasses defaults
   
   iconClasses = {
     error: 'toast-error',
     info: 'toast-info',
     success: 'toast-success',
     warning: 'toast-warning',
   };
   
   Setting Global Options
   
   Pass values to ToastrModule.forRoot() or provideToastr() to set global options.
   
       Module based
   
   // root app NgModule
   imports: [
     ToastrModule.forRoot({
       timeOut: 10000,
       positionClass: 'toast-bottom-right',
       preventDuplicates: true,
     }),
   ],
   
       Standalone
   
   import { AppComponent } from './src/app.component';
   import { provideAnimations } from '@angular/platform-browser/animations';
   
   import { provideToastr } from 'ngx-toastr';
   
   bootstrapApplication(AppComponent, {
     providers: [
       provideToastr({
         timeOut: 10000,
         positionClass: 'toast-bottom-right',
         preventDuplicates: true,
       }), 
     ]
   });
   
   Toastr Service methods return:
   
   export interface ActiveToast {
     /** Your Toast ID. Use this to close it individually */
     toastId: number;
     /** the title of your toast. Stored to prevent duplicates if includeTitleDuplicates set */
     title: string;
     /** the message of your toast. Stored to prevent duplicates */
     message: string;
     /** a reference to the component see portal.ts */
     portal: ComponentRef<any>;
     /** a reference to your toast */
     toastRef: ToastRef<any>;
     /** triggered when toast is active */
     onShown: Observable<any>;
     /** triggered when toast is destroyed */
     onHidden: Observable<any>;
     /** triggered on toast click */
     onTap: Observable<any>;
     /** available for your use in custom toast */
     onAction: Observable<any>;
   }
   
   Put toasts in your own container
   
   Put toasts in a specific div inside your application. This should probably be somewhere that doesn't get deleted. Add ToastContainerModule to the ngModule where you need the directive available. Make sure that your container has an aria-live="polite" attribute, so that any time a toast is injected into the container it is announced by screen readers.
   
   import { BrowserModule } from '@angular/platform-browser';
   import { NgModule } from '@angular/core';
   import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
   
   import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
   
   import { AppComponent } from './app.component';
   
   @NgModule({
     declarations: [AppComponent],
     imports: [
       BrowserModule,
       BrowserAnimationsModule,
   
       ToastrModule.forRoot({ positionClass: 'inline' }),
       ToastContainerModule,
     ],
     providers: [],
     bootstrap: [AppComponent],
   })
   export class AppModule {}
   
   Add a div with toastContainer directive on it.
   
   import { Component, OnInit, ViewChild } from '@angular/core';
   
   import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
   
   @Component({
     selector: 'app-root',
     template: `
       <h1><a (click)="onClick()">Click</a></h1>
       <div aria-live="polite" toastContainer></div>
     `,
   })
   export class AppComponent implements OnInit {
     @ViewChild(ToastContainerDirective, { static: true })
     toastContainer: ToastContainerDirective;
   
     constructor(private toastrService: ToastrService) {}
     ngOnInit() {
       this.toastrService.overlayContainer = this.toastContainer;
     }
     onClick() {
       this.toastrService.success('in div');
     }
   }
   
   Functions
   Clear
   
   Remove all or a single toast by optional id
   
   toastrService.clear(toastId?: number);
   
   Remove
   
   Remove and destroy a single toast by id
   
   toastrService.remove(toastId: number);
   
   SystemJS
   
   If you are using SystemJS, you should also adjust your configuration to point to the UMD bundle.
   
   In your SystemJS config file, map needs to tell the System loader where to look for ngx-toastr:
   
   map: {
     'ngx-toastr': 'node_modules/ngx-toastr/bundles/ngx-toastr.umd.min.js',
   }
   
   Setup Without Animations
   
   If you do not want to include @angular/animations in your project you can override the default toast component in the global config to use ToastNoAnimation instead of the default one.
   
   In your main module (ex: app.module.ts)
   
   import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
   
   @NgModule({
     imports: [
       // ...
   
       // BrowserAnimationsModule no longer required
       ToastNoAnimationModule.forRoot(),
     ],
     // ...
   })
   class AppModule {}
   
   That's it! Animations are no longer required.
   Using A Custom Toast
   
   Create your toast component extending Toast see the demo's pink toast for an example https://github.com/scttcper/ngx-toastr/blob/master/src/app/pink.toast.ts
   
   import { ToastrModule } from 'ngx-toastr';
   
   @NgModule({
     imports: [
       ToastrModule.forRoot({
         toastComponent: YourToastComponent, // added custom toast!
       }),
     ],
     bootstrap: [App],
     declarations: [App, YourToastComponent], // add!
   })
   class AppModule {}
   
   FAQ
   
       ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
       When opening a toast inside an angular lifecycle wrap it in setTimeout
   
   ngOnInit() {
       setTimeout(() => this.toastr.success('sup'))
   }
   
       Change default icons (check, warning sign, etc)
       Overwrite the css background-image: https://github.com/scttcper/ngx-toastr/blob/master/src/lib/toastr.css.
       How do I use this in an ErrorHandler?
       See: https://github.com/scttcper/ngx-toastr/issues/179.
       How can I translate messages?
       See: https://github.com/scttcper/ngx-toastr/issues/201.
       How to handle toastr click/tap action?
   
       showToaster() {
         this.toastr.success('Hello world!', 'Toastr fun!')
           .onTap
           .pipe(take(1))
           .subscribe(() => this.toasterClickedHandler());
       }
   
       toasterClickedHandler() {
         console.log('Toastr clicked');
       }
   ```

```
# SWEET ALERT

[GitHub - sweetalert2/ngx-sweetalert2: Declarative, reactive, and template-driven SweetAlert2 integration for Angular](https://github.com/sweetalert2/ngx-sweetalert2) 

Official: https://sweetalert2.github.io/

```bash
npm install sweetalert2 @sweetalert2/ngx-sweetalert2
```

# Angular and SweetAlert2

| Angular version | Latest compatible version range                                                                                                                   | Required SweetAlert2 version range |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| Angular 14+     | @sweetalert2/ngx-sweetalert2@**^12.0.0** (current)                                                                                                | sweetalert2@**^11.0.0**            |
| Angular 12, 13  | [@sweetalert2/ngx-sweetalert2@**^11.0.0**](https://github.com/sweetalert2/ngx-sweetalert2/tree/v11.0.0#readme)                                    | sweetalert2@**^11.0.0**            |
| Angular 9 to 11 | [@sweetalert2/ngx-sweetalert2@**~9.0.0**](https://github.com/sweetalert2/ngx-sweetalert2/tree/v9.0.0#readme)                                      | sweetalert2@**^10.8.0**            |
| Angular 8       | [@sweetalert2/ngx-sweetalert2@**~7.3.0**](https://github.com/sweetalert2/ngx-sweetalert2/tree/v7.3.0#readme) (⚠️ NOT ~7.4.0, broken AoT metadata) | sweetalert2@**^9.7.0**             |
| Angular 7       | [@sweetalert2/ngx-sweetalert2@**^5.1.0**](https://github.com/sweetalert2/ngx-sweetalert2/tree/v5.1.0#readme)                                      | sweetalert2@**^8.5.0**             |
| Angular 6       | [@sweetalert2/ngx-sweetalert2@**^5.1.0**](https://github.com/sweetalert2/ngx-sweetalert2/tree/v5.1.0#readme)                                      | sweetalert2@**^8.5.0**             |
| Angular 5       | [@sweetalert2/ngx-sweetalert2@**^5.1.0**](https://github.com/sweetalert2/ngx-sweetalert2/tree/v5.1.0#readme)                                      | sweetalert2@**^8.5.0**             |
| Angular 4       | [@toverux/ngx-sweetalert2@**^3.4.0**](https://github.com/sweetalert2/ngx-sweetalert2/tree/v3.4.0#readme)                                          | sweetalert2@**^7.15.1**            |
| Angular 2       | Try Angular 4 versions requirements, or older versions like @toverux/ngsweetalert2                                                                | unknown                            |

2. INSTALLATION

              **npm install sweetalert2 @sweetalert2/ngx-sweetalert2**

1. Import the module:

```ts
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
    //=> Basic usage (forRoot can also take options, see the wiki)
    imports: [SweetAlert2Module.forRoot()],

    //=> In submodules only:
    imports: [SweetAlert2Module],

    //=> In submodules only, overriding options from your root module:
    imports: [SweetAlert2Module.forChild({ /* options */ })]
})
export class AppModule {
}
```

That's it! By default, SweetAlert2 will be lazy-loaded, only when needed, from your local dependency of `sweetalert2`, using the `import()` syntax under the hood.

## [](https://github.com/sweetalert2/ngx-sweetalert2#link-api)

## 🔗 API

### [](https://github.com/sweetalert2/ngx-sweetalert2#swaldirective)

### `SwalDirective`

Add the `[swal]` attribute to an element to show a simple modal when that element is clicked.

To define the modal contents, you can pass a [`SweetAlertOptions` (provided by sweetalert2)](https://github.com/sweetalert2/sweetalert2/blob/main/sweetalert2.d.ts) object,
or a simple array of strings, of format `[title: string, text: string (, icon: string)]`.

A simple dialog:

```html
<button [swal]="['Oops!', 'This is not implemented yet :/', 'warning']">
  Do it!
</button>
```

More advanced, with text input, confirmation, denial and dismissal handling:

```html
<button
  [swal]="{ title: 'Save file as...', input: 'text', showDenyButton: true, denyButtonText: 'Don\'t save', showCancelButton: true }"  (confirm)="saveFile($event)"  (deny)="handleDenial()"  (dismiss)="handleDismiss($event)">

  Save
</button>
```

```ts
export class MyComponent {
  public saveFile(fileName: string): void {
    // ... save file
  }

  public handleDenial(): void {
      // ... don't save file and quit
  }

  public handleDismiss(dismissMethod: string): void {
    // dismissMethod can be 'cancel', 'overlay', 'close', and 'timer'
    // ... do something
  }
}
```

The directive can also take a reference to a [`<swal>` component](https://github.com/sweetalert2/ngx-sweetalert2#swalcomponent) for more advanced use cases:

```html
<button [swal]="deleteSwal" (confirm)="deleteFile(file)">
  Delete {{ file.name }}
</button>

<swal #deleteSwal title="Delete {{ file.name }}?" etc></swal>
```

### [](https://github.com/sweetalert2/ngx-sweetalert2#swalcomponent)

### `SwalComponent`

The library also provides a component, that can be useful for advanced use cases, or when you `[swal]` has too many options.

The component also allows you to use Angular dynamic templates inside the SweetAlert (see the [`*swalPortal` directive](https://github.com/sweetalert2/ngx-sweetalert2#swalportaldirective) for that).

Simple example:

```html
<swal
  #deleteSwal
  title="Delete {{ file.name }}?"  text="This cannot be undone"  icon="question"  [showCancelButton]="true"  [focusCancel]="true"  (confirm)="deleteFile(file)">
</swal>

With [swal]:
<button [swal]="deleteSwal">Delete {{ file.name }}</button>

Or DIY:
<button (click)="deleteSwal.fire()">Delete {{ file.name }}</button>
```

You can access the dialog from your TypeScript code-behind like this:

```ts
class MyComponent {
  @ViewChild('deleteSwal')
  public readonly deleteSwal!: SwalComponent;
}
```

You can pass native SweetAlert2 options via the `swalOptions` input, just in the case you need that:

```html
<swal [swalOptions]="{ confirmButtonText: 'I understand' }"></swal>
```

By the way: every "special" option, like `swalOptions`, that are not native options from SweetAlert2,
are prefixed with `swal`.

You can catch other modal lifecycle events than (confirm), (deny) or (cancel):

```html
<swal
  (willOpen)="swalWillOpen($event)"  (didOpen)="swalDidOpen($event)"  (didRender)="swalDidRender($event)"  (willClose)="swalWillClose($event)"  (didClose)="swalDidClose()"  (didDestroy)="swalDidDestroy()">
</swal>
```

```ts
export class MyComponent {
    public swalWillOpen(event: WillOpenEvent): void {
      // Most events (those using $event in the example above) will let you access the modal native DOM node, like this:
      console.log(event.modalElement);
    }
}
```

### [](https://github.com/sweetalert2/ngx-sweetalert2#swalportaldirective)

### `SwalPortalDirective`

The `*swalPortal` structural directive lets you use Angular dynamic templates inside SweetAlerts.

The name "portal" is inspired by React or Angular CDK portals.
The directive will replace certain parts of the modal (aka. *swal targets*) with embedded Angular views.

This allows you to have data binding, change detection, and use every feature of the Angular template syntax
you want, just like if the SweetAlert was a normal Angular component (it's not at all).

```html
<swal title="SweetAlert2 Timer">
  <div *swalPortal class="alert alert-info">
    <strong>{{ elapsedSeconds }}</strong> seconds elapsed since the modal was opened.  </div>
</swal>
```

Using a structural directives allows us to take your content as a template, instantiate it lazily when needed
(i.e. when the modal is shown), and putting it in a native DOM element that is originally outside the scope of
your Angular app.

In this example we set the main content of the modal, where the `text` property is usually rendered when SweetAlert2
is in charge.
You can also target the title, the footer, or even the confirm button, and more!

You just have to change the *target* of the portal (*`content`* is the default target).
First, inject this little service in your component:

```ts
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';

export class MyComponent {
  public constructor(public readonly swalTargets: SwalPortalTargets) {
  }
}
```

Then, set the appropriate target as the value of `*swalPortal`, here using two portals, the first one
targeting the modal's content (this is the default), and the other one targeting the confirm button text.

```html
<swal title="Fill the form, rapidly" (confirm)="sendForm(myForm.value)">
  <!-- This form will be displayed as the alert main content
       Targets the alert's main content zone by default -->
  <form *swalPortal [formControl]="myForm">
    ...  </form>

  <!-- This targets the confirm button's inner content
       Notice the usage of ng-container to avoid creating an useless DOM element inside the button -->
  <ng-container *swalPortal="swalTargets.confirmButton">
    Send ({{ secondsLeft }} seconds left)  </ng-container>
</swal>
```

We have the following targets: `closeButton`, `title`, `content`, `actions`, `confirmButton`, `cancelButton`, and `footer`.
