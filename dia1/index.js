const { MongoClient } = require('mongodb');
const readline = require('readline-sync');

const uri = 'mongodb+srv://vladimir:its8523654@cluster0.fh8arpw.mongodb.net/';
const client = new MongoClient(uri);
const dbName = 'campuslands';

// ------------------ FUNCIONES TRAINER ------------------
async function gestionarTrainer(db) {
  const trainers = db.collection('trainers');
  const id = readline.question('Ingresa ID del trainer: ');
  const trainer = await trainers.findOne({ id });

  if (!trainer) {
    console.log('Trainer no encontrado');
    return;
  }

  console.log(`Bienvenido/a ${trainer.nombre} ${trainer.apellido}`);

  let running = true;
  while (running) {
    console.log('\nMenú Trainer:');
    console.log('1. Ver datos');
    console.log('2. Modificar nombre');
    console.log('3. Eliminar trainer');
    console.log('4. Salir');
    const opcion = readline.question('Selecciona una opción: ');

    switch (opcion) {
      case '1':
        console.log(`Nombre: ${trainer.nombre}\nApellido: ${trainer.apellido}\nGrupo: ${trainer.grupo}`);
        break;
      case '2':
        const nuevoNombre = readline.question('Nuevo nombre: ');
        await trainers.updateOne({ _id: trainer._id }, { $set: { nombre: nuevoNombre } });
        trainer.nombre = nuevoNombre;
        console.log('Nombre actualizado');
        break;
      case '3':
        const confirm = readline.question('¿Seguro que quieres eliminar este trainer? (s/n): ');
        if (confirm.toLowerCase() === 's') {
          await trainers.deleteOne({ _id: trainer._id });
          console.log('Trainer eliminado.');
          running = false;
        }
        break;
      case '4':
        running = false;
        break;
      default:
        console.log('Opción inválida');
    }
  }
}

// ------------------ FUNCIONES CAMPER ------------------
async function gestionarCamper(db) {
  const campers = db.collection('campers');
  const id = readline.question('Ingresa ID del camper: ');
  const camper = await campers.findOne({ id });

  if (!camper) {
    console.log('Camper no encontrado');
    return;
  }

  console.log(`Bienvenido/a ${camper.nombre}`);

  let running = true;
  while (running) {
    console.log('\nMenú Camper:');
    console.log('1. Ver riesgo');
    console.log('2. Modificar riesgo');
    console.log('3. Eliminar camper');
    console.log('4. Salir');
    const opcion = readline.question('Selecciona una opción: ');

    switch (opcion) {
      case '1':
        console.log(`Tu nivel de riesgo es: ${camper.riesgo}`);
        break;
      case '2':
        const nuevoRiesgo = readline.question('Nuevo riesgo (alto/medio/bajo): ');
        await campers.updateOne({ _id: camper._id }, { $set: { riesgo: nuevoRiesgo } });
        camper.riesgo = nuevoRiesgo;
        console.log('Riesgo actualizado');
        break;
      case '3':
        const confirm = readline.question('¿Seguro que quieres eliminar este camper? (s/n): ');
        if (confirm.toLowerCase() === 's') {
          await campers.deleteOne({ _id: camper._id });
          console.log('Camper eliminado.');
          running = false;
        }
        break;
      case '4':
        running = false;
        break;
      default:
        console.log('Opción inválida');
    }
  }
}

// ------------------ MÓDULO COORDINADOR ------------------
async function moduloCoordinador(db) {
  const trainers = db.collection('trainers');
  const campers = db.collection('campers');

  console.log('Bienvenido Coordinador');

  let running = true;
  while (running) {
    console.log('\nMenú Coordinador:');
    console.log('1. Ver todos los trainers');
    console.log('2. Ver todos los campers');
    console.log('3. Gestionar un trainer');
    console.log('4. Gestionar un camper');
    console.log('5. Salir');
    const opcion = readline.question('Selecciona una opción: ');

    switch (opcion) {
      case '1':
        const allTrainers = await trainers.find().toArray();
        console.log('\nTrainers:');
        allTrainers.forEach(t => console.log(`${t.nombre} ${t.apellido} (Grupo ${t.grupo})`));
        break;
      case '2':
        const allCampers = await campers.find().toArray();
        console.log('\nCampers:');
        allCampers.forEach(c => console.log(`${c.nombre} - Riesgo: ${c.riesgo}`));
        break;
      case '3':
        await gestionarTrainer(db);
        break;
      case '4':
        await gestionarCamper(db);
        break;
      case '5':
        running = false;
        break;
      default:
        console.log('Opción inválida');
    }
  }
}

// ------------------ MENÚ PRINCIPAL ------------------
async function main() {
  try {
    await client.connect();
    const db = client.db(dbName);
    console.log('Conectado a MongoDB\n');

    let running = true;
    while (running) {
      console.log('\n--- BIENVENIDO A CAMPUSLANDS ---');
      console.log('1. Trainer');
      console.log('2. Camper');
      console.log('3. Coordinador');
      console.log('4. Salir');

      const opt = readline.question('Selecciona un rol: ');

      switch (opt) {
        case '1':
          await gestionarTrainer(db);
          break;
        case '2':
          await gestionarCamper(db);
          break;
        case '3':
          await moduloCoordinador(db);
          break;
        case '4':
          running = false;
          break;
        default:
          console.log('Opción inválida');
      }
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
    console.log('Conexión cerrada.');
  }
}

main();
