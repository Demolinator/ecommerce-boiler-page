import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(),
"public",
"static",
"data",
"products.json"
);


export function getAll () {
    const data = fs.readFileSync(filePath);
    const products = JSON.parse(data);

}

export function getById (id) {
    const data = getAll();
    return data.find(p => p.id === Number(id));

}