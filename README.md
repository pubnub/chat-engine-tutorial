This repository is a part of the [ChatEngine Framework](https://github.com/pubnub/chat-engine).
For more information on building chat applications with PubNub, see our
[Chat Resource Center](http://www.pubnub.com/developers/chat-resource-center/).

# PubNub ChatEngine Tutorial

Hey there and welcome to the PubNub ChatEngine tutorial. Today we'll be walking through the steps to build a super charged chat application with PubNub ChatEngine.

## What is PubNub ChatEngine

The PubNub ChatEngine is a new Javascript framework that sits on top of the PubNub SDK. PubNub data stream network for creating applications. PubNub ChatEngine wraps those tools into handy features made especially for chat applications.

## What is PubNub?

PubNub is a global data stream network that helps anybody create real time applications. PubNub makes it easy for one computer to talk to another, which is the basis for the chat!

---

# Set up tutorial with index.html, bootstrap, jQuery

Let's get started. In this tutorial, we'll be using:

- NodeJS
- Twitter Bootstrap
- jQuery
- PubNub ChatEngine

If you're not familiar with these, don't worry. They'll be helpful links along
the way.

## Install NodeJS

"Hey, I thought we were building a front end app!?" We are, but if you haven't been keeping up to date, you might not have noticed that NodeJS has become the go-to option for working with javascript packages.

In this tutorial, I'll be using NodeJS v6.11 which is the latest version as of this time of writing.

If you're using NVM (Node Version Manager), you can install this version by running:

```
nvm install v6.11
```

If you need help installing NodeJS, check out [this handy list of guides for every OS](https://nodejs.org/en/download/package-manager/).

You can verify that you're running the correct version of NodeJS with by running:

```
node -v
```

## Create a new NPM project

Since we'll be installing dependencies, it's helpful to create a new ```package.json``` to keep track of all of the packages we're going to install.

In your project directory, run this command to create a new package. Complete the interactive set up guide and we'll be ready to go.

```
npm init
```

That'll create a ```package.json``` in your project directory.

```json
{
  "name": "chat-engine-tutorial",
  "version": "0.0.1",
  "description": "An example PubNub ChatEngine Tutorial",
  "main": "index.js",
  "author": "Ian Jennings"
}

```

## Install Twitter Bootstrap

Twitter Bootstrap will make it easy for us to create user interface elements for our chat application.

In fact, when using PubNub ChatEngine, creating the UI and hooking it up to the framework is about all you have to do.

We'll use bootstrap 3 since it's the latest stable version. You can install it using npm by running:

```
npm install bootstrap@3 --save
```

## Install jQuery

jQuery will provide us with some simple utilities for Javascript that will make programming our chat application easier. You can install it using npm by running:

```sh
npm install jquery --save
```

> You don't have to use jQuery with PubNub ChatEngine. We could use Angular, React, or just vanilla Javascript. The [Chat Engine Examples](https://github.com/pubnub/chat-engine-examples) page has examples for these other frameworks.

## Install PubNub ChatEngine

Alright, now for the part you've probably never done before! Install PubNub ChatEngine by running:

```sh
npm install chat-engine@0.8.4 --save
```

This will install the PubNub ChatEngine Javascript SDK into your ```node_modules``` directory.

## Install http-server globally

Finally, we need a way to run our app. Sure, we could just load them with the ```file://``` protocol, but that creates all sorts of security issues and problems in the future. It's better to start with ```localhost```.

Install ```http-server``` globally using npm:

```sh
npm install http-server -g
```

This allows us to run a small http server on ```localhost``` that will serve our files properly.

# Build an example page and load dependencies

Alright, now it's time for the fun stuff. Let's create an example page.

Create a new page called ```index.html``` and paste the following page in. It will load the CSS, JS, and there's even a small script to test that all the libraries have been loaded.

```html
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="node_modules/bootstrap/dist/css/bootstrap.css" />
  </head>
  <body>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1>Does it work?</h1>
                <div class="alert alert-info">Let's find out.</div>
            </div>
        </div>
    </div>
    <script src="node_modules/jquery/dist/jquery.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.js"></script>
    <script src="node_modules/chat-engine/dist/chat-engine.js"></script>
    <script>
    if(typeof $ == "undefined") {
      alert('Failed to load jQuery!');
    }
    if(typeof ChatEngineCore == "undefined") {
      alert('Failed to load PubNub ChatEngine');
    }
    if($ && ChatEngineCore) {
      alert('It works!');
    }
    </script>
  </body>
</html>
```

Once you've pasted this code, run the ```http-server``` command in your terminal and load the webpage in your browser.

```sh
http-server
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.0.8:8080
Hit CTRL-C to stop the server
```

Load http://127.0.0.1:8080 in your browser and see if the webpage looks like this screenshot:

![](assets/README-988df6e2.png)

If you get an error alert, make sure you ran all the previous setup instructions properly. If the design does not look correct, make sure you installed the correct version of Twitter Bootstrap.

---

## Configure PubNub keys and how to get them

Update ```index.html``` to look like this:

```html
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="node_modules/bootstrap/dist/css/bootstrap.css" />
  </head>
  <body>
    <div class="container">
    </div>
    <script src="node_modules/jquery/dist/jquery.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.js"></script>
    <script src="node_modules/chat-engine/dist/chat-engine.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```

Create a new file called ```app.js``` in the local directory.

In ```app.js``` , add the following:

```js
console.log(ChatEngineCore);
```

Now we're all set up to create an app!

# Me / Connect / Configure

In ```app.js``` add the following lines:

```js
const ChatEngine = ChatEngineCore.create({
    publishKey: 'YOUR_PUB_KEY',
    subscribeKey: 'YOUR_SUB_KEY'
});
```

This is the PubNub ChatEngine initialization. All you need to supply is the first parameter; a set of PubNub publish and subscribe keys.

> This parameter is actually a PubNub initialization. You can read more about all possible parameters [here](https://www.pubnub.com/docs/web-javascript/api-reference#init)

> When using PubNub ChatEngine with the ```<script>``` tag, you can get the package from ```window.ChatEngineCore```.

> You can use the NodeJS package with [WebPack](https://webpack.github.io/) and ```require``` as well.

> See that ```const``` declaration? This tutorial (and PubNub ChatEngine) are in
[es6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla).

## How to Get Your PubNub Keys

Run the setup app. Insert link here.

## Start the ChatEngine

In ```app.js```, add the line:

```js
let me = ChatEngine.connect('ian');
```

The function returns a ```User``` and connects to a global ```Chat```. The parameter ```ian``` is a unique identifier for the new ```User```. This connects to the PubNub Data Stream network on behalf of the browser running the code.

### ChatEngine.connect()

This starts the SDK and fires an event called ```$.ready```. Always wait for the ```$.ready``` event before working with ChatEngine.

```js
ChatEngine.on('$.ready', (data) => {
    let me = data.me;
});
```

PubNub ChatEngine is an object-oriented framework, so when you see ```User``` and ```Chat```, it represents an actual object within the SDK.

- ***User*** - A client who is also connected to ChatEngine.
- ***Me*** - A **User** that represents this browser window.
- ***Chat*** - A chatroom that a ```User``` can join.

### Me

The ```User``` returned by the ```connect()``` method represents this browser window. We call that ```User``` ```Me```.

## Chats

But what about chat rooms?

In ```app.js```, add the following:

```js
let chat = new ChatEngine.Chat('tutorial-chat');
```

This creates a new ```Chat``` object. The ```Chat``` object represents a chatroom that connects one client to another.

The ```Chat``` state is synchronized between all connected clients. When this client runs ```new ChatEngine.Chat()```, it connects to the PubNub network and gets information about that chat room.

For example, ```chat.users``` contains a list of all the other ```User```s online in the chat. That list of users will update automatically.

The client (```me```) joins ```Chat```s automatically when they are created on the client.

> Remember, those other ```User```s are ```me``` on someone else's computer. A real practice in empathy.

### See who else is online

A list of all the clients who have joined the chatroom is available from ```chat.users```.

```js
console.log(chat.users);
```

It returns a list of ```Users``` who have also joined this chat.

```js
{
  ian: {},
  nick: {}
}
```

When a new ```User``` comes online, the ```Chat``` emits the ```$.online.join``` event.

```js
chat.on('$.online.join', (newUser) -> {
  console.log('new user', newUser);
});
```

If a ```User``` is already online when you join a chat, the ```Chat``` emits the ```$.online.here``` event.

```js
chat.on('$.online.here', (newUser) -> {
  console.log('new user', newUser);
});
```

ChatEngine specific events begin with ```$```.

For example, you can find out when you're connected to a ```Chat``` by subscribing to ```Chat.on('$.connected')```.

## Working with Chats and Users in jQuery

Let's combine the information above into a small app that logs when you and other users come online.

![](assets/README-c71c143b.png)

First, we'll create a function to log messages into HTML.

Add the following to the ```<body>``` of ```index.html``` to build a place-holder for our log.

```html
<div class="container">
  <div class="row">
      <div class="col-sm-6 col-sm-offset-3">
        <div class="list-group" id="log">
        </div>
      </div>
  </div>
</div>
```

Next, we'll create a function that adds  ```username: text``` as a line in the log.

```js
const appendMessage = (username, text) => {

  let message =
    $(`<div class="list-group-item" />`)
      .append($('<strong>').text(username + ': '))
      .append($('<span>').text(text));

  $('#log').append(message);

  $("#log").animate({ scrollTop: $('#log').prop("scrollHeight") }, "slow");

};
```

Then, listen for the ```$.ready``` event to find out when the client is connected to the ```Chat```.

```js
chat.on('$.connected', (payload) => {
  appendMessage('Status', 'Connected to chat!');
});
```

We can also subscribe to the ```$.online.*``` event to find out when other ```User```s are online.

```js
chat.on('$.online.*', (payload) => {
  appendMessage('Status', payload.sender.uuid + ' has come online!');
});
```

The ```*``` syntax matches all online events, including ```$.online.join``` and ```$.online.here```.

You should see a message showing that ```ian``` has come online and that connection has been established.

![](assets/README-c71c143b.png)

# Chat room event overview and how it works

But what about custom messages? The life-blood of chat! Custom messages sent by each user.

Let's define a custom event so we can send and receive text messages between windows.

## Broadcasting Events

First, let's ```emit()``` a simple text string as a ```message``` event over the ```Chat```.

```js
chat.emit('message', 'Hey, this is Ian!');
```

This will broadcast the ```message``` event over the internet to all other clients.

## Subscribing to Events

You can subscribe to custom events by supplying an event name as the first parameter in ```on()````.

```js
chat.on('message', (payload) => {
  appendMessage(payload.sender.uuid, payload.data);
});
```

Anytime you or any other client uses the ```emit()``` function with the same event name, it will fire the callback defined in ```on()``` on every client subscribed to it.

## Event Payload

Notice how we use ```payload.sender.uuid``` and ```payload.data``` in the callback?

The ```payload``` value is automagically populated with handy references to the ```Chat``` and ```User``` related to this event.

The property ```payload.chat``` is the ```Chat``` that event was broadcast on and the ```payload.sender``` is the ```User ``` that broadcast the message. You can find the actual message contents supplied to ```emit()``` within the ```payload.data``` property.

> The ```User``` and ```Chat``` properties are both fully interactive instances. Therefore, you can do things like ```payload.chat.emit('message')``` to automatically reply to a message.

## Adding a Textbox

Let's build a textbox that will let us send our own message.

We'll add this line under the ```#log``` container.

```html
<input type="text" class="form-control" id="message" placeholder="Your message here...">
```

And then wrap the ```chat.emit()``` code in a jQuery function.

```js
$("#message").keypress(function(event) {

    if (event.which == 13) {
        chat.emit('message', $("#message").val());
        $("#message").val('');
        event.preventDefault();
    }

});
```

This function fires every time a key is pressed on the message input text area.

If the key is ```13``` (Enter or Return), we use ```chat.emit()``` to broadcast the value of the text input to all other clients.

The text input is then cleared and we user ```event.preventDefault()``` to prevent the enter or return key from bubbling (allowing other things to happen).

## Send a Message

Now, when you type in the message input and hit "Enter", the message is sent over the network to all other machines!

Try it with two browsers!

![](assets/README-316b8bd1.gif)

But hey, it looks like every message is sent by "ian". Shouldn't different browsers have different names? How do we differentiate between clients?

## Add Usernames and State

In order to give every user a unique name, let's create a function that returns a random animal.

```js
const getUsername = () => {
  const animals = ['zebra', 'goat', 'cow', 'pig', 'tiger', 'wolf', 'pony', 'antelope'];
  return animals[Math.floor(Math.random() * animals.length)];
};
```

We can call ```getUsername()``` to get a random animal name. This will be our new username.

Remember when we defined ```me``` and supplied ```ian``` as the first parameter of ```ChatEngine.connect()```? Well, we can supply whatever we want to use as the ```User``` identifier there. Let's use our new function!

```js
let me = ChatEngine.connect(getUsername());
```

Now every time we load the page, we'll have a different username.

![](assets/README-98498584.png)

But what if we want to add other information? Like a profile? Let's give each ```User``` a unique username color.

```js
const getColor = () => {
  const colors =   ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Teal"];
  return colors[Math.floor(Math.random() * colors.length)];
};
```

We'll edit the ```connect()``` function again, but this time we're going to use the second parameter.

```js
let me = ChatEngine.connect(getUsername(), {color: getColor()});
```

This parameter represents the ```User``` state.

Now when a user comes online, you can get their color from ```payload.sender.state.color```.

```js
chat.on('$.online.here', (payload) => {
  appendMessage('Status', payload.user.uuid + ' is in the channel! Their color is ' + payload.user.state.color + '.');
});

chat.on('$.online.join', (payload) => {
  appendMessage('Status', payload.user.uuid + ' has come online! Their color is ' + payload.user.state.color + '.');
});
```

## Support
- If you **need help**, have a **general question**, have a **feature request** or to file a **bug**, contact <support@pubnub.com>. 
