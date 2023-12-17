const fs = require("fs");

// readfile (sinkronus)
console.log("read sync");
const readSync = fs.readFileSync("built-in-module/test-sync.txt", "utf-8");

// readFile (callback)
fs.readFile("built-in-module/test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("read using callback");
  console.log(data);
});

console.log(readSync);

const fsPromise = require("fs/promises");

// readfile promise
console.log("read promises");
// menggunakan promise
fsPromise.readFile("built-in-module/test-promise.txt", "utf-8").then((data) => {
  console.log(data);
});

// menggunakan async await
async function readAsync() {
  const result = await fsPromise.readFile(
    "built-in-module/test-promise.txt",
    "utf-8"
  );

  return result;
}

// call function
readAsync();

// writeFile
fs.writeFile("built-in-module/test.txt", "ini baris baru", (err) => {
  err && console.log(err);
});

fs.writeFileSync("built-in-module/test.txt", "ini baris baru sync");

// appendFile
fsPromise.appendFile("built-in-module/test.txt", "baris baru");

// delete file
// fsPromise.unlink("built-in-module/test.txt").catch((err) => console.log(err));
