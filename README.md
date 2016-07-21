# Chat Technique

Libraries used : 

* [AngularJS](http://angularjs.org)
* [NodeJS](http://nodejs.org)
* [Socket.IO and Socket.IO Client](http://socket.io) 
* [Angular Socket IO client](https://github.com/btford/angular-socket-io)

## Installation

* Run npm install (in / and /angular-frontend)
* Run bower install (in /angular-frontend)

## Runtime instructions

I have the root `app.js` node script pointing to serve / as the content
in /angular-frontend/app/ - you can construct and build and minify with
`grunt --force` in the `angular-frontend` directory. This will set the
content in `/public` to the minified version of the application and you
can serve that by editing `app.js`.

To launch the app and run in development mode: 

```bash
node app.js
```

Browse to `http://localhost:3000` and you should see the chat.
