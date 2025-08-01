import Pet from '../models/Pet.js';

export const createPet = async (req, res) => {
  try {
    const { name, type, age, breed } = req.body;
    const user = req.user.id;

    const newPet = new Pet({ user, name, type, age, breed });
    await newPet.save();

    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPets = async (req, res) => {
  try {
    const user = req.user.id;
    const pets = await Pet.find({ user });
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePet = async (req, res) => {
  try {
    const petId = req.params.id;
    const user = req.user.id;

    const pet = await Pet.findOne({ _id: petId, user });
    if (!pet) return res.status(404).json({ message: 'Pet not found' });

    Object.assign(pet, req.body);
    await pet.save();

    res.json(pet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePet = async (req, res) => {
  try {
    const petId = req.params.id;
    const user = req.user.id;

    const pet = await Pet.findOneAndDelete({ _id: petId, user });
    if (!pet) return res.status(404).json({ message: 'Pet not found' });

    res.json({ message: 'Pet deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
