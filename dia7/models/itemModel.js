const fs = require('fs');
const path = './db.json';

function loadData() {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, "[]");
    }
    const data = fs.readFileSync(path);
    return JSON.parse(data);
}

function saveData(data) {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

module.exports = { loadData, saveData };
