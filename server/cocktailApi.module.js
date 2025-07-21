"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCocktailByName = void 0;
const http_module_1 = require("./http.module");
const getCocktailByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield http_module_1.httpClient.get({
            service: 'cocktail',
            payload: `name=${name}`,
        });
        return res === null || res === void 0 ? void 0 : res.data;
    }
    catch (error) {
        wx.showToast({
            title: error === null || error === void 0 ? void 0 : error.errMsg,
            icon: 'error',
            duration: 3000,
        });
        throw error;
    }
});
exports.getCocktailByName = getCocktailByName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ja3RhaWxBcGkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29ja3RhaWxBcGkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEyQztBQU0zQyxNQUFNLGlCQUFpQixHQUFHLENBQU8sSUFBWSxFQUFFLEVBQUU7SUFDL0MsSUFBSSxDQUFDO1FBQ0gsTUFBTSxHQUFHLEdBQThCLE1BQU0sd0JBQVUsQ0FBQyxHQUFHLENBQUM7WUFDMUQsT0FBTyxFQUFFLFVBQVU7WUFDbkIsT0FBTyxFQUFFLFFBQVEsSUFBSSxFQUFFO1NBQ3hCLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNmLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxLQUFLLEVBQUcsS0FBdUMsYUFBdkMsS0FBSyx1QkFBTCxLQUFLLENBQW9DLE1BQU07WUFDdkQsSUFBSSxFQUFFLE9BQU87WUFDYixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUNILE1BQU0sS0FBSyxDQUFDO0lBQ2QsQ0FBQztBQUNILENBQUMsQ0FBQSxDQUFDO0FBRU8sOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHR0cENsaWVudCB9IGZyb20gJy4vaHR0cC5tb2R1bGUnO1xuXG50eXBlIENvY2t0YWlsVHlwZSA9IHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xufTtcblxuY29uc3QgZ2V0Q29ja3RhaWxCeU5hbWUgPSBhc3luYyAobmFtZTogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzOiB7IGRhdGE/OiBDb2NrdGFpbFR5cGVbXSB9ID0gYXdhaXQgaHR0cENsaWVudC5nZXQoe1xuICAgICAgc2VydmljZTogJ2NvY2t0YWlsJyxcbiAgICAgIHBheWxvYWQ6IGBuYW1lPSR7bmFtZX1gLFxuICAgIH0pO1xuICAgIHJldHVybiByZXM/LmRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiAoZXJyb3IgYXMgdW5rbm93biBhcyB7IGVyck1zZzogc3RyaW5nIH0pPy5lcnJNc2csXG4gICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgfSk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGdldENvY2t0YWlsQnlOYW1lIH07XG5leHBvcnQgdHlwZSB7IENvY2t0YWlsVHlwZSB9O1xuIl19