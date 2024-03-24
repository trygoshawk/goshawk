/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "static/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sw.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/sw.js":
/*!*******************!*\
  !*** ./src/sw.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar cache_name = 'static';\n\nvar urls_to_cache = ['/', '/index.html', '/css/index.css', '/img/logo.png', '/static/imagerandom.svg', '/static/bundle.js', '/static/stocks-trend-follow.csv', '/static/stocks-bottom-fishing.csv', '/static/data.csv', '/static/image/random.svg', '/static/image/menu.svg', '/static/ETHUSDT_5m.csv', '/static/imagemenu.svg', '/static/cryptos.csv', '/static/stocks.csv', '/z-worker.js', '/cordova.js', '/static/app.bundle.js', '/static/sw.bundle.js', '/cordova_plugins.js', '/plugins/cordova-plugin-file/www/DirectoryReader.js', '/plugins/cordova-plugin-file/www/File.js', '/plugins/cordova-plugin-file/www/Entry.js', '/plugins/cordova-plugin-file/www/FileError.js', '/plugins/cordova-plugin-file/www/FileEntry.js', '/plugins/cordova-plugin-file/www/FileWriter.js', '/plugins/cordova-plugin-file/www/FileUploadResult.js', '/plugins/cordova-plugin-file/www/Flags.js', '/plugins/cordova-plugin-file/www/requestFileSystem.js', '/plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js', '/plugins/cordova-plugin-file/www/fileSystems.js', '/plugins/cordova-plugin-file/www/browser/Preparing.js', '/plugins/cordova-plugin-file/src/browser/FileProxy.js', '/plugins/cordova-plugin-file/www/fileSystemPaths.js', '/plugins/cordova-plugin-file/www/browser/FileSystem.js', '/plugins/cordova-plugin-file/www/DirectoryEntry.js', '/plugins/cordova-plugin-file/www/FileUploadOptions.js', '/plugins/cordova-plugin-file/www/FileSystem.js', '/plugins/cordova-plugin-file/www/LocalFileSystem.js', '/plugins/cordova-plugin-file/www/ProgressEvent.js', '/plugins/cordova-plugin-file/www/Metadata.js', '/plugins/cordova-plugin-file/www/browser/isChrome.js', '/plugins/cordova-plugin-file/www/FileReader.js'];\n\nself.addEventListener('install', function (e) {\n    e.waitUntil(caches.open(cache_name).then(function (cache) {\n        return cache.addAll(urls_to_cache);\n    }));\n});\n\nself.addEventListener('fetch', function (e) {\n    e.respondWith(caches.match(e.request).then(function (response) {\n        if (response) return response;else return fetch(e.request);\n    }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3cuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3N3LmpzP2JjYTkiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGNhY2hlX25hbWUgPSAnc3RhdGljJ1xuXG5sZXQgdXJsc190b19jYWNoZSA9IFtcbiAgICAnLycsXG4gICAgJy9pbmRleC5odG1sJyxcbiAgICAnL2Nzcy9pbmRleC5jc3MnLFxuICAgICcvaW1nL2xvZ28ucG5nJyxcbiAgICAnL3N0YXRpYy9pbWFnZXJhbmRvbS5zdmcnLFxuICAgICcvc3RhdGljL2J1bmRsZS5qcycsXG4gICAgJy9zdGF0aWMvc3RvY2tzLXRyZW5kLWZvbGxvdy5jc3YnLFxuICAgICcvc3RhdGljL3N0b2Nrcy1ib3R0b20tZmlzaGluZy5jc3YnLFxuICAgICcvc3RhdGljL2RhdGEuY3N2JyxcbiAgICAnL3N0YXRpYy9pbWFnZS9yYW5kb20uc3ZnJyxcbiAgICAnL3N0YXRpYy9pbWFnZS9tZW51LnN2ZycsXG4gICAgJy9zdGF0aWMvRVRIVVNEVF81bS5jc3YnLFxuICAgICcvc3RhdGljL2ltYWdlbWVudS5zdmcnLFxuICAgICcvc3RhdGljL2NyeXB0b3MuY3N2JyxcbiAgICAnL3N0YXRpYy9zdG9ja3MuY3N2JyxcbiAgICAnL3otd29ya2VyLmpzJyxcbiAgICAnL2NvcmRvdmEuanMnLFxuICAgICcvc3RhdGljL2FwcC5idW5kbGUuanMnLFxuICAgICcvc3RhdGljL3N3LmJ1bmRsZS5qcycsXG4gICAgJy9jb3Jkb3ZhX3BsdWdpbnMuanMnLFxuICAgICcvcGx1Z2lucy9jb3Jkb3ZhLXBsdWdpbi1maWxlL3d3dy9EaXJlY3RvcnlSZWFkZXIuanMnLFxuICAgICcvcGx1Z2lucy9jb3Jkb3ZhLXBsdWdpbi1maWxlL3d3dy9GaWxlLmpzJyxcbiAgICAnL3BsdWdpbnMvY29yZG92YS1wbHVnaW4tZmlsZS93d3cvRW50cnkuanMnLFxuICAgICcvcGx1Z2lucy9jb3Jkb3ZhLXBsdWdpbi1maWxlL3d3dy9GaWxlRXJyb3IuanMnLFxuICAgICcvcGx1Z2lucy9jb3Jkb3ZhLXBsdWdpbi1maWxlL3d3dy9GaWxlRW50cnkuanMnLFxuICAgICcvcGx1Z2lucy9jb3Jkb3ZhLXBsdWdpbi1maWxlL3d3dy9GaWxlV3JpdGVyLmpzJyxcbiAgICAnL3BsdWdpbnMvY29yZG92YS1wbHVnaW4tZmlsZS93d3cvRmlsZVVwbG9hZFJlc3VsdC5qcycsXG4gICAgJy9wbHVnaW5zL2NvcmRvdmEtcGx1Z2luLWZpbGUvd3d3L0ZsYWdzLmpzJyxcbiAgICAnL3BsdWdpbnMvY29yZG92YS1wbHVnaW4tZmlsZS93d3cvcmVxdWVzdEZpbGVTeXN0ZW0uanMnLFxuICAgICcvcGx1Z2lucy9jb3Jkb3ZhLXBsdWdpbi1maWxlL3d3dy9yZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJJLmpzJyxcbiAgICAnL3BsdWdpbnMvY29yZG92YS1wbHVnaW4tZmlsZS93d3cvZmlsZVN5c3RlbXMuanMnLFxuICAgICcvcGx1Z2lucy9jb3Jkb3ZhLXBsdWdpbi1maWxlL3d3dy9icm93c2VyL1ByZXBhcmluZy5qcycsXG4gICAgJy9wbHVnaW5zL2NvcmRvdmEtcGx1Z2luLWZpbGUvc3JjL2Jyb3dzZXIvRmlsZVByb3h5LmpzJyxcbiAgICAnL3BsdWdpbnMvY29yZG92YS1wbHVnaW4tZmlsZS93d3cvZmlsZVN5c3RlbVBhdGhzLmpzJyxcbiAgICAnL3BsdWdpbnMvY29yZG92YS1wbHVnaW4tZmlsZS93d3cvYnJvd3Nlci9GaWxlU3lzdGVtLmpzJyxcbiAgICAnL3BsdWdpbnMvY29yZG92YS1wbHVnaW4tZmlsZS93d3cvRGlyZWN0b3J5RW50cnkuanMnLFxuICAgICcvcGx1Z2lucy9jb3Jkb3ZhLXBsdWdpbi1maWxlL3d3dy9GaWxlVXBsb2FkT3B0aW9ucy5qcycsXG4gICAgJy9wbHVnaW5zL2NvcmRvdmEtcGx1Z2luLWZpbGUvd3d3L0ZpbGVTeXN0ZW0uanMnLFxuICAgICcvcGx1Z2lucy9jb3Jkb3ZhLXBsdWdpbi1maWxlL3d3dy9Mb2NhbEZpbGVTeXN0ZW0uanMnLFxuICAgICcvcGx1Z2lucy9jb3Jkb3ZhLXBsdWdpbi1maWxlL3d3dy9Qcm9ncmVzc0V2ZW50LmpzJyxcbiAgICAnL3BsdWdpbnMvY29yZG92YS1wbHVnaW4tZmlsZS93d3cvTWV0YWRhdGEuanMnLFxuICAgICcvcGx1Z2lucy9jb3Jkb3ZhLXBsdWdpbi1maWxlL3d3dy9icm93c2VyL2lzQ2hyb21lLmpzJyxcbiAgICAnL3BsdWdpbnMvY29yZG92YS1wbHVnaW4tZmlsZS93d3cvRmlsZVJlYWRlci5qcycsXG5dXG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIChlKSA9PiB7XG4gICAgZS53YWl0VW50aWwoY2FjaGVzLm9wZW4oY2FjaGVfbmFtZSkudGhlbigoY2FjaGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGNhY2hlLmFkZEFsbCh1cmxzX3RvX2NhY2hlKVxuICAgIH0pKVxufSlcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsIChlKSA9PiB7XG4gICAgZS5yZXNwb25kV2l0aChjYWNoZXMubWF0Y2goZS5yZXF1ZXN0KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGZldGNoKGUucmVxdWVzdClcbiAgICB9KSlcbn0pXG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sw.js\n");

/***/ })

/******/ });