const {Router} = require('express')
const Todo = require('../models/todo')
const router = Router()

// Получение списка задач
router.get('/', (req, res) => {
    try {
        
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error'
        })
    }
})

// Добавление задачи
router.post('/', async (req, res) => {
    try {
        console.log(req);
        const todo = await Todo.create({
            title: req.body.title,
            done: false,
        })

        res.status(201).json({todo})
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error'
        })
    }
})

// Изменение статуса задачи
router.put('/:id', (req, res) => {
    try {
        
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error'
        })
    }
})

// Удаление задачи
router.delete('/:id', (req, res) => {
    try {
        
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error'
        })
    }
})

module.exports = router