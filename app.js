const express = require('express');
const app = express();
const routes = require('./routes');
const logMiddleware = require('./middlewares/logMiddleware');

// Middleware para logar todas as requisições
app.use(logMiddleware);

app.use(express.json());
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`O server esta funcionando`);
});
