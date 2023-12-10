import { createRequire } from "module";
import { fileURLToPath } from "url";
import { dirname } from "path";

const require = createRequire(import.meta.url);
const fs = require("fs");
const path = require("path");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
