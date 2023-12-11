const saveFile = require("./saveFile");

const main = () => {
  console.log("Program started");
  saveFile("example.txt", "Example content");
};

main();
