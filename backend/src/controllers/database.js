const fs = require('fs');
const db = {};

let PST = {};
function init() {
    try {
        //Intenta cargar el archivo JSON
        const json_text_PST = fs.readFileSync('./src/pstDatabase.json', 'utf-8')
        PST = JSON.parse(json_text_PST) //Transforma un String a objeto JSON
        // IMPRIMIR VARIABLE PST 
        // console.log(PST);
    } catch (e) {
        //Si no existe, crea el objeto JSON y lo guarda en un archivo .json
        PST = {
            estudiantes: [
                { nombre: 'Joel', id: 202008066 },
                { nombre: 'Joel2', id: 202008067 }
            ],
            profesores: {
                coordinador: { nombre: "Msig. Adriana Collaguazo", edad: 20 },
                practico: [
                    { nombre: "Ing. Christopher Vaccaro", edad: 28 },
                    { nombre: "Ing. Steven Santillan", edad: 26 },
                    { nombre: "Ing. Ignacio Marin", edad: 20 }
                ]
            }
        }
        
        //Transforma un objeto JSON a String y lo guarda en un archivo
        fs.writeFileSync('./src/pstDatabase.json', JSON.stringify(PST), 'utf-8');
    }
    //se crean variables para acceder a ciertos atributos
    db.coordinador = PST.profesores.coordinador;
    db.practica = PST.profesores.practico;
    db.profesores = PST.profesores;
    db.estudiantes = PST.estudiantes;
}
function updateDB() {
    //actualiza el archivo JSON
    fs.writeFileSync('./src/pstDatabase.json', JSON.stringify(PST), 'utf-8');
}

db.init = init;
db.updateDB = updateDB;

module.exports = db;
