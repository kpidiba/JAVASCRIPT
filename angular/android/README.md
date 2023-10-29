# CAPACITOR

Ionic is only the UI part, Capacitor does the heavy work of wrapping your website into a native app!

[Using Capacitor with Angular](https://capacitorjs.com/solution/angular)

```command
npm install @capacitor/cli --save-dev
npx cap init
npm install @capacitor/core @capacitor/ios @capacitor/android
npx cap add android
# Build the Angular app
ng build --prod

# Sync the build folder to native projects
npx cap sync
```

- in capacitor.config.ts: change **webDir: 'dist/angular'**
