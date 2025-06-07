const dotenv = require('dotenv');
const path = require('path');

const ENV = process.env.ENV || 'development';
const envPath = `.env${ENV === 'development' ? '' : `.${ENV}`}`;
dotenv.config({ path: path.resolve(process.cwd(), envPath) });
