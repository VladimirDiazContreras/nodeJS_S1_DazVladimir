const prompt = require('prompt-sync')();
const { loadData, saveData } = require('../models/itemModel');
const { listItems, showMessage } = require('../views/itemView');

function createItem() {
    let nombre = prompt("Ingresa un nombre: ");
    const id = Date.now();
    const data = loadData();
    data.push({ id, nombre });
    saveData(data);
    showMessage("✅ Elemento agregado correctamente.");
}

function readItems() {
    const data = loadData();
    listItems(data);
}

function updateItem() {
    const data = loadData();
    const id = parseInt(prompt("Ingrese el ID del elemento a actualizar: "));
    const itemIndex = data.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
        let nuevoNombre = prompt("Ingrese el nuevo nombre: ");
        data[itemIndex].nombre = nuevoNombre;
        saveData(data);
        showMessage("✅ Elemento actualizado correctamente.");
    } else {
        showMessage("❌ No se encontró el elemento.");
    }
}

function deleteItem() {
    const data = loadData();
    const id = parseInt(prompt("Ingrese el ID del elemento a eliminar: "));
    const itemIndex = data.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
        const confirm = prompt("¿Seguro que quieres eliminar este elemento? (s/n): ");
        if (confirm.toLowerCase() === 's') {
            data.splice(itemIndex, 1);
            saveData(data);
            showMessage("🗑️ Elemento eliminado correctamente.");
        } else {
            showMessage("❌ Eliminación cancelada.");
        }
    } else {
        showMessage("❌ No se encontró el elemento.");
    }
}

module.exports = { createItem, readItems, updateItem, deleteItem };
