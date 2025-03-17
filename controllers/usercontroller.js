const { v4: uuidv4 } = require('uuid');
const users = []; // In-memory storage for users

// Create a new user
const createUser = (req, res) => {
  const { name, email, age } = req.body;

  // Input validation
  if (!name || !email || !age) {
    return res.status(400).json({ error: 'Name, email, and age are required' });
  }

  const newUser = {
    id: uuidv4(),
    name,
    email,
    age,
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

// Get all users
const getAllUsers = (req, res) => {
  res.status(200).json(users);
};

// Get a single user by ID
const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json(user);
};

// Update a user by ID
const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (name) user.name = name;
  if (email) user.email = email;
  if (age) user.age = age;

  res.status(200).json(user);
};

// Delete a user by ID
const deleteUser = (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  users.splice(userIndex, 1);
  res.status(204).send();
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};