const { Router } = require('express');
const router = Router();

const {
    getProfesoresPractica,
    getProfesoresCoordinador,
    postProfesores,
    putProfesor,
    deleteProfesor
} = require('../controllers/profesoresControl.js');

router.route('/practica')
    .get(getProfesoresPractica)
    .post(postProfesores)

router.route('/practica/:id')
    .put(putProfesor)
    .delete(deleteProfesor);


router.route('/coordinador').get(getProfesoresCoordinador)

module.exports = router
