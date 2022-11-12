const fs = require('fs').promises;
const path = require('path');
const exifr = require('exifr')

async function walk(dir) {
    let files = await fs.readdir(dir);
    files = await Promise.all(files.map(async file => {
        const filePath = path.join(dir, file);
        const stats = await fs.stat(filePath);
        // ignore files in @eaDir folder
        if (filePath.includes('@eaDir')) {
            return [];
        }
        if (stats.isDirectory()) return walk(filePath);
        else if (stats.isFile()) return filePath;
    }));

    return files.reduce((all, folderContents) => all.concat(folderContents), []);
}

async function getFiles() {
    let time = Date.now();
    console.log(`┌[log][/api/list]`);
    let files = await walk('./photos');

    console.log(`├ walk: ${Date.now() - time}ms`);
    time = Date.now();

    // filter images
    function isImage(file) {
        let ext = path.extname(file).toLowerCase();
        let extList = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.tif', '.heic'];
        return extList.includes(ext);
    }
    files = files.filter(file => isImage(file));
    // get exif
    files = await Promise.all(files.map(async file => {
        let exif = await exifr.parse(file, true);
        return {
            file,
            exif
        }
    }));

    console.log(`├ exif: ${Date.now() - time}ms`);
    time = Date.now();

    // filter exif
    function withExifModel(exif) {
        return exif?.Model;
    }
    function isScreenshotConfidence(exif) {
        // read exif user comment
        if (new TextDecoder().decode(exif?.userComment).includes('Screenshot')) {
            return true;
        }
        // iPhone 13 Pro / width: 1170 & height: 2532
        if (exif?.ImageWidth === 1170 && exif?.ImageHeight === 2532) {
            return true;
        }
        // iPhone 13 Pro Max / width: 1242 & height: 2688
        if (exif?.ImageWidth === 1242 && exif?.ImageHeight === 2688) {
            return true;
        }
        return false
    }
    files = files
        .filter(({ exif }) => !withExifModel(exif))
        .map(({ file, exif }) => ({ file, selected: isScreenshotConfidence(exif) }))
    console.log(`├ ${files.length} photos`)
    console.log(`└ ${files.filter(({ selected }) => selected).length} screenshots detected`)
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