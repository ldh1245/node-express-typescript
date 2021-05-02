import config from 'config';
import { Router } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import memberRouter from './member';

const { HOST, PORT } = config;

const apiRouter = Router();

apiRouter.use('/members', memberRouter);

apiRouter.use(
    '/swagger-apis',
    swaggerUi.serve,
    swaggerUi.setup(
        swaggerJSDoc({
            swaggerDefinition: {
                info: {
                    title: 'My Api',
                    description: 'My Api',
                    version: '1.0.0',
                },
                host: `${HOST}:${PORT}`,
                basePath: '/v1',
            },
            apis: ['./src/api/v1/**/*.spec.yaml'],
        }),
    ),
);

export default apiRouter;
