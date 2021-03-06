const fs = require("fs")
const path = require("path")

const main = () => {
    const fileName = process.argv[2];
    const fileExt = path.extname(fileName);
    const fileContents = fs.readFileSync(fileName);
    const data = Buffer.from(fileContents).toString("base64");
    const output = `module.exports="data:image/png;base64,${data}";`
    fs.writeFileSync(fileName.replace(fileExt, ".js"), output);
}

main()