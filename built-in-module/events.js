const EventEmitter = require("events");

const emitter = new EventEmitter();

// membuat event
emitter.on("greeting", () => {
  console.log("Hello selamat datang");
});

// membuat function untuk listener
const exampleListener = () => {
  console.log("function listener");
};

emitter.on("event", exampleListener);

// event hanya bisa dijalankan sekali
emitter.once("event1", () => {
  console.log("listener 1");
});

// menjalankan event
emitter.emit("greeting");
emitter.emit("event");

// menghapus event
emitter.off("event", exampleListener);

emitter.emit("event");
emitter.emit("event1");
emitter.emit("event1");
