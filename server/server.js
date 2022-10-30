// importando express app.js
import app from './src/app.js';

// configurando a porta para deploys com express
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});