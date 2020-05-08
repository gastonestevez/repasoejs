const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareasController');
const contactsController  = require('../controllers/contactsController');

/* RUTAS POR GET */
router.get('/', tareasController.index );
router.get('/tareas', tareasController.listar);
router.get('/tareasAltas',tareasController.listarPrioridadAlta);

router.get('/contactos', contactsController.show);



module.exports = router;
