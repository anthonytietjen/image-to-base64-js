const fs = require("fs")
const path = require("path")

const main = () => {
    const fileName = process.argv[2];
    const fileExt = path.extname(fileName);

    if(fileExt.toLowerCase() !== ".png"){
        console.log("Only png is supported currently.")
        process.exit(1);
    }

    const fileContents = fs.readFileSync(fileName);
    const data = Buffer.from(fileContents).toString("base64");
    const output = `module.exports="data:image/png;base64,${data}";`
    fs.writeFileSync(fileName.replace(fileExt, ".js"), output);
}

main()