## IIS SERVER



## HTTP SERVER

So you are trying to debug the production build of your Angular app, you've run `ng build --prod` and you have your production files in your `/dist` folder but you can't quite seem to run the files locally.

Unfortunately there is no way to run `ng serve --prod` and serve the production build of your app locally. Here to save the day, the npm package: `http-server`.

> [http-server](https://www.npmjs.com/package/http-server) 
> is a simple, zero-configuration command-line http server. It is powerful
>  enough for production usage, but it's simple and hackable enough to be 
> used for testing, local development, and learning.
> 
> When I last checked today (4/5/2021), the package had 3.1 million weekly downloads. This is a very popular npm package.

## [](https://www.webdevtutor.net/blog/angular-run-production-build-locally#download-the-http-server-npm-package)Download the `http-server` npm package

In the root directory of your Angular project, run the following command to download the `http-server` package:

`npm install http-server -g`

## [](https://www.webdevtutor.net/blog/angular-run-production-build-locally#build-your-angular-app-with-the-production-flag)Build Your Angular App with the Production flag

Once the package downloads successfully, build your Angular project with the production flag using the following command:

`ng build --prod`

Your output/deployable files should now be in the `/dist` folder of your application. Your files may be outputted to a different folder depending on the value of the `outputPath` property in the `angular.json` file for your Angular app.

## [](https://www.webdevtutor.net/blog/angular-run-production-build-locally#serve-your-production-app-using-the-http-server-command)Serve Your Production App using the `http-server` Command

Serve your newly outputted production files locally using the following command: `http-server dist/`

Keep in mind that you may have to substitute `dist/` with a different directory if the `outputPath` property in the `angular.json` file is different than the default of `dist`.

## [](https://www.webdevtutor.net/blog/angular-run-production-build-locally#view-the-production-app-locally)View the Production App Locally

If your `http-server dist/` command was successful, you will see an output in your command line similar to this:

```console
Starting up http-server, serving dist/
Available on:
  http://10.0.0.3:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
```

Navigate to either *10.0.0.3:8080* or *127.0.0.1:8080*.

> The production version of your Angular application will now be accessible on your local machine!
