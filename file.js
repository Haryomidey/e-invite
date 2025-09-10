import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, 'src', 'assets', 'images');

console.log('Processing directory:', directoryPath);

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    console.log('Files in directory:', files);

    let counter = 1;

    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);

        if (file.startsWith('IMG')) {
            const ext = path.extname(file);
            const newName = `couple-${counter}${ext}`;
            const newPath = path.join(directoryPath, newName);

            fs.rename(filePath, newPath, (err) => {
                if (err) console.error(`Error renaming ${file}:`, err);
                else console.log(`Renamed ${file} -> ${newName}`);
            });

            counter++;
        }

        if (file.endsWith('.avif')) {
            fs.unlink(filePath, (err) => {
                if (err) console.error(`Error deleting ${file}:`, err);
                else console.log(`Deleted ${file}`);
            });
        }
    });
});