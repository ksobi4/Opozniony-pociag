import express, { Router } from 'express';
import logger from './utils/logger';
import routes from './routes';

const PORT =  process.env.PORT || 3005;

const app = express();

app.use(express.json());

async function main() {
  await app.listen(PORT)
  await routes(app);
  logger.info(`App is running at http://localhost:${PORT} `);
  
}

main();