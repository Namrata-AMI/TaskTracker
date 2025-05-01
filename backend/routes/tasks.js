const router = require('express').Router();

const auth = require('../middleware/authMiddleware.js');
const Task = require('../models/Task.js');



router.post('/', auth, async (req, res) => {
    const task = new Task({ ...req.body });
    await task.save();
    
    res.json(task);
});

router.get('/:projectId', auth, async (req, res) => {
    const projectId = req.params.projectId
    const tasks = await Task.find({ projectId: projectId });

    // console.log(tasks)
    res.json(tasks);
});

router.put('/:taskId', auth, async (req, res) => {
    const taskId = req.params.taskId;
    const task = await Task.findByIdAndUpdate( taskId , req.body, { new: true });

    res.json(task);

});

router.delete('/:taskId', auth, async (req, res) => {
    const taskId = req.params.taskId;

    await Task.findByIdAndDelete(taskId);

    res.json({ message: 'Task deleted' });
});



module.exports = router;