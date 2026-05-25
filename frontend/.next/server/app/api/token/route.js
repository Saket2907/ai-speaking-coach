"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/token/route";
exports.ids = ["app/api/token/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftoken%2Froute&page=%2Fapi%2Ftoken%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftoken%2Froute.ts&appDir=C%3A%5CUsers%5CSanjay%5COneDrive%20-%20Lovely%20Professional%20University%5CDesktop%5CNew%20folder%20(3)%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CSanjay%5COneDrive%20-%20Lovely%20Professional%20University%5CDesktop%5CNew%20folder%20(3)%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftoken%2Froute&page=%2Fapi%2Ftoken%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftoken%2Froute.ts&appDir=C%3A%5CUsers%5CSanjay%5COneDrive%20-%20Lovely%20Professional%20University%5CDesktop%5CNew%20folder%20(3)%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CSanjay%5COneDrive%20-%20Lovely%20Professional%20University%5CDesktop%5CNew%20folder%20(3)%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Sanjay_OneDrive_Lovely_Professional_University_Desktop_New_folder_3_frontend_app_api_token_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/token/route.ts */ \"(rsc)/./app/api/token/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/token/route\",\n        pathname: \"/api/token\",\n        filename: \"route\",\n        bundlePath: \"app/api/token/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Sanjay\\\\OneDrive - Lovely Professional University\\\\Desktop\\\\New folder (3)\\\\frontend\\\\app\\\\api\\\\token\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Sanjay_OneDrive_Lovely_Professional_University_Desktop_New_folder_3_frontend_app_api_token_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/token/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0b2tlbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdG9rZW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0b2tlbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNTYW5qYXklNUNPbmVEcml2ZSUyMC0lMjBMb3ZlbHklMjBQcm9mZXNzaW9uYWwlMjBVbml2ZXJzaXR5JTVDRGVza3RvcCU1Q05ldyUyMGZvbGRlciUyMCgzKSU1Q2Zyb250ZW5kJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNTYW5qYXklNUNPbmVEcml2ZSUyMC0lMjBMb3ZlbHklMjBQcm9mZXNzaW9uYWwlMjBVbml2ZXJzaXR5JTVDRGVza3RvcCU1Q05ldyUyMGZvbGRlciUyMCgzKSU1Q2Zyb250ZW5kJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUMwRTtBQUN2SjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLXNwZWFraW5nLWNvYWNoLWZyb250ZW5kLz9iYmE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFNhbmpheVxcXFxPbmVEcml2ZSAtIExvdmVseSBQcm9mZXNzaW9uYWwgVW5pdmVyc2l0eVxcXFxEZXNrdG9wXFxcXE5ldyBmb2xkZXIgKDMpXFxcXGZyb250ZW5kXFxcXGFwcFxcXFxhcGlcXFxcdG9rZW5cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Rva2VuL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdG9rZW5cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Rva2VuL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcU2FuamF5XFxcXE9uZURyaXZlIC0gTG92ZWx5IFByb2Zlc3Npb25hbCBVbml2ZXJzaXR5XFxcXERlc2t0b3BcXFxcTmV3IGZvbGRlciAoMylcXFxcZnJvbnRlbmRcXFxcYXBwXFxcXGFwaVxcXFx0b2tlblxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdG9rZW4vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftoken%2Froute&page=%2Fapi%2Ftoken%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftoken%2Froute.ts&appDir=C%3A%5CUsers%5CSanjay%5COneDrive%20-%20Lovely%20Professional%20University%5CDesktop%5CNew%20folder%20(3)%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CSanjay%5COneDrive%20-%20Lovely%20Professional%20University%5CDesktop%5CNew%20folder%20(3)%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/token/route.ts":
/*!********************************!*\
  !*** ./app/api/token/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var livekit_server_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! livekit-server-sdk */ \"(rsc)/./node_modules/livekit-server-sdk/dist/index.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\nasync function GET(req) {\n    const { searchParams } = new URL(req.url);\n    const room = searchParams.get(\"room\") ?? \"speaking-coach-room\";\n    const username = searchParams.get(\"username\") ?? \"user\";\n    const apiKey = process.env.LIVEKIT_API_KEY;\n    const apiSecret = process.env.LIVEKIT_API_SECRET;\n    if (!apiKey || !apiSecret) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: \"LiveKit credentials not configured\"\n        }, {\n            status: 500\n        });\n    }\n    const token = new livekit_server_sdk__WEBPACK_IMPORTED_MODULE_0__.AccessToken(apiKey, apiSecret, {\n        identity: username,\n        ttl: \"1h\"\n    });\n    token.addGrant({\n        roomJoin: true,\n        room,\n        canPublish: true,\n        canSubscribe: true\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n        token: await token.toJwt()\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Rva2VuL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRDtBQUNPO0FBRWpELGVBQWVFLElBQUlDLEdBQWdCO0lBQ3hDLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSUYsSUFBSUcsR0FBRztJQUN4QyxNQUFNQyxPQUFPSCxhQUFhSSxHQUFHLENBQUMsV0FBVztJQUN6QyxNQUFNQyxXQUFXTCxhQUFhSSxHQUFHLENBQUMsZUFBZTtJQUVqRCxNQUFNRSxTQUFTQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFDMUMsTUFBTUMsWUFBWUgsUUFBUUMsR0FBRyxDQUFDRyxrQkFBa0I7SUFFaEQsSUFBSSxDQUFDTCxVQUFVLENBQUNJLFdBQVc7UUFDekIsT0FBT2IscURBQVlBLENBQUNlLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUFxQyxHQUM5QztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7SUFFQSxNQUFNQyxRQUFRLElBQUluQiwyREFBV0EsQ0FBQ1UsUUFBUUksV0FBVztRQUMvQ00sVUFBVVg7UUFDVlksS0FBSztJQUNQO0lBRUFGLE1BQU1HLFFBQVEsQ0FBQztRQUNiQyxVQUFVO1FBQ1ZoQjtRQUNBaUIsWUFBWTtRQUNaQyxjQUFjO0lBQ2hCO0lBRUEsT0FBT3hCLHFEQUFZQSxDQUFDZSxJQUFJLENBQUM7UUFBRUcsT0FBTyxNQUFNQSxNQUFNTyxLQUFLO0lBQUc7QUFDeEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1zcGVha2luZy1jb2FjaC1mcm9udGVuZC8uL2FwcC9hcGkvdG9rZW4vcm91dGUudHM/ZmNmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY2Nlc3NUb2tlbiB9IGZyb20gXCJsaXZla2l0LXNlcnZlci1zZGtcIjtcclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IE5leHRSZXF1ZXN0KSB7XHJcbiAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxLnVybCk7XHJcbiAgY29uc3Qgcm9vbSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJyb29tXCIpID8/IFwic3BlYWtpbmctY29hY2gtcm9vbVwiO1xyXG4gIGNvbnN0IHVzZXJuYW1lID0gc2VhcmNoUGFyYW1zLmdldChcInVzZXJuYW1lXCIpID8/IFwidXNlclwiO1xyXG5cclxuICBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5MSVZFS0lUX0FQSV9LRVk7XHJcbiAgY29uc3QgYXBpU2VjcmV0ID0gcHJvY2Vzcy5lbnYuTElWRUtJVF9BUElfU0VDUkVUO1xyXG5cclxuICBpZiAoIWFwaUtleSB8fCAhYXBpU2VjcmV0KSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgZXJyb3I6IFwiTGl2ZUtpdCBjcmVkZW50aWFscyBub3QgY29uZmlndXJlZFwiIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRva2VuID0gbmV3IEFjY2Vzc1Rva2VuKGFwaUtleSwgYXBpU2VjcmV0LCB7XHJcbiAgICBpZGVudGl0eTogdXNlcm5hbWUsXHJcbiAgICB0dGw6IFwiMWhcIixcclxuICB9KTtcclxuXHJcbiAgdG9rZW4uYWRkR3JhbnQoe1xyXG4gICAgcm9vbUpvaW46IHRydWUsXHJcbiAgICByb29tLFxyXG4gICAgY2FuUHVibGlzaDogdHJ1ZSxcclxuICAgIGNhblN1YnNjcmliZTogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgdG9rZW46IGF3YWl0IHRva2VuLnRvSnd0KCkgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkFjY2Vzc1Rva2VuIiwiTmV4dFJlc3BvbnNlIiwiR0VUIiwicmVxIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwicm9vbSIsImdldCIsInVzZXJuYW1lIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkxJVkVLSVRfQVBJX0tFWSIsImFwaVNlY3JldCIsIkxJVkVLSVRfQVBJX1NFQ1JFVCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInRva2VuIiwiaWRlbnRpdHkiLCJ0dGwiLCJhZGRHcmFudCIsInJvb21Kb2luIiwiY2FuUHVibGlzaCIsImNhblN1YnNjcmliZSIsInRvSnd0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/token/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@livekit","vendor-chunks/livekit-server-sdk","vendor-chunks/@bufbuild"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftoken%2Froute&page=%2Fapi%2Ftoken%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftoken%2Froute.ts&appDir=C%3A%5CUsers%5CSanjay%5COneDrive%20-%20Lovely%20Professional%20University%5CDesktop%5CNew%20folder%20(3)%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CSanjay%5COneDrive%20-%20Lovely%20Professional%20University%5CDesktop%5CNew%20folder%20(3)%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();