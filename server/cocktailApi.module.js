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
const error_module_1 = require("@/utils/error.module");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ja3RhaWxBcGkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29ja3RhaWxBcGkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEyQztBQUMzQyx1REFBc0U7QUFNdEUsTUFBTSxpQkFBaUIsR0FBRyxDQUFPLElBQVksRUFBRSxFQUFFO0lBQy9DLElBQUksQ0FBQztRQUNILE1BQU0sR0FBRyxHQUE4QixNQUFNLHdCQUFVLENBQUMsR0FBRyxDQUFDO1lBQzFELE9BQU8sRUFBRSxVQUFVO1lBQ25CLE9BQU8sRUFBRSxRQUFRLElBQUksRUFBRTtTQUN4QixDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDZixNQUFNLFFBQVEsR0FBRyxJQUFBLDZCQUFjLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBQSw2QkFBYyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sUUFBUSxDQUFDO0lBQ2pCLENBQUM7QUFDSCxDQUFDLENBQUEsQ0FBQztBQUVPLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0dHBDbGllbnQgfSBmcm9tICcuL2h0dHAubW9kdWxlJztcbmltcG9ydCB7IGhhbmRsZUFwaUVycm9yLCBzaG93RXJyb3JUb2FzdCB9IGZyb20gJ0AvdXRpbHMvZXJyb3IubW9kdWxlJztcblxudHlwZSBDb2NrdGFpbFR5cGUgPSB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn07XG5cbmNvbnN0IGdldENvY2t0YWlsQnlOYW1lID0gYXN5bmMgKG5hbWU6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlczogeyBkYXRhPzogQ29ja3RhaWxUeXBlW10gfSA9IGF3YWl0IGh0dHBDbGllbnQuZ2V0KHtcbiAgICAgIHNlcnZpY2U6ICdjb2NrdGFpbCcsXG4gICAgICBwYXlsb2FkOiBgbmFtZT0ke25hbWV9YCxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzPy5kYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGFwcEVycm9yID0gaGFuZGxlQXBpRXJyb3IoZXJyb3IpO1xuICAgIHNob3dFcnJvclRvYXN0KGFwcEVycm9yKTtcbiAgICB0aHJvdyBhcHBFcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IHsgZ2V0Q29ja3RhaWxCeU5hbWUgfTtcbmV4cG9ydCB0eXBlIHsgQ29ja3RhaWxUeXBlIH07XG4iXX0=