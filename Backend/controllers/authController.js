export const login = (req, res) => {
  const { username } = req.body;
  res.status(200).json({ message: 'Logged in', username });
};


