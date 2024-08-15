const express = require('express');
const { getAllHeroes, getHeroById, createHero, updateHero, deleteHero } = require('../models/heroModel');

const router = express.Router();

// Get all heroes
router.get('/', async (req, res) => {
  try {
    const heroes = await getAllHeroes();
    res.json(heroes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get hero by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const hero = await getHeroById(id);
    res.json(hero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create hero
router.post('/', async (req, res) => {
  const { name, type_id, photo, user_id } = req.body;
  try {
    const hero = await createHero(name, type_id, photo, user_id);
    res.json(hero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update hero
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, type_id, photo } = req.body;
  try {
    const hero = await updateHero(id, name, type_id, photo);
    res.json(hero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete hero
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await deleteHero(id);
    res.json({ message: 'Hero deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
