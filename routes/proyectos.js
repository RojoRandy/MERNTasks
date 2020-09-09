const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
const {check} = require('express-validator');

// Crea un usuario
// api/proyectos
router.post('/',
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.crearProyecto
)

// Obtener todos los proyectos
// api/proyectos
router.get('/',
    auth,
    proyectoController.obtenerProyectos
)

//Actualizar proyecto via ID
// api/proyectos
router.put('/:id',
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.actualizarProyecto
)

// Eliminar un proyecto via ID
// api/proyectos
router.delete('/:id',
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.eliminarProyecto
)



module.exports = router;