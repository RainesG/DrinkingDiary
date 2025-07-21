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
const error_module_1 = require("../utils/error.module");
const getCocktailByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield http_module_1.httpClient.get({
            service: 'cocktail',
            payload: `name=${name}`,
        });
        return res === null || res === void 0 ? void 0 : res.data;
    }
    catch (error) {
        const appError = (0, error_module_1.handleApiError)(error);
        (0, error_module_1.showErrorToast)(appError);
        throw appError;
    }
});
exports.getCocktailByName = getCocktailByName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ja3RhaWxBcGkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29ja3RhaWxBcGkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEyQztBQUMzQyx3REFBdUU7QUFNdkUsTUFBTSxpQkFBaUIsR0FBRyxDQUFPLElBQVksRUFBRSxFQUFFO0lBQy9DLElBQUksQ0FBQztRQUNILE1BQU0sR0FBRyxHQUE4QixNQUFNLHdCQUFVLENBQUMsR0FBRyxDQUFDO1lBQzFELE9BQU8sRUFBRSxVQUFVO1lBQ25CLE9BQU8sRUFBRSxRQUFRLElBQUksRUFBRTtTQUN4QixDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDZixNQUFNLFFBQVEsR0FBRyxJQUFBLDZCQUFjLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBQSw2QkFBYyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sUUFBUSxDQUFDO0lBQ2pCLENBQUM7QUFDSCxDQUFDLENBQUEsQ0FBQztBQUVPLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0dHBDbGllbnQgfSBmcm9tICcuL2h0dHAubW9kdWxlJztcbmltcG9ydCB7IGhhbmRsZUFwaUVycm9yLCBzaG93RXJyb3JUb2FzdCB9IGZyb20gJy4uL3V0aWxzL2Vycm9yLm1vZHVsZSc7XG5cbnR5cGUgQ29ja3RhaWxUeXBlID0ge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG59O1xuXG5jb25zdCBnZXRDb2NrdGFpbEJ5TmFtZSA9IGFzeW5jIChuYW1lOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXM6IHsgZGF0YT86IENvY2t0YWlsVHlwZVtdIH0gPSBhd2FpdCBodHRwQ2xpZW50LmdldCh7XG4gICAgICBzZXJ2aWNlOiAnY29ja3RhaWwnLFxuICAgICAgcGF5bG9hZDogYG5hbWU9JHtuYW1lfWAsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcz8uZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBhcHBFcnJvciA9IGhhbmRsZUFwaUVycm9yKGVycm9yKTtcbiAgICBzaG93RXJyb3JUb2FzdChhcHBFcnJvcik7XG4gICAgdGhyb3cgYXBwRXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGdldENvY2t0YWlsQnlOYW1lIH07XG5leHBvcnQgdHlwZSB7IENvY2t0YWlsVHlwZSB9O1xuIl19