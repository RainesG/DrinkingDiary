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
            service: 'recipe',
            payload: `s=${name}`,
        });
        return res === null || res === void 0 ? void 0 : res.data;
    }
    catch (error) {
        throw error;
    }
});
exports.getCocktailByName = getCocktailByName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ja3RhaWxBcGkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29ja3RhaWxBcGkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEyQztBQU0zQyxNQUFNLGlCQUFpQixHQUFHLENBQU8sSUFBWSxFQUFFLEVBQUU7SUFDL0MsSUFBSTtRQUNGLE1BQU0sR0FBRyxHQUEwQyxNQUFNLHdCQUFVLENBQUMsR0FBRyxDQUFDO1lBQ3RFLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtTQUNyQixDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxJQUFJLENBQUM7S0FDbEI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE1BQU0sS0FBSyxDQUFDO0tBQ2I7QUFDSCxDQUFDLENBQUEsQ0FBQztBQUVPLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0dHBDbGllbnQgfSBmcm9tICcuL2h0dHAubW9kdWxlJztcblxudHlwZSBDb2NrdGFpbFR5cGUgPSB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn07XG5cbmNvbnN0IGdldENvY2t0YWlsQnlOYW1lID0gYXN5bmMgKG5hbWU6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlczogeyBkYXRhPzogeyBkcmlua3M6IENvY2t0YWlsVHlwZVtdIH0gfSA9IGF3YWl0IGh0dHBDbGllbnQuZ2V0KHtcbiAgICAgIHNlcnZpY2U6ICdyZWNpcGUnLFxuICAgICAgcGF5bG9hZDogYHM9JHtuYW1lfWAsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcz8uZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IHsgZ2V0Q29ja3RhaWxCeU5hbWUgfTtcbmV4cG9ydCB0eXBlIHsgQ29ja3RhaWxUeXBlIH07XG4iXX0=