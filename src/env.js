import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

export default {
    port: process.env.PORT,
    dbUrl: process.env.DB_URL,
    pingSchedule: process.env.SCHEDULE,
}