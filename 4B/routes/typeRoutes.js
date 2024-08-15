const express = require('express');
const { getAllTypes, createType, updateType, deleteType } = require('../models/typeModel');

const router = express.Router();

// Get all types
router.get('/', async (req, res) => {
  try {
    const types = await getAllTypes();
    res.json(types);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create type
router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const type = await createType(name);
    res.json(type);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update type
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const type = await updateType(id, name);
    res.json(type);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete type
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await deleteType(id);
    res.json({ message: 'Type deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
