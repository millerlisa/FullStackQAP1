// Task #1
const EventEmitter = require("events");
const fs = require("fs");
const moment = require("moment");

console.log("Learning Node.js");

// Node events
// source: https://medium.com/@diego.coder/events-in-node-js-76fbe1b6cdad
// Here are the key points about Node.js events:
// EventEmitter Class: Much of the Node.js core API revolves around an event-driven model.  Objects (called “emitters”) emit named events that trigger functions (called “listeners”).
// For example, a net.Server object emits an event when a peer connects to it, and a fs.ReadStream emits an event when a file is opened.
// All objects that emit events are instances of the EventEmitter class. You can attach one or more functions to named events using the eventEmitter.on() method.
// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Define a listener function for the 'myEvent' event
const myEventListener = () => {
  console.log("My event was triggered!");
};

// Attach the listener function to the 'myEvent' event
myEmitter.on("myEvent", myEventListener);

// Emit the 'myEvent' event
myEmitter.emit("myEvent");

// Node.js console
// Node.js console module is a global object that provides a simple debugging console similar to JavaScript to display different levels of message. It is provided by web browsers. The console module contains two components: Console class: The console class methods are console.log(), console.error() and console.warn() to display Node.js stream. global console: It is used without calling require(‘console’).
// Above, you will find two examples of the console method. And below are two more. You can see them all in the terminal.
// Demonstrate console.log
console.log("This is a log message");

// Demonstrate console.error
console.error("This is an error message");

// Node.js file system
// The Node.js file system module allows you to work with files on your computer. It provides methods for creating, reading, updating, and deleting files. To use the fs module, you need to import it into your Node.js application using require('fs').
// Read a file (this file does not exist yet so it will throw an error, I am commentiing out for now to avoid the error)
// fs.readFile("file.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// Write to a file
fs.writeFile("file.txt", "Hello, World!", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File written successfully.");
});

// Append to a file
fs.appendFile("file.txt", " New content", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Content appended successfully.");
});

// Delete a file
fs.unlink("file.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File deleted successfully.");
});

// Task #2
// moment package installed using npm in the terminal
// Used setTimeout with a delay of 1 second so the current date and time is last thing logged to the terminal.
setTimeout(() => {
  const currentTime = moment().format("YYYY-MM-DD HH:mm:ss");

  // Log the current date and time to the terminal
  console.log("Current date and time:", currentTime);
}, 1000);

// Task #3
// Saved to gihub repository and submitted the link to the assignment portal.
