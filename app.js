const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
const routes = require('./routes/routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes.all('*', (req, res) =>
  res.status(404).json({ message: 'That route does not exist!' })
);
app.use(routes);

app.listen(PORT, () => {
  console.log(`Running on port: http://localhost:${PORT}`);
});
