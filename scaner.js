const fs = require('fs').promises;
const path = require('path');
const exifr = require('exifr')
async function walk(dir) {
    let files = await fs.readdir(dir);
    files = await Promise.all(files.map(async file => {
        const filePath = path.join(dir, file);
        const stats = await fs.stat(filePath);
        if (stats.isDirectory()) return walk(filePath);
        else if (stats.isFile()) return filePath;
    }));

    return files.reduce((all, folderContents) => all.concat(folderContents), []);
}

async function getFiles() {
    let files = await walk('./photos');
    // filter images
    function isImage(file) {
        let ext = path.extname(file).toLowerCase();
        let extList = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.tif', '.heic'];
        return extList.includes(ext);
    }
    files = files.filter(file => isImage(file));
    // get exif  
    files = await Promise.all(files.map(async file => {
        let exif = await exifr.parse(file);
        return {
            file,
            exif
        }
    }));
    // filter exif
    function withExifModel(exif) {
        return exif?.Model;
    }
    files = files
        .filter(({ exif }) => !withExifModel(exif))
        .sort((a, b) => {
            let aDate = new Date(a.exif.DateTimeOriginal);
            let bDate = new Date(b.exif.DateTimeOriginal);
            return aDate - bDate;
        })
        .map(({ file }) => file)
    console.log(`[log][/api/list]${files.length} photos`)
    return files;
}
async function delFiles(files) {
    await Promise.all(files.map(file => {
        return fs.unlink(file);
    }));
}
module.exports = {
    getFiles, delFiles
}