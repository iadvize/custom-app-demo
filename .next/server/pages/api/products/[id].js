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
exports.id = "pages/api/products/[id]";
exports.ids = ["pages/api/products/[id]"];
exports.modules = {

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "(api)/./src/consts.tsx":
/*!************************!*\
  !*** ./src/consts.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api),\n/* harmony export */   \"gitbook\": () => (/* binding */ gitbook),\n/* harmony export */   \"secret\": () => (/* binding */ secret)\n/* harmony export */ });\nconst api = \"http://localhost:3000/api/products\";\nconst secret = \"31387579c19deaf21d112a8fd2f050ef\";\nconst gitbook = \"https://app.gitbook.com/o/JZY4lQs3jDfTFvrnCKnh/s/xzAkCqB4ZW2cEKD9uaMb/technologies/custom-app/get-started\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvY29uc3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxNQUFNLHFDQUFvQztBQUNoRCxNQUFNQyxTQUFTLG1DQUFrQztBQUNqRCxNQUFNQyxVQUFVLDRHQUEyRyIsInNvdXJjZXMiOlsid2VicGFjazovL3R1dG8vLi9zcmMvY29uc3RzLnRzeD84MjNjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhcGkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJvZHVjdHNcIlxuZXhwb3J0IGNvbnN0IHNlY3JldCA9IFwiMzEzODc1NzljMTlkZWFmMjFkMTEyYThmZDJmMDUwZWZcIlxuZXhwb3J0IGNvbnN0IGdpdGJvb2sgPSBcImh0dHBzOi8vYXBwLmdpdGJvb2suY29tL28vSlpZNGxRczNqRGZURnZybkNLbmgvcy94ekFrQ3FCNFpXMmNFS0Q5dWFNYi90ZWNobm9sb2dpZXMvY3VzdG9tLWFwcC9nZXQtc3RhcnRlZFwiIl0sIm5hbWVzIjpbImFwaSIsInNlY3JldCIsImdpdGJvb2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/consts.tsx\n");

/***/ }),

/***/ "(api)/./src/pages/api/products.tsx":
/*!************************************!*\
  !*** ./src/pages/api/products.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"coffees\": () => (/* binding */ coffees),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ \"(api)/./src/consts.tsx\");\n\nconst forte = \"https://i.ibb.co/8gnmktW/forte.jpg\";\nconst mint = \"https://i.ibb.co/MDLN5FG/mint.jpg\";\nconst watermelon = \"https://i.ibb.co/hg6dDMt/watermelon.jpg\";\nconst pistachio = \"https://i.ibb.co/88h57zj/pistachio.jpg\";\nconst gold = \"https://i.ibb.co/6ZP3BPt/gold-exeprience.jpg\";\n/*export const coffees : Product[] = [\n    {\n        id : 1,\n        name : \"Vaniglia\",\n        description : \"The coffee blend's mellow, malted cereal notes bring a rounded, silky taste that elegantly complements classic vanilla.\",\n        price : 0.49,\n        pricePerTen : 4.90,\n        picture : \"https://www.nespresso.com/ecom/medias/sys_master/public/26731420483614/OL-Vaniglia.png?impolicy=product&imwidth=90\",\n        link : \"https://www.nespresso.com/fr/en/order/capsules/original/barista-vaniglia-caspule-cafe\",\n        discount : false,\n        discountAmount : 1\n    },{\n        id : 2,\n        name : \"Capriccio\",\n        description : \"Let the combination of light acidity and a savory cereal note surprise you in this refreshing but deep light-roasted Arabica-Robusta espresso blend.\",\n        price : 0.43,\n        pricePerTen : 4.30,\n        picture : \"https://www.nespresso.com/ecom/medias/sys_master/public/15900731801630/Capriccio-OL.png?impolicy=product&imwidth=90\",\n        link : \"https://www.nespresso.com/fr/en/order/capsules/original/capriccio-capsule-cafe\",\n        discount : false,\n        discountAmount : 1\n    },{\n        id : 3,\n        name : \"Napoli\",\n        description : \"Taste our tribute to the Italian coffee capital. A dark roasted Robusta-leavened blend delivers a thick, creamy cup and pleasantly bitter aftertaste.\",\n        price : 0.46,\n        pricePerTen : 4.60,\n        picture : \"https://www.nespresso.com/ecom/medias/sys_master/public/16452983881758/Napoli-OL.png?impolicy=product&imwidth=90\",\n        link : \"https://www.nespresso.com/fr/en/order/capsules/original/napoli-capsule-cafe\",\n        discount : true, \n        discountAmount : 0.7\n    },{\n        id : 4,\n        name : \"Jamaica Blue Mountain\",\n        description : \"A coffee so treasured they ship it in specially crafted wood barrels SPECIAL RESERVE JAMAICA BLUE MOUNTAIN is rich in exotic woody and spice notes.\",\n        price : 1.50,\n        pricePerTen : 15,\n        picture : \"https://www.nespresso.com/ecom/medias/sys_master/public/16603612708894/MicrosoftTeams-image-19-.png?impolicy=product&imwidth=90\",\n        link : \"https://www.nespresso.com/fr/en/order/capsules/original/jamaica-blue-mountain-capsule-cafe-7726-50\",\n        discount : false,\n        discountAmount : 1\n    },{\n        id : 5, \n        name : \"Caramello\",\n        description : \"The taste of sweet comfort that comes from blending in a biscuity caramel flavour into our silky-textured South American Arabicas.\",\n        price : 0.49,\n        pricePerTen : 4.90,\n        picture : \"https://www.nespresso.com/ecom/medias/sys_master/public/26728687829022/OL-Caramello.png?impolicy=product&imwidth=90\",\n        link : \"https://www.nespresso.com/fr/en/order/capsules/original/barista-caramello-caspule-cafe\",\n        discount : true,\n        discountAmount : 0.8\n    }\n]*/ const coffees = [\n    {\n        id: 1,\n        name: \"Homemade\",\n        description: \"A coffee from the machine, we put it into a capsule. Hopefully it's still good\",\n        price: 0.49,\n        pricePerTen: 4.90,\n        picture: forte,\n        link: _consts__WEBPACK_IMPORTED_MODULE_0__.gitbook,\n        discount: false,\n        discountAmount: 1\n    },\n    {\n        id: 2,\n        name: \"Watermelon\",\n        description: \"A refreshing coffee to brighten your afternon\",\n        price: 0.43,\n        pricePerTen: 4.30,\n        picture: watermelon,\n        link: _consts__WEBPACK_IMPORTED_MODULE_0__.gitbook,\n        discount: false,\n        discountAmount: 1\n    },\n    {\n        id: 3,\n        name: \"mint\",\n        description: \"A nice coffee for every mint enjoyer to wake you up and improve your breath\",\n        price: 0.46,\n        pricePerTen: 4.60,\n        picture: mint,\n        link: _consts__WEBPACK_IMPORTED_MODULE_0__.gitbook,\n        discount: true,\n        discountAmount: 0.7\n    },\n    {\n        id: 4,\n        name: \"Pistachio\",\n        description: \"Pistachios are cool.\",\n        price: 1.50,\n        pricePerTen: 15,\n        picture: pistachio,\n        link: _consts__WEBPACK_IMPORTED_MODULE_0__.gitbook,\n        discount: false,\n        discountAmount: 1\n    },\n    {\n        id: 5,\n        name: \"Gold Experience\",\n        description: \"Fresh as a golden wind, a divine requiem\",\n        price: 0.49,\n        pricePerTen: 4.90,\n        picture: gold,\n        link: _consts__WEBPACK_IMPORTED_MODULE_0__.gitbook,\n        discount: true,\n        discountAmount: 0.8\n    }\n];\nasync function handler(req, res) {\n    res.status(200).json(coffees.map((coffee)=>({\n            id: coffee.id,\n            name: coffee.name,\n            price: coffee.price,\n            pricePerTen: coffee.pricePerTen,\n            picture: coffee.picture,\n            discount: coffee.discount,\n            discountAmount: coffee.discountAmount\n        })));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Byb2R1Y3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDc0M7QUFDdEMsTUFBTUMsUUFBUTtBQUNkLE1BQU1DLE9BQU87QUFDYixNQUFNQyxhQUFhO0FBQ25CLE1BQU1DLFlBQVk7QUFDbEIsTUFBTUMsT0FBTztBQStCYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW9EQyxHQUVNLE1BQU1DLFVBQXNCO0lBQy9CO1FBQ0lDLElBQUs7UUFDTEMsTUFBTztRQUNQQyxhQUFjO1FBQ2RDLE9BQVE7UUFDUkMsYUFBYztRQUNkQyxTQUFVWDtRQUNWWSxNQUFPYiw0Q0FBT0E7UUFDZGMsVUFBVyxLQUFLO1FBQ2hCQyxnQkFBaUI7SUFDckI7SUFBRTtRQUNFUixJQUFLO1FBQ0xDLE1BQU87UUFDUEMsYUFBYztRQUNkQyxPQUFRO1FBQ1JDLGFBQWM7UUFDZEMsU0FBVVQ7UUFDVlUsTUFBT2IsNENBQU9BO1FBQ2RjLFVBQVcsS0FBSztRQUNoQkMsZ0JBQWlCO0lBQ3JCO0lBQUU7UUFDRVIsSUFBSztRQUNMQyxNQUFPO1FBQ1BDLGFBQWM7UUFDZEMsT0FBUTtRQUNSQyxhQUFjO1FBQ2RDLFNBQVVWO1FBQ1ZXLE1BQU9iLDRDQUFPQTtRQUNkYyxVQUFXLElBQUk7UUFDZkMsZ0JBQWlCO0lBQ3JCO0lBQUU7UUFDRVIsSUFBSztRQUNMQyxNQUFPO1FBQ1BDLGFBQWM7UUFDZEMsT0FBUTtRQUNSQyxhQUFjO1FBQ2RDLFNBQVVSO1FBQ1ZTLE1BQU9iLDRDQUFPQTtRQUNkYyxVQUFXLEtBQUs7UUFDaEJDLGdCQUFpQjtJQUNyQjtJQUFFO1FBQ0VSLElBQUs7UUFDTEMsTUFBTztRQUNQQyxhQUFjO1FBQ2RDLE9BQVE7UUFDUkMsYUFBYztRQUNkQyxTQUFVUDtRQUNWUSxNQUFPYiw0Q0FBT0E7UUFDZGMsVUFBVyxJQUFJO1FBQ2ZDLGdCQUFpQjtJQUNyQjtDQUNIO0FBRWMsZUFBZUMsUUFBUUMsR0FBb0IsRUFBQ0MsR0FBcUIsRUFBQztJQUMvRUEsSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ2QsUUFBUWUsR0FBRyxDQUFDLENBQUNDLFNBQVk7WUFDMUNmLElBQUllLE9BQU9mLEVBQUU7WUFDYkMsTUFBTWMsT0FBT2QsSUFBSTtZQUNqQkUsT0FBT1ksT0FBT1osS0FBSztZQUNuQkMsYUFBY1csT0FBT1gsV0FBVztZQUNoQ0MsU0FBU1UsT0FBT1YsT0FBTztZQUN2QkUsVUFBVVEsT0FBT1IsUUFBUTtZQUN6QkMsZ0JBQWdCTyxPQUFPUCxjQUFjO1FBQ3ZDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R1dG8vLi9zcmMvcGFnZXMvYXBpL3Byb2R1Y3RzLnRzeD9mNWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBnaXRib29rIH0gZnJvbSAnLi4vLi4vY29uc3RzJ1xuY29uc3QgZm9ydGUgPSBcImh0dHBzOi8vaS5pYmIuY28vOGdubWt0Vy9mb3J0ZS5qcGdcIlxuY29uc3QgbWludCA9IFwiaHR0cHM6Ly9pLmliYi5jby9NRExONUZHL21pbnQuanBnXCJcbmNvbnN0IHdhdGVybWVsb24gPSBcImh0dHBzOi8vaS5pYmIuY28vaGc2ZERNdC93YXRlcm1lbG9uLmpwZ1wiXG5jb25zdCBwaXN0YWNoaW8gPSBcImh0dHBzOi8vaS5pYmIuY28vODhoNTd6ai9waXN0YWNoaW8uanBnXCJcbmNvbnN0IGdvbGQgPSBcImh0dHBzOi8vaS5pYmIuY28vNlpQM0JQdC9nb2xkLWV4ZXByaWVuY2UuanBnXCJcblxuLypodHRwczovL2liYi5jby9QR3NyazA3XG5odHRwczovL2liYi5jby9CVlJzSzByXG5odHRwczovL2liYi5jby8wbjc5aFhkXG5odHRwczovL2liYi5jby9OWTRqeTFMXG5odHRwczovL2liYi5jby9nN1Q1VlRXXG4qL1xuXG5leHBvcnQgdHlwZSBQcm9kdWN0ID0ge1xuICAgIGlkIDogbnVtYmVyLFxuICAgIG5hbWUgOiBzdHJpbmcsXG4gICAgZGVzY3JpcHRpb24gOiBzdHJpbmcsXG4gICAgcHJpY2UgOiBudW1iZXIsXG4gICAgcHJpY2VQZXJUZW4gOiBudW1iZXIsXG4gICAgcGljdHVyZSA6IHN0cmluZyxcbiAgICBsaW5rIDogc3RyaW5nLFxuICAgIGRpc2NvdW50IDogYm9vbGVhbixcbiAgICBkaXNjb3VudEFtb3VudCA6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBQYXJ0aWFsUHJvZHVjdCA9IHtcbiAgaWQgOiBudW1iZXIsXG4gIG5hbWUgOiBzdHJpbmcsXG4gIHByaWNlIDogbnVtYmVyLFxuICBwcmljZVBlclRlbiA6IG51bWJlcixcbiAgcGljdHVyZSA6IHN0cmluZyxcbiAgZGlzY291bnQgOiBib29sZWFuLFxuICBkaXNjb3VudEFtb3VudCA6IG51bWJlcixcbn1cblxuLypleHBvcnQgY29uc3QgY29mZmVlcyA6IFByb2R1Y3RbXSA9IFtcbiAgICB7XG4gICAgICAgIGlkIDogMSxcbiAgICAgICAgbmFtZSA6IFwiVmFuaWdsaWFcIixcbiAgICAgICAgZGVzY3JpcHRpb24gOiBcIlRoZSBjb2ZmZWUgYmxlbmQncyBtZWxsb3csIG1hbHRlZCBjZXJlYWwgbm90ZXMgYnJpbmcgYSByb3VuZGVkLCBzaWxreSB0YXN0ZSB0aGF0IGVsZWdhbnRseSBjb21wbGVtZW50cyBjbGFzc2ljIHZhbmlsbGEuXCIsXG4gICAgICAgIHByaWNlIDogMC40OSxcbiAgICAgICAgcHJpY2VQZXJUZW4gOiA0LjkwLFxuICAgICAgICBwaWN0dXJlIDogXCJodHRwczovL3d3dy5uZXNwcmVzc28uY29tL2Vjb20vbWVkaWFzL3N5c19tYXN0ZXIvcHVibGljLzI2NzMxNDIwNDgzNjE0L09MLVZhbmlnbGlhLnBuZz9pbXBvbGljeT1wcm9kdWN0Jmltd2lkdGg9OTBcIixcbiAgICAgICAgbGluayA6IFwiaHR0cHM6Ly93d3cubmVzcHJlc3NvLmNvbS9mci9lbi9vcmRlci9jYXBzdWxlcy9vcmlnaW5hbC9iYXJpc3RhLXZhbmlnbGlhLWNhc3B1bGUtY2FmZVwiLFxuICAgICAgICBkaXNjb3VudCA6IGZhbHNlLFxuICAgICAgICBkaXNjb3VudEFtb3VudCA6IDFcbiAgICB9LHtcbiAgICAgICAgaWQgOiAyLFxuICAgICAgICBuYW1lIDogXCJDYXByaWNjaW9cIixcbiAgICAgICAgZGVzY3JpcHRpb24gOiBcIkxldCB0aGUgY29tYmluYXRpb24gb2YgbGlnaHQgYWNpZGl0eSBhbmQgYSBzYXZvcnkgY2VyZWFsIG5vdGUgc3VycHJpc2UgeW91IGluIHRoaXMgcmVmcmVzaGluZyBidXQgZGVlcCBsaWdodC1yb2FzdGVkIEFyYWJpY2EtUm9idXN0YSBlc3ByZXNzbyBibGVuZC5cIixcbiAgICAgICAgcHJpY2UgOiAwLjQzLFxuICAgICAgICBwcmljZVBlclRlbiA6IDQuMzAsXG4gICAgICAgIHBpY3R1cmUgOiBcImh0dHBzOi8vd3d3Lm5lc3ByZXNzby5jb20vZWNvbS9tZWRpYXMvc3lzX21hc3Rlci9wdWJsaWMvMTU5MDA3MzE4MDE2MzAvQ2FwcmljY2lvLU9MLnBuZz9pbXBvbGljeT1wcm9kdWN0Jmltd2lkdGg9OTBcIixcbiAgICAgICAgbGluayA6IFwiaHR0cHM6Ly93d3cubmVzcHJlc3NvLmNvbS9mci9lbi9vcmRlci9jYXBzdWxlcy9vcmlnaW5hbC9jYXByaWNjaW8tY2Fwc3VsZS1jYWZlXCIsXG4gICAgICAgIGRpc2NvdW50IDogZmFsc2UsXG4gICAgICAgIGRpc2NvdW50QW1vdW50IDogMVxuICAgIH0se1xuICAgICAgICBpZCA6IDMsXG4gICAgICAgIG5hbWUgOiBcIk5hcG9saVwiLFxuICAgICAgICBkZXNjcmlwdGlvbiA6IFwiVGFzdGUgb3VyIHRyaWJ1dGUgdG8gdGhlIEl0YWxpYW4gY29mZmVlIGNhcGl0YWwuIEEgZGFyayByb2FzdGVkIFJvYnVzdGEtbGVhdmVuZWQgYmxlbmQgZGVsaXZlcnMgYSB0aGljaywgY3JlYW15IGN1cCBhbmQgcGxlYXNhbnRseSBiaXR0ZXIgYWZ0ZXJ0YXN0ZS5cIixcbiAgICAgICAgcHJpY2UgOiAwLjQ2LFxuICAgICAgICBwcmljZVBlclRlbiA6IDQuNjAsXG4gICAgICAgIHBpY3R1cmUgOiBcImh0dHBzOi8vd3d3Lm5lc3ByZXNzby5jb20vZWNvbS9tZWRpYXMvc3lzX21hc3Rlci9wdWJsaWMvMTY0NTI5ODM4ODE3NTgvTmFwb2xpLU9MLnBuZz9pbXBvbGljeT1wcm9kdWN0Jmltd2lkdGg9OTBcIixcbiAgICAgICAgbGluayA6IFwiaHR0cHM6Ly93d3cubmVzcHJlc3NvLmNvbS9mci9lbi9vcmRlci9jYXBzdWxlcy9vcmlnaW5hbC9uYXBvbGktY2Fwc3VsZS1jYWZlXCIsXG4gICAgICAgIGRpc2NvdW50IDogdHJ1ZSwgXG4gICAgICAgIGRpc2NvdW50QW1vdW50IDogMC43XG4gICAgfSx7XG4gICAgICAgIGlkIDogNCxcbiAgICAgICAgbmFtZSA6IFwiSmFtYWljYSBCbHVlIE1vdW50YWluXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uIDogXCJBIGNvZmZlZSBzbyB0cmVhc3VyZWQgdGhleSBzaGlwIGl0IGluIHNwZWNpYWxseSBjcmFmdGVkIHdvb2QgYmFycmVscyBTUEVDSUFMIFJFU0VSVkUgSkFNQUlDQSBCTFVFIE1PVU5UQUlOIGlzIHJpY2ggaW4gZXhvdGljIHdvb2R5IGFuZCBzcGljZSBub3Rlcy5cIixcbiAgICAgICAgcHJpY2UgOiAxLjUwLFxuICAgICAgICBwcmljZVBlclRlbiA6IDE1LFxuICAgICAgICBwaWN0dXJlIDogXCJodHRwczovL3d3dy5uZXNwcmVzc28uY29tL2Vjb20vbWVkaWFzL3N5c19tYXN0ZXIvcHVibGljLzE2NjAzNjEyNzA4ODk0L01pY3Jvc29mdFRlYW1zLWltYWdlLTE5LS5wbmc/aW1wb2xpY3k9cHJvZHVjdCZpbXdpZHRoPTkwXCIsXG4gICAgICAgIGxpbmsgOiBcImh0dHBzOi8vd3d3Lm5lc3ByZXNzby5jb20vZnIvZW4vb3JkZXIvY2Fwc3VsZXMvb3JpZ2luYWwvamFtYWljYS1ibHVlLW1vdW50YWluLWNhcHN1bGUtY2FmZS03NzI2LTUwXCIsXG4gICAgICAgIGRpc2NvdW50IDogZmFsc2UsXG4gICAgICAgIGRpc2NvdW50QW1vdW50IDogMVxuICAgIH0se1xuICAgICAgICBpZCA6IDUsIFxuICAgICAgICBuYW1lIDogXCJDYXJhbWVsbG9cIixcbiAgICAgICAgZGVzY3JpcHRpb24gOiBcIlRoZSB0YXN0ZSBvZiBzd2VldCBjb21mb3J0IHRoYXQgY29tZXMgZnJvbSBibGVuZGluZyBpbiBhIGJpc2N1aXR5IGNhcmFtZWwgZmxhdm91ciBpbnRvIG91ciBzaWxreS10ZXh0dXJlZCBTb3V0aCBBbWVyaWNhbiBBcmFiaWNhcy5cIixcbiAgICAgICAgcHJpY2UgOiAwLjQ5LFxuICAgICAgICBwcmljZVBlclRlbiA6IDQuOTAsXG4gICAgICAgIHBpY3R1cmUgOiBcImh0dHBzOi8vd3d3Lm5lc3ByZXNzby5jb20vZWNvbS9tZWRpYXMvc3lzX21hc3Rlci9wdWJsaWMvMjY3Mjg2ODc4MjkwMjIvT0wtQ2FyYW1lbGxvLnBuZz9pbXBvbGljeT1wcm9kdWN0Jmltd2lkdGg9OTBcIixcbiAgICAgICAgbGluayA6IFwiaHR0cHM6Ly93d3cubmVzcHJlc3NvLmNvbS9mci9lbi9vcmRlci9jYXBzdWxlcy9vcmlnaW5hbC9iYXJpc3RhLWNhcmFtZWxsby1jYXNwdWxlLWNhZmVcIixcbiAgICAgICAgZGlzY291bnQgOiB0cnVlLFxuICAgICAgICBkaXNjb3VudEFtb3VudCA6IDAuOFxuICAgIH1cbl0qL1xuXG5leHBvcnQgY29uc3QgY29mZmVlcyA6IFByb2R1Y3RbXSA9IFtcbiAgICB7XG4gICAgICAgIGlkIDogMSxcbiAgICAgICAgbmFtZSA6IFwiSG9tZW1hZGVcIixcbiAgICAgICAgZGVzY3JpcHRpb24gOiBcIkEgY29mZmVlIGZyb20gdGhlIG1hY2hpbmUsIHdlIHB1dCBpdCBpbnRvIGEgY2Fwc3VsZS4gSG9wZWZ1bGx5IGl0J3Mgc3RpbGwgZ29vZFwiLFxuICAgICAgICBwcmljZSA6IDAuNDksXG4gICAgICAgIHByaWNlUGVyVGVuIDogNC45MCxcbiAgICAgICAgcGljdHVyZSA6IGZvcnRlLFxuICAgICAgICBsaW5rIDogZ2l0Ym9vayxcbiAgICAgICAgZGlzY291bnQgOiBmYWxzZSxcbiAgICAgICAgZGlzY291bnRBbW91bnQgOiAxXG4gICAgfSx7XG4gICAgICAgIGlkIDogMixcbiAgICAgICAgbmFtZSA6IFwiV2F0ZXJtZWxvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbiA6IFwiQSByZWZyZXNoaW5nIGNvZmZlZSB0byBicmlnaHRlbiB5b3VyIGFmdGVybm9uXCIsXG4gICAgICAgIHByaWNlIDogMC40MyxcbiAgICAgICAgcHJpY2VQZXJUZW4gOiA0LjMwLFxuICAgICAgICBwaWN0dXJlIDogd2F0ZXJtZWxvbixcbiAgICAgICAgbGluayA6IGdpdGJvb2ssXG4gICAgICAgIGRpc2NvdW50IDogZmFsc2UsXG4gICAgICAgIGRpc2NvdW50QW1vdW50IDogMVxuICAgIH0se1xuICAgICAgICBpZCA6IDMsXG4gICAgICAgIG5hbWUgOiBcIm1pbnRcIixcbiAgICAgICAgZGVzY3JpcHRpb24gOiBcIkEgbmljZSBjb2ZmZWUgZm9yIGV2ZXJ5IG1pbnQgZW5qb3llciB0byB3YWtlIHlvdSB1cCBhbmQgaW1wcm92ZSB5b3VyIGJyZWF0aFwiLFxuICAgICAgICBwcmljZSA6IDAuNDYsXG4gICAgICAgIHByaWNlUGVyVGVuIDogNC42MCxcbiAgICAgICAgcGljdHVyZSA6IG1pbnQsXG4gICAgICAgIGxpbmsgOiBnaXRib29rLFxuICAgICAgICBkaXNjb3VudCA6IHRydWUsIFxuICAgICAgICBkaXNjb3VudEFtb3VudCA6IDAuN1xuICAgIH0se1xuICAgICAgICBpZCA6IDQsXG4gICAgICAgIG5hbWUgOiBcIlBpc3RhY2hpb1wiLFxuICAgICAgICBkZXNjcmlwdGlvbiA6IFwiUGlzdGFjaGlvcyBhcmUgY29vbC5cIixcbiAgICAgICAgcHJpY2UgOiAxLjUwLFxuICAgICAgICBwcmljZVBlclRlbiA6IDE1LFxuICAgICAgICBwaWN0dXJlIDogcGlzdGFjaGlvLFxuICAgICAgICBsaW5rIDogZ2l0Ym9vayxcbiAgICAgICAgZGlzY291bnQgOiBmYWxzZSxcbiAgICAgICAgZGlzY291bnRBbW91bnQgOiAxXG4gICAgfSx7XG4gICAgICAgIGlkIDogNSwgXG4gICAgICAgIG5hbWUgOiBcIkdvbGQgRXhwZXJpZW5jZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbiA6IFwiRnJlc2ggYXMgYSBnb2xkZW4gd2luZCwgYSBkaXZpbmUgcmVxdWllbVwiLFxuICAgICAgICBwcmljZSA6IDAuNDksXG4gICAgICAgIHByaWNlUGVyVGVuIDogNC45MCxcbiAgICAgICAgcGljdHVyZSA6IGdvbGQsXG4gICAgICAgIGxpbmsgOiBnaXRib29rLFxuICAgICAgICBkaXNjb3VudCA6IHRydWUsXG4gICAgICAgIGRpc2NvdW50QW1vdW50IDogMC44XG4gICAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSA6IE5leHRBcGlSZXF1ZXN0LHJlcyA6IE5leHRBcGlSZXNwb25zZSl7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNvZmZlZXMubWFwKChjb2ZmZWUpID0+ICh7XG4gICAgICBpZDogY29mZmVlLmlkLFxuICAgICAgbmFtZTogY29mZmVlLm5hbWUsXG4gICAgICBwcmljZTogY29mZmVlLnByaWNlLFxuICAgICAgcHJpY2VQZXJUZW4gOiBjb2ZmZWUucHJpY2VQZXJUZW4sXG4gICAgICBwaWN0dXJlOiBjb2ZmZWUucGljdHVyZSxcbiAgICAgIGRpc2NvdW50OiBjb2ZmZWUuZGlzY291bnQsXG4gICAgICBkaXNjb3VudEFtb3VudDogY29mZmVlLmRpc2NvdW50QW1vdW50LFxuICAgIH0pKSlcbn0iXSwibmFtZXMiOlsiZ2l0Ym9vayIsImZvcnRlIiwibWludCIsIndhdGVybWVsb24iLCJwaXN0YWNoaW8iLCJnb2xkIiwiY29mZmVlcyIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJwcmljZVBlclRlbiIsInBpY3R1cmUiLCJsaW5rIiwiZGlzY291bnQiLCJkaXNjb3VudEFtb3VudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwibWFwIiwiY29mZmVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/products.tsx\n");

/***/ }),

/***/ "(api)/./src/pages/api/products/[id].tsx":
/*!*****************************************!*\
  !*** ./src/pages/api/products/[id].tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products */ \"(api)/./src/pages/api/products.tsx\");\n\n\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    methods: [\n        \"POST\",\n        \"GET\",\n        \"HEAD\"\n    ]\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\nasync function handler(req, res) {\n    const { query  } = req;\n    const { id  } = query;\n    const filtered = _products__WEBPACK_IMPORTED_MODULE_1__.coffees.find((coffee)=>coffee.id.toString() === id);\n    res.status(200).json(filtered);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Byb2R1Y3RzL1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFdUI7QUFDYztBQUVyQyxNQUFNRSxPQUFPRiwyQ0FBSUEsQ0FBQztJQUNkRyxTQUFTO1FBQUM7UUFBUTtRQUFPO0tBQU87QUFDcEM7QUFFQSxTQUFTQyxjQUNMQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEJDLEVBQVksRUFDWjtJQUNBLE9BQU8sSUFBSUMsUUFBUSxDQUFDQyxTQUFTQyxTQUFXO1FBQ3RDSCxHQUFHRixLQUFLQyxLQUFLLENBQUNLLFNBQWdCO1lBQzVCLElBQUlBLGtCQUFrQkMsT0FBTztnQkFDM0IsT0FBT0YsT0FBT0M7WUFDaEIsQ0FBQztZQUVELE9BQU9GLFFBQVFFO1FBQ2pCO0lBQ0Y7QUFDRjtBQUVhLGVBQWVFLFFBQVFSLEdBQW9CLEVBQUNDLEdBQXFCLEVBQUM7SUFDN0UsTUFBTSxFQUFFUSxNQUFLLEVBQUUsR0FBR1Q7SUFDbEIsTUFBTSxFQUFFVSxHQUFFLEVBQUUsR0FBR0Q7SUFDZixNQUFNRSxXQUFXZixtREFBWSxDQUFDaUIsQ0FBQUEsU0FBU0EsT0FBT0gsRUFBRSxDQUFDSSxRQUFRLE9BQU9KO0lBQ2hFVCxJQUFJYyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDTDtBQUN6QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHV0by8uL3NyYy9wYWdlcy9hcGkvcHJvZHVjdHMvW2lkXS50c3g/MWFhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIlxuXG5pbXBvcnQgQ29ycyBmcm9tICdjb3JzJ1xuaW1wb3J0IHsgY29mZmVlcyB9IGZyb20gXCIuLi9wcm9kdWN0c1wiXG5cbmNvbnN0IGNvcnMgPSBDb3JzKHtcbiAgICBtZXRob2RzOiBbJ1BPU1QnLCAnR0VUJywgJ0hFQUQnXSxcbn0pXG5cbmZ1bmN0aW9uIHJ1bk1pZGRsZXdhcmUoXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZSxcbiAgICBmbjogRnVuY3Rpb25cbiAgKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZuKHJlcSwgcmVzLCAocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEgOiBOZXh0QXBpUmVxdWVzdCxyZXMgOiBOZXh0QXBpUmVzcG9uc2Upe1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHJlcVxuICAgIGNvbnN0IHsgaWQgfSA9IHF1ZXJ5XG4gICAgY29uc3QgZmlsdGVyZWQgPSBjb2ZmZWVzLmZpbmQoY29mZmVlPT4oY29mZmVlLmlkLnRvU3RyaW5nKCkgPT09IGlkKSlcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihmaWx0ZXJlZClcbn0iXSwibmFtZXMiOlsiQ29ycyIsImNvZmZlZXMiLCJjb3JzIiwibWV0aG9kcyIsInJ1bk1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJmbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0IiwiRXJyb3IiLCJoYW5kbGVyIiwicXVlcnkiLCJpZCIsImZpbHRlcmVkIiwiZmluZCIsImNvZmZlZSIsInRvU3RyaW5nIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/products/[id].tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/products/[id].tsx"));
module.exports = __webpack_exports__;

})();