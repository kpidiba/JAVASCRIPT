# VITE

<img src="./logo-vite.png" title="" alt="" width="330">

Documentation: https://vitejs.dev/

Github repo : [GitHub - vitejs/vite: Next generation frontend tooling. It&#39;s fast!](https://github.com/vitejs/vite) 

**Vite** (French: [[vit]](https://en.wikipedia.org/wiki/Help:IPA/French "Help:IPA/French"), like "veet") is a local development server and bundling (js,css) together for production written by Evan You,[[1]](https://en.wikipedia.org/wiki/Vite_(software)#cite_note-1) the creator of [Vue.js](https://en.wikipedia.org/wiki/Vue.js "Vue.js"), and used by default by [Vue](https://en.wikipedia.org/wiki/Vue.js "Vue.js") and for [React](https://en.wikipedia.org/wiki/React_(software) "React (software)") project templates. It has support for [TypeScript](https://en.wikipedia.org/wiki/TypeScript "TypeScript") and [JSX](https://en.wikipedia.org/wiki/JSX_(JavaScript) "JSX (JavaScript)"). It uses Rollup and [esbuild](https://en.wikipedia.org/wiki/Esbuild "Esbuild") internally for bundling.[[2]](https://en.wikipedia.org/wiki/Vite_(software)#cite_note-2)

It monitors files as they're being edited and upon file save the web browser reloads the code being edited through a process called Hot Module Replacement (HMR)[[3]](https://en.wikipedia.org/wiki/Vite_(software)#cite_note-3) which works by just reloading the specific file being changed using ES modules (ESM) instead of recompiling the entire application.

Vite provides built-in support for server-side rendering (SSR). 
By default, it listens on TCP port 5173. It is possible to configure 
Vite to serve content over [HTTPS](https://en.wikipedia.org/wiki/HTTPS "HTTPS") and proxy requests (including [WebSocket](https://en.wikipedia.org/wiki/WebSocket "WebSocket")) to a back-end web server (such as [Apache HTTP Server](https://en.wikipedia.org/wiki/Apache_HTTP_Server "Apache HTTP Server") or [lighttpd](https://en.wikipedia.org/wiki/Lighttpd "Lighttpd")).

## How Vite Works

Vite follows a recent trend of tools like Svelte (where the framework is basically compiled away) and other tools like Snowpack that leverage modern JavaScript features (such as ES modules) to provide a smooth, fast dev experience with little to no configuration and not much overhead in the way of installed packages. You basically install Vite with a plugin or two, do very little configuration, and just start working on your app.

Vite provides a modern dev environment that can forego the bundling step because it serves the browser native ES modules. It provides templates (a set of starter files) for a number of frameworks and vanilla JavaScript, and also offers TypeScript, JSX and Sass support (although you need to install one dependency for Sass).

Vite is really fast, because it leverages native ES modules and doesn’t need to rebuild the whole bundle when something changes. This makes HMR (High Module Remplacement)updates consistently fast, regardless of the size of your application. When bundling for production, Vite ships with a pre-configured build command that bakes in many performance 
optimizations out of the box.

### vite vs webpack vs parcel
