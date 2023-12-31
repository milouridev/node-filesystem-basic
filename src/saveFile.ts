const fs = require("fs");
const path = require("path");

const logModuleDetails = () => {
  console.log(`Module imported from ${__filename}`);
  console.log(`Module located in directory: ${__dirname}`);
};

const saveFile = (
  filename: string,
  content: string,
  directory: string = "out"
) => {
  const filePath = path.join(__dirname, directory, filename);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);

  console.log(`File saved successfully at ${filePath}`);
};

logModuleDetails();

export default saveFile;
