const fs = require('fs');
const path = require('path');
const usersFile = path.join(__dirname, '../data/users.json');

class AuthController {
  async registerUser(req, res) {
    const { email, password } = req.body;

    try {
      const users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));
      if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: 'User already exists' });
      }
      users.push({ email, password }); // In production, hash the password!
      fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  }

  async loginUser(req, res) {
    const { email, password } = req.body;

    try {
      const users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));
      const user = users.find(u => u.email === email && u.password === password);
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      // For demo, just return a dummy token
      res.status(200).json({ token: 'dummy-token' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  }
}

module.exports = AuthController;