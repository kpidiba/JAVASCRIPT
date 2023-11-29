# ARCHITECTURES

```
my-app/
├── `assets/`
│   ├── `css/`
│   │   ├── `main.css`
│   │   └── `...`
│   ├── `fonts/`
│   │   ├── `roboto/`
│   │   │   ├── `Roboto-Black.ttf`
│   │   │   └── `...`
│   ├── `img/`
│   │   ├── `logo.png`
│   │   └── `...`
│   └── `...`
├── `environments/`
│   ├── `environment.prod.ts`
│   ├── `environment.ts`
│   └── `...`
├── `node_modules/`
│   ├── `angular/`
│   │   └── `...`
│   ├── `rxjs/`
│   │   └── `...`
│   └── `...`
├── `src/`
│   ├── `app/`
│   │   ├── `app.component.css`
│   │   ├── `app.component.html`
│   │   └── `app.component.ts`
│   ├── `core/`
│   │   ├── `interfaces/`
│   │   │   ├── `user.interface.ts`
│   │   │   └── `...`
│   │   ├── `services/`
│   │   │   ├── `auth.service.ts`
│   │   │   └── `...`
│   │   └── `...`
│   ├── `features/`
│   │   ├── `heroes/`
│   │   │   ├── `heroes.component.css`
│   │   │   ├── `heroes.component.html`
│   │   │   ├── `heroes.component.ts`
│   │   │   └── `services/`
│   │   │       ├── `hero.service.ts`
│   │   │       └── `...`
│   │   └── `...`
│   ├── `shared/`
│   │   ├── `models/`
│   │   │   ├── `user.ts`
│   |   |   |
│   │   ├── `validators/`
│   │   │   ├── `custom.valid0ator.ts/`
│   │   ├── `dtos/`
│   │   │   ├── `dto.ts/`
│   │   └── `...`
│   └── `...`
│   │   ├── `components/`
│   │   │   ├── `button/`
│   │   │   │   ├── `button.component.css`
│   │   │   │   ├── `button.component.html`
│   │   │   │   └── `button.component.ts`
│   │   │   └── `...`
│   │   └── `...`
│   └── `...`
└── `test/`
    ├── `app/`
    │   └── `...`
    ├── `core/`
    │   └── `...`
    ├── `features/`
    │   └── `...`
    └── `shared/`
        └── `...`
```

This folder architecture is based on the following principles:

- **Separation of concerns**. The code is organized into folders based on its purpose, such as `app/`, `features/`, and `services/`. This makes it easier to find and maintain the code.
- **Modularity**. The code 
  is divided into modules, which are self-contained units of code that can
   be reused in different parts of the application. This makes the code 
  more scalable and maintainable.
- **Testability**. The code is written in a way that makes it easy to test. This helps to ensure that the code is working as expected.
- **Core folder**. This folder contains interfaces, services, and other code that is used throughout the application.
- **Shared folder**. This folder contains components, directives, and pipes that are used in multiple features of the application.
