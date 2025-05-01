const router = require('express').Router();
const auth = require('../middleware/authMiddleware.js');

const Project = require('../models/Project.js');



router.post('/', auth, async (req, res) => {
  const count = await Project.countDocuments({ userId: req.userId });

  if (count >= 4){
    return res.status(402).json({ error: 'Max 4 projects allowed' });
  }

  const project = new Project({ userId: req.userId, title: req.body.title });

  console.log(project);

  await project.save();

  res.json(project);

});


router.get('/', auth, async (req, res) => {
  const projects = await Project.find({ userId: req.userId });

  res.json(projects);
});



module.exports = router;