const EventEmitter = require('events');

//Create class
class MyEmitter extends EventEmitter {}

//Init Object
const myEmitter = new MyEmitter();

//Event Listener
myEmitter.on('Event', () => console.log('Event Fired!'));

//Init Event
myEmitter.emit('Event');
myEmitter.emit('Event');
myEmitter.emit('Event');
myEmitter.emit('Event');
