const jwt = require('jsonwebtoken');

const login = (req, res) => {
  const { username, password } = req.body;

 
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ message: 'Login successful', token });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
};

const protected = (req, res) => {
  res.json({ message: 'Access to protected route granted!', user: req.user });
};

module.exports = { login, protected };
