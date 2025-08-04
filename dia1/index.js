// crud.js

const { MongoClient, ObjectId } = require('mongodb');
const readline = require('readline-sync');
//require('dotenv').config();

const uri = 'mongodb+srv://vladimir:its8523654@cluster0.fh8arpw.mongodb.net/'; // o desde process.env.MONGO_URI
const client = new MongoClient(uri);
const dbName = 'crud_console';
const collectionName = 'users';

async function main() {
  try {
    await client.connect();
    const db = client.db(dbName);
    const users = db.collection(collectionName);

    let running = true;

    while (running) {
      console.log('\n--- CRUD MENU ---');
      console.log('1. Crear usuario');
      console.log('2. Listar usuarios');
      console.log('3. Actualizar usuario');
      console.log('4. Eliminar usuario');
      console.log('5. Salir');

      const option = readline.question('Selecciona una opción: ');

      switch (option) {
        case '1': {
          const name = readline.question('Nombre: ');
          const email = readline.questionEMail('Email: ');
          await users.insertOne({ name, email });
          console.log('Usuario creado.');
          break;
        }
        case '2': {
          const allUsers = await users.find().toArray();
          console.log('\nUsuarios:');
          allUsers.forEach(user => {
            console.log(`${user._id}: ${user.name} - ${user.email}`);
          });
          break;
        }
        case '3': {
          const id = readline.question('ID del usuario a actualizar: ');
          const name = readline.question('Nuevo nombre: ');
          const email = readline.questionEMail('Nuevo email: ');
          const result = await users.updateOne(
            { _id: new ObjectId(id) },
            { $set: { name, email } }
          );
          console.log(result.modifiedCount ? 'Usuario actualizado.' : 'Usuario no encontrado.');
          break;
        }
        case '4': {
          const id = readline.question('ID del usuario a eliminar: ');
          const result = await users.deleteOne({ _id: new ObjectId(id) });
          console.log(result.deletedCount ? 'Usuario eliminado.' : 'Usuario no encontrado.');
          break;
        }
        case '5': {
          running = false;
          break;
        }
        default:
          console.log('Opción no válida.');
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
