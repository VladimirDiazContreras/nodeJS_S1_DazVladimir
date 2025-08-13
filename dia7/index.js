const prompt = require('prompt-sync')();
const { showMenu } = require('./views/itemView');
const { createItem, readItems, updateItem, deleteItem } = require('./controllers/itemController');

let running = true;

while (running) {
    showMenu();
    let opcion = prompt("Selecciona una opción: ");

    switch (opcion) {
        case "1":
            createItem();
            break;
        case "2":
            readItems();
            break;
        case "3":
            updateItem();
            break;
        case "4":
            deleteItem();
            break;
        case "5":
            running = false;
            console.log("👋 Saliendo del programa...");
            break;
        default:
            console.log("Opción inválida.");
    }
}
