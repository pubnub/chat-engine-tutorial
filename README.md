# PubNub Chat Engine Tutorial

Hey there and welcome to the PubNub Chat Engine tutorial. Today we'll be walking through the steps to build a super charged chat application
with PubNub Chat Engine.

## What is PubNub Chat Engine

The PubNub Chat Engine is a new Javascript framework that sits on top of the PubNub SDK. The PubNub JS SDK is a low level toolset for creating realtime Javascript applications. PubNub Chat Engine wraps those tools into handy features made especially for chat applications.

## What is PubNub?

PubNub is a global data stream network that helps anybody create real time applications. PubNub makes it easy for one computer to talk to another, which is the basis for chat!

---

# Set up tutorial with index.html, bootstrap, jQuery

Let's get started. In this tutorial, we'll be using:

- NodeJS
- Twitter Bootstrap
- jQuery
- PubNub Chat Engine

If you're not familiar with these, don't worry. They'll be helpful links along
the way.

## Install NodeJS

"Hey, I thought we were building a front end app!?"" We are, but if you haven't been keeping up to date, you might not have noticed that NodeJS has become the go-to option for working with javascript packages.

In this tutorial I'll be using NodeJS v6.11 which is the latest version as of this time of writing.

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

That'll create a ```package.json``` in your poject directory.

```json
{
  "name": "chat-engine-tutorial",
  "version": "0.0.1",
  "description": "An example PubNub Chat Engine Tutorial",
  "main": "index.js",
  "author": "Ian Jennings"
}

```

## Install Twitter Bootstrap

Twitter Bootstrap will make it easy for us to create user interface elements for our chat application.

In fact, when using PubNub Chat Engine, creating the UI and hooking it up to the framework is about all you have to do.

We'll use bootstrap 3 since it's the latest stable version. You can install it using npm by running:

```
npm install bootstrap@3 --save
```

## Install jQuery

jQuery will provide us with some simple utilities for Javascript that will make programming our chat application easier. You can install it using npm by running:

```sh
npm install jquery --save
```

You don't have to use jQuery with PubNub Chat Engine. We could use Angular, React, or just vanilla Javscript. The [Chat Engine Examples](https://github.com/pubnub/chat-engine-examples) page has examples for these other frameworks.

## Install PubNub Chat Engine

Alright, now for the part you've probably never done before! Install PubNub Chat Engine by running:

```sh
npm install chat-engine@0.2.1 --save
```

This will install the PubNub Chat Engine Javascript SDK into your ```node_modules``` directory.

## Install http-server globally

Finally, we need a way to run our app. Sure, we could just load them with the ```file://``` protocol, but that creates all sorts of security issues and problems in the future. It's better to start with ```localhost```.

Install ```http-server``` globally using npm:

```sh
npm install http-server -g
```

This allows us to run a small http server on ```localhost``` that will serve our files properly.

# Build an example page and load dependencies

Alright, now it's time for the fun stuff.

## Configure PubNub keys and how to get them



# Me / Connect
# Chat room event overview and how it works
# Build a chat room
# See who's online in the room (remember me?)
# Send a user a private message
# See when a user does something somewhere else
# Get the history of a room
# Make another event type (add an image via a url)
# Add a plugin
# Make your own plugin
