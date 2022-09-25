// BrowserFS.install(window);

BrowserFS.configure({
    fs: "LocalStorage"
}, function (e) {
    if (e) {
        // An error happened!
        throw e;
    }
    console.log("BrowserFS is ready-to-use!")

    const fs = BrowserFS.BFSRequire('fs');
    console.log("🚀 ~ file: index.js ~ line 13 ~ fs", fs)
    let { readdirSync } = fs;
    console.log("🚀 ~ file: index.js ~ line 14 ~ readdirSync", readdirSync)
    // const getDirectories = (source = "./") => readdirSync(source, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name)
    // console.log("🚀  file: index.js  line 10 ~ getDirectories()", getDirectories())
   
});


// import { readdirSync } from 'fs-web';
// const getDirectories = (source = __dirname) => readdirSync(source, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name)
// console.log("🚀  file: index.js  line 10 ~ getDirectories()", getDirectories())