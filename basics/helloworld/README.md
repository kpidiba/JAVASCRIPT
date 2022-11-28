# HELLO WORLD

Sample example to print out "Hello World". We added an optional HTML comment that surrounds our JavaScript code.

```javascript
<html>
   <body>   
      <script language = "javascript" type = "text/javascript">
         <!--
            document.write("Hello World!")
         //-->
      </script>      
   </body>
</html>
```

### SCRIPT TAG

JavaScript programs can be inserted almost anywhere into an HTML document using the `<script>` tag.

- **Script in <head>...</head> section :** If you want to have a script run on some event, such as when a user clicks somewhere, then you will place that script in the head as follow.

```javascript
<html>
   <head>      
      <script type = "text/javascript">
         <!--
            function sayHello() {
               alert("Hello World")
            }
         //-->
      </script>     
   </head>

   <body>
      <input type = "button" onclick = "sayHello()" value = "Say Hello" />
   </body>  
</html>
```

- **Script in <body>...</body> section :** If you need a script to run as the page loads so that the script generates content in the page, then the script goes in the <body> portion of the document. In this case, you would not have any function defined using JavaScript. Take a look at the following code.
  
  ```javascript
  <html>
     <head>
     </head>
  
     <body>
        <script type = "text/javascript">
           <!--
              document.write("Hello World")
           //-->
        </script>
  
        <p>This is web page body </p>
     </body>
  </html>
  ```
* **Script in <body>...</body> and <head>...</head> section :** You can put your JavaScript code in <head> and <body> section altogether as follows.
  
  ```javascript
  <html>
     <head>
        <script type = "text/javascript">
           <!--
              function sayHello() {
                 alert("Hello World")
              }
           //-->
        </script>
     </head>
  
     <body>
        <script type = "text/javascript">
           <!--
              document.write("Hello World")
           //-->
        </script>
  
        <input type = "button" onclick = "sayHello()" value = "Say Hello" />
     </body>
  </html>
  ```
- **JavaScript in External File :** As you begin to work more extensively with JavaScript, you will be likely to find that there are cases where you are reusing identical JavaScript code on multiple pages of a site.
  
  You are not restricted to be maintaining identical code in multiple HTML files. The **script** tag provides a mechanism to allow you to store JavaScript in an external file and then include it into your HTML files.
  
  Here is an example to show how you can include an external JavaScript file in your HTML code using **script** tag and its **src** attribute.

```javascript
<html>
   <head>
      <script type = "text/javascript" src = "filename.js" ></script>
   </head>

   <body>
      .......
   </body>
</html>
```

### The async and defer attributes

- The `async` attribute of the `<script>` element instructs the web browser to fetch the JavaScript file in parallel and then parse and execute as soon as the JavaScript file is available.
- The `defer` attribute of the `<script>` element allows the web browser to execute the JavaScript file after the document has been parsed.
