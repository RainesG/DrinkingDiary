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
        const res = yield http_module_1.httpClient.post({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ja3RhaWxBcGkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29ja3RhaWxBcGkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLCtDQUEyQztBQUMzQyx1REFBc0U7QUFldEUsTUFBTSxpQkFBaUIsR0FBRyxDQUFPLElBQVksRUFBRSxFQUFFO0lBQy9DLElBQUksQ0FBQztRQUNILE1BQU0sR0FBRyxHQUE4QixNQUFNLHdCQUFVLENBQUMsSUFBSSxDQUFDO1lBQzNELE9BQU8sRUFBRSxVQUFVO1lBQ25CLE9BQU8sRUFBRSxRQUFRLElBQUksRUFBRTtTQUN4QixDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDZixNQUFNLFFBQVEsR0FBRyxJQUFBLDZCQUFjLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBQSw2QkFBYyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sUUFBUSxDQUFDO0lBQ2pCLENBQUM7QUFDSCxDQUFDLENBQUEsQ0FBQztBQUVPLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElOR1JFRElFTlRfVFlQRSB9IGZyb20gJ0AvdHlwZXMnO1xuaW1wb3J0IHsgaHR0cENsaWVudCB9IGZyb20gJy4vaHR0cC5tb2R1bGUnO1xuaW1wb3J0IHsgaGFuZGxlQXBpRXJyb3IsIHNob3dFcnJvclRvYXN0IH0gZnJvbSAnQC91dGlscy9lcnJvci5tb2R1bGUnO1xuXG50eXBlIENvY2t0YWlsVHlwZSA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBkYXRlTW9kaWZpZWQ6IHN0cmluZztcbiAgYWxjb2hvbGljOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIHRodW1iOiBzdHJpbmc7XG4gIGdsYXNzOiBzdHJpbmc7XG4gIGluZ3JlZGllbnRzOiBJTkdSRURJRU5UX1RZUEU7XG4gIGluc3RydWN0aW9uczogc3RyaW5nO1xuICBJQkE6IHN0cmluZztcbn07XG5cbmNvbnN0IGdldENvY2t0YWlsQnlOYW1lID0gYXN5bmMgKG5hbWU6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlczogeyBkYXRhPzogQ29ja3RhaWxUeXBlW10gfSA9IGF3YWl0IGh0dHBDbGllbnQucG9zdCh7XG4gICAgICBzZXJ2aWNlOiAnY29ja3RhaWwnLFxuICAgICAgcGF5bG9hZDogYG5hbWU9JHtuYW1lfWAsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcz8uZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBhcHBFcnJvciA9IGhhbmRsZUFwaUVycm9yKGVycm9yKTtcbiAgICBzaG93RXJyb3JUb2FzdChhcHBFcnJvcik7XG4gICAgdGhyb3cgYXBwRXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGdldENvY2t0YWlsQnlOYW1lIH07XG5leHBvcnQgdHlwZSB7IENvY2t0YWlsVHlwZSB9O1xuIl19