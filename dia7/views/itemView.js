function showMenu() {
    console.log("\n=== CRUD en consola con Node.js ===");
    console.log("1. Crear elemento");
    console.log("2. Listar elementos");
    console.log("3. Actualizar elemento");
    console.log("4. Eliminar elemento");
    console.log("5. Salir\n");
}

function listItems(data) {
    console.log("\n📋 Lista de elementos:");
    if (data.length === 0) {
        console.log("No hay elementos registrados.");
    } else {
        data.forEach(item => console.log(`ID: ${item.id} | Nombre: ${item.nombre}`));
    }
}

function showMessage(message) {
    console.log(message);
}

module.exports = { showMenu, listItems, showMessage };
