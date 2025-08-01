import express from 'express';
import {
  getPets,
  createPet,
  updatePet,
  deletePet
} from '../controllers/petController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getPets);
router.post('/', auth, createPet);
router.put('/:id', auth, updatePet);
router.delete('/:id', auth, deletePet);

export default router;
