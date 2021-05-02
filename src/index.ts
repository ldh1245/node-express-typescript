import config from './config';
import app from './app';
import { logger } from './utils/logger';

const { HOST, PORT } = config;

app.listen(PORT, () => {
    logger.info(`Server running at ${HOST}:${PORT}`);
});
