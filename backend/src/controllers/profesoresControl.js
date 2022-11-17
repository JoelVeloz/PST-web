const estControl = {};
const db = require('./database.js');

estControl.getProfesoresCoordinador = (req, res) => res.json(db.profesores.coordinador);
estControl.getProfesoresPractica = (req, res) => res.json(db.profesores.practico);
// estControl.getEstudiantes = (req, res) => res.json(db.estudiantes);
estControl.getProfesores = (req, res) => {
    const profesores = db.practica.find((est) => est.id == req.params.id);
    res.json(profesores);
}

estControl.postProfesores = (req, res) => {
    const { id, nombre, apellido, edad } = req.body;
    if (!id || !nombre || !apellido || !edad) {
        res.status(400).send("Datos incompletos {id, nombre, apellido, edad}");
        return;
    }
    console.log(db)
    const profesoresPractica = db.practica.find((est) => est.id == id)
    if (profesoresPractica) {
        res.status(400).send("Profesor ya existe");
        return;
    }
    const profesores = { id, nombre, edad }
    db.practica.push(profesores);
    db.updateDB();
    res.send('Profesor ingresado con éxito');
}
module.exports = estControl;

estControl.putProfesor = (req, res) => {
    const { nombre, apellido, edad } = req.body;

    if (!nombre || !apellido || !edad) {
        res.status(400).send("Datos incompletos {nombre, apellido, edad}");
        return;
    }
    const profesorEncontrado = db.practica.find((est) => est.id == req.params.id)
    if (!profesorEncontrado) {
        res.status(400).send("Profesor no existe");
        return;
    }
    const profesor = db.practica.find((est) => est.id == req.params.id);
    profesor.nombre = nombre;
    profesor.apellido = apellido;
    db.updateDB();
    res.send('Profesor actualizado');
}


estControl.deleteProfesor = (req, res) => {
    const index = db.practica.findIndex((est) => est.id == req.params.id);
    if (index < 0) {
        res.status(400).send("Id de profesor no encontrado");
        return;
    }
    db.practica.splice(index, 1);
    db.updateDB();
    res.send('Profesor eliminado');
}



module.exports = estControl;
