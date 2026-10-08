# EXPRESS

Fast, unopinionated, minimalist web framework for Node.js

## STEPS

1. create project folder(lab5)
2. create two folder and reach to backend by
```
cd ..
cd lab
cd backend
    ```
4. type `npm init -y`
5. install nodemon  `npm i nodemon -D`
6. install express `npm i express`
7.  update backend/package.json
    - change type ` type: "module"
    - chnage script

    ```
    script :{
        "start": "node app.js",
        "dev":"nodemon prg1.js"

    }
    ```
8. add "lab5/backend/node_modules" in gitignore
9. create "prg1.js" in backend
10. write the script below to start express server

        ```
        import express from 'express'
        const app = express()

        app.get('/', (req, res) => {
            res.send('<h1> Hello Client </h1>')
        }   )

        app.listen(4444, () => {
            console.log('Server is running on http://localhost:4444')
        })
```
## Static Files

Express can serve static HTML, CSS, JS, images, etc. using the built-in `express.static()` middleware.

```js
app.use(express.static("public"));
```

Here, `public` is the folder containing static files.

---

## Middleware

Middleware is a function that executes **between the request and response**. It is used to perform tasks before the final route execution.

```js
app.use((req, res, next) => {
    console.log("Middleware executed");
    next();
});
```

- `app.use()` → used to apply middleware.
- `next()` → passes control to the next middleware/route.
- `express.static()` → serves static files.

**Flow:** `Request → Middleware → Route → Response`