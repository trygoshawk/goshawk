'use strict';

var cache_name = 'static';

var urls_to_cache = ['/', '/index.html', '/css/index.css', '/img/logo.png', '/static/imagerandom.svg', '/static/stocks-trend-follow.csv', '/static/stocks-bottom-fishing.csv', '/static/data.csv', '/static/image/random.svg', '/static/image/menu.svg', '/static/ETHUSDT_5m.csv', '/static/imagemenu.svg', '/static/cryptos.csv', '/static/stocks.csv', '/static/app.bundle.js', '/z-worker.js', '/cordova.js', '/cordova_plugins.js', '/plugins/cordova-plugin-file/www/DirectoryReader.js', '/plugins/cordova-plugin-file/www/File.js', '/plugins/cordova-plugin-file/www/Entry.js', '/plugins/cordova-plugin-file/www/FileError.js', '/plugins/cordova-plugin-file/www/FileEntry.js', '/plugins/cordova-plugin-file/www/FileWriter.js', '/plugins/cordova-plugin-file/www/FileUploadResult.js', '/plugins/cordova-plugin-file/www/Flags.js', '/plugins/cordova-plugin-file/www/requestFileSystem.js', '/plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js', '/plugins/cordova-plugin-file/www/fileSystems.js', '/plugins/cordova-plugin-file/www/browser/Preparing.js', '/plugins/cordova-plugin-file/src/browser/FileProxy.js', '/plugins/cordova-plugin-file/www/fileSystemPaths.js', '/plugins/cordova-plugin-file/www/browser/FileSystem.js', '/plugins/cordova-plugin-file/www/DirectoryEntry.js', '/plugins/cordova-plugin-file/www/FileUploadOptions.js', '/plugins/cordova-plugin-file/www/FileSystem.js', '/plugins/cordova-plugin-file/www/LocalFileSystem.js', '/plugins/cordova-plugin-file/www/ProgressEvent.js', '/plugins/cordova-plugin-file/www/Metadata.js', '/plugins/cordova-plugin-file/www/browser/isChrome.js', '/plugins/cordova-plugin-file/www/FileReader.js'];

console.log('sw inside:', self);

self.addEventListener('install', function (e) {
    console.log('sw install:', e);
    e.waitUntil(caches.open(cache_name).then(function (cache) {
        return cache.addAll(urls_to_cache);
    }));
});

self.addEventListener('activate', function (e) {
    console.log('sw activate:', e);
});

self.addEventListener('fetch', function (e) {
    console.log('sw fetch:', e);
    e.respondWith(caches.match(e.request).then(function (response) {
        if (response) {
            return response;
        } else {
            return fetch(e.request);
        }
    }));
});

console.log('sw inside:', self);