import { readFileSync, writeFileSync } from "node:fs";

function readJSONFile(path, fileName) {
  const collection = readFileSync(`${path}/${fileName}`, "utf8");
  return collection ? JSON.parse(collection) : [];
}

function writeJSONFile(path, fileName, data) {
  data = JSON.stringify(data,0,5);
 return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" });
}

export {
    readJSONFile,
    writeJSONFile,
}
// module.exports = ;