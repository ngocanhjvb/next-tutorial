import fs from 'fs';
import path from 'path';


export const getBooks = () => {
    const booksDir = path.join(process.cwd(), 'books');
    const bookFileNames = fs.readdirSync(booksDir);
    return bookFileNames.map(bookFileName => {
        const fullBookPath = path.join(booksDir, bookFileName)
        const bookContent = fs.readFileSync(fullBookPath, 'utf8')

        return {
            bookName: bookFileName.replace(/\.txt$/, ''),
            bookContent
        }
    })
};