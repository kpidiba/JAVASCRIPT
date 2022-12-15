# FETCH

JavaScript can send network requests to the server and load new information whenever it’s needed.

For example, we can use a network request to:

- Submit an order,
- Load user information,
- Receive latest updates from the server,
- …etc.

…And all of that without reloading the page!

There’s an umbrella term “AJAX” (abbreviated **A**synchronous **J**avaScript **A**nd **X**ML) for network requests from JavaScript. We don’t have to use XML though: the term comes from old times, that’s why that word is there. You may have heard that term already.

There are multiple ways to send a network request and get information from the server.

The `fetch()` method is modern and versatile, so we’ll start with it. It’s not supported by old browsers (can be polyfilled), but very well supported among the modern ones.

```javascript
let promise = fetch(url,[options])
```

- **`url`** – the URL to access.

- **`options`** – optional parameters: method, headers etc.

- Without `options`, this is a simple GET request, downloading the contents of the `url`.

Getting a response is usually a two-stage process.

**First, the `promise`, returned by `fetch`, resolves with an object of the built-in [Response](https://fetch.spec.whatwg.org/#response-class) class as soon as the server responds with headers.**

At this stage we can check HTTP status, to see whether it is successful or not, check headers, but don’t have the body yet.

The promise rejects if the `fetch` was unable to make HTTP-request, e.g. network problems, or there’s no such site. Abnormal HTTP-statuses, such as 404 or 500 do not cause an error.

We can see HTTP-status in response properties:

- **`status`** – HTTP status code, e.g. 200.
- **`ok`** – boolean, `true` if the HTTP status code is 200-299.

```javascript
let response = await fetch(url);

if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = await response.json();
//parcourir le promise en recuperant les valeurs
    for(let value of json){
    console.log(value);
}
} else {
  alert("HTTP-Error: " + response.status);
}
```

```javascript
fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login));
```

### METHODS

`Response` provides multiple promise-based methods to access the body in various formats:

- **`response.text()`** – read the response and return as text,
- **`response.json()`** – parse the response as JSON,
- **`response.formData()`** – return the response as `FormData` object (explained in the [next chapter](https://javascript.info/formdata)),
- **`response.blob()`** – return the response as [Blob](https://javascript.info/blob) (binary data with type),
- **`response.arrayBuffer()`** – return the response as [ArrayBuffer](https://javascript.info/arraybuffer-binary-arrays) (low-level representation of binary data),

    

### TESTS

On va utiliser le sit https://jsonplaceholder.typicode.com/users (ou autres), api preconcu sur ce sit.

- **POST DATA**

```javascript
async function fetchUsers() {
        const r = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: "David", age: 23 }),
        });
        if (r.ok === true) {
          return r.json();
        }
        throw new Error("ERROR");
      }

      fetchUsers().then((a) => console.log(a));
```

**STOP HTTP REQUEST**

```javascript
const a = new AbortController()
    Promise.race([
      fetch("https://jsonplaceholder.typicode.com/posts/?_limit=5&_delay=2000",{
        signal: a.signal
      }),
      fetch("https://jsonplaceholder.typicode.com/users/?_limit=3",{
        signal: a.signal
      }),
    ])
      .then((race) => race.json())
      .then(resp =>{
        a.abort();
        console.log
      });
```
