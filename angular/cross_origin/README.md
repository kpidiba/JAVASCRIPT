# CORS Error

- https://www.youtube.com/watch?v=uMJnAxapF7E 

Cross-Origin-Resources-Sharing Error, only happen in browsers when frontend tries to access  a backend which doesn't have the same URL , browser throws an error

- Headers that help to stop that

- Access-Control-Allow-Origin (Tell which frontend can request the backend)

```json
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: front.my.app.com
Access-Control-Allow-Origin: null
```

- Access-Control-Request-Origin (Which Http Method is Accepted)

```json
Access-Control-Request-Method: GET,POST
```

- Tell what Header are accepted

```json
Access-Control-Request-Headers: Authorization
```
