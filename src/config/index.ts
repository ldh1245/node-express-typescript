import dotenv from 'dotenv';

const env: string = process.env.NODE_ENV || 'development';

dotenv.config({ path: `.env.${env}` });

type BaseConfig = {
    ENV: string;
    APP_NAME: string;
    HOST: string;
    PORT: number;
};

type Config = {
    [key: string]: string;
};

const baseConfig: BaseConfig = {
    ENV: env,
    APP_NAME: process.env.APP_NAME || 'App',
    HOST: process.env.HOST || '127.0.0.1',
    PORT: Number(process.env.PORT),
};

const envConfig: Record<string, Config> = {
    production: {},
    development: {},
    local: {},
};

export default Object.assign(baseConfig, envConfig);
