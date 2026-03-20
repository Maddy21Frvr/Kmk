const express = require('express');
const path = require('path');
const app = express();

const ROOT = process.cwd();

app.use(express.static(ROOT));

app.get('*', (req, res) => {
  res.sendFile(path.join(ROOT, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`KollyMaja running on port ${PORT}`));
