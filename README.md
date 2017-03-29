# Todo list server

The purpose of this is to create a server that will create, read, update and, delete todos. If you want to use `fs.readFile` and `fs.writeFile`, you are more than welcome to so your changes to `todos.json` will persist after you restart the server OR you can just require the `todos.json` file. Either way is fine. I HIGHLY recommend you use the [ExpressJS Documentation](https://expressjs.com/en/starter/basic-routing.html) to help yourself along if you get stuck, too. It is extremely helpful.

## Getting Started
Things to do:
```
npm init -y
npm install --save express body-parser
```
- Require both `express` and `body-parser` at the top of `server.js`.
- Instantiate the server by assigning `express()` to a variable.
- Add `app.use(bodyParser.json())` to make sure that `req.body` will parse correctly.

## Goal

Create a server that allows you to add and retrieve one or all todos using Postman.

## Stretch

Add the ability to update and delete individual todos using Postman.

## Stretch

Add a front end to it that will let you both add and remove todos. Create a folder called "public" in your root
directory and add index.html to it. HINT: Look up how to use "express.static"
in the ExpressJS documentation.

## Stretch

Add the ability to edit the todos on the front end.

## Last stretch

Add some style using Bootstrap or Materialize or a CSS library like that.
