const tareas = require('../models/tareas');

tareasController = {

    index: function(req, res, next) {
        const miPortada = {
            title: 'the Jungle!',
            descripcion: 'Esto es una descripcion',
        };
        res.render('index', miPortada);
    },

    listar: function (req,res) {


        res.render('tareas',
            {
                titulo: 'Hola EJS!',
                tareas: tareas,
            });
    },
    listarPrioridadAlta: function (req,res) {
        const tareasConPrioridadAlta = tareas.filter( tarea => tarea.prioridad == 'ALTA')
        res.render('tareasAltas',
            {
                tareas: tareasConPrioridadAlta,
            })
    }

}

module.exports = tareasController;
