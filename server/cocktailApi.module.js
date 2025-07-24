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
exports.getTrendCocktails = exports.getCocktailInfo = void 0;
const http_module_1 = require("./http.module");
const error_module_1 = require("@/utils/error.module");
const getCocktailInfo = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield http_module_1.httpClient.get({
            url: '/api/getCocktailInfo',
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
exports.getCocktailInfo = getCocktailInfo;
const getTrendCocktails = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield http_module_1.httpClient.get({
            url: '/api/getTrendCocktails',
        });
        return res === null || res === void 0 ? void 0 : res.data;
    }
    catch (error) {
        const appError = (0, error_module_1.handleApiError)(error);
        (0, error_module_1.showErrorToast)(appError);
        throw appError;
    }
});
exports.getTrendCocktails = getTrendCocktails;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ja3RhaWxBcGkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29ja3RhaWxBcGkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLCtDQUEyQztBQUMzQyx1REFBc0U7QUFldEUsTUFBTSxlQUFlLEdBQUcsQ0FBTyxJQUFZLEVBQUUsRUFBRTtJQUM3QyxJQUFJLENBQUM7UUFDSCxNQUFNLEdBQUcsR0FBOEIsTUFBTSx3QkFBVSxDQUFDLEdBQUcsQ0FBQztZQUMxRCxHQUFHLEVBQUUsc0JBQXNCO1lBQzNCLE9BQU8sRUFBRSxRQUFRLElBQUksRUFBRTtTQUN4QixDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDZixNQUFNLFFBQVEsR0FBRyxJQUFBLDZCQUFjLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBQSw2QkFBYyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sUUFBUSxDQUFDO0lBQ2pCLENBQUM7QUFDSCxDQUFDLENBQUEsQ0FBQztBQWVPLDBDQUFlO0FBYnhCLE1BQU0saUJBQWlCLEdBQUcsR0FBUyxFQUFFO0lBQ25DLElBQUksQ0FBQztRQUNILE1BQU0sR0FBRyxHQUE4QixNQUFNLHdCQUFVLENBQUMsR0FBRyxDQUFDO1lBQzFELEdBQUcsRUFBRSx3QkFBd0I7U0FDOUIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2YsTUFBTSxRQUFRLEdBQUcsSUFBQSw2QkFBYyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUEsNkJBQWMsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixNQUFNLFFBQVEsQ0FBQztJQUNqQixDQUFDO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFFd0IsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU5HUkVESUVOVF9UWVBFIH0gZnJvbSAnQC90eXBlcyc7XG5pbXBvcnQgeyBodHRwQ2xpZW50IH0gZnJvbSAnLi9odHRwLm1vZHVsZSc7XG5pbXBvcnQgeyBoYW5kbGVBcGlFcnJvciwgc2hvd0Vycm9yVG9hc3QgfSBmcm9tICdAL3V0aWxzL2Vycm9yLm1vZHVsZSc7XG5cbnR5cGUgQ29ja3RhaWxUeXBlID0ge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRhdGVNb2RpZmllZDogc3RyaW5nO1xuICBhbGNvaG9saWM6IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgdGh1bWI6IHN0cmluZztcbiAgZ2xhc3M6IHN0cmluZztcbiAgaW5ncmVkaWVudHM6IElOR1JFRElFTlRfVFlQRTtcbiAgaW5zdHJ1Y3Rpb25zOiBzdHJpbmc7XG4gIElCQTogc3RyaW5nO1xufTtcblxuY29uc3QgZ2V0Q29ja3RhaWxJbmZvID0gYXN5bmMgKG5hbWU6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlczogeyBkYXRhPzogQ29ja3RhaWxUeXBlW10gfSA9IGF3YWl0IGh0dHBDbGllbnQuZ2V0KHtcbiAgICAgIHVybDogJy9hcGkvZ2V0Q29ja3RhaWxJbmZvJyxcbiAgICAgIHBheWxvYWQ6IGBuYW1lPSR7bmFtZX1gLFxuICAgIH0pO1xuICAgIHJldHVybiByZXM/LmRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgYXBwRXJyb3IgPSBoYW5kbGVBcGlFcnJvcihlcnJvcik7XG4gICAgc2hvd0Vycm9yVG9hc3QoYXBwRXJyb3IpO1xuICAgIHRocm93IGFwcEVycm9yO1xuICB9XG59O1xuXG5jb25zdCBnZXRUcmVuZENvY2t0YWlscyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXM6IHsgZGF0YT86IENvY2t0YWlsVHlwZVtdIH0gPSBhd2FpdCBodHRwQ2xpZW50LmdldCh7XG4gICAgICB1cmw6ICcvYXBpL2dldFRyZW5kQ29ja3RhaWxzJyxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzPy5kYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGFwcEVycm9yID0gaGFuZGxlQXBpRXJyb3IoZXJyb3IpO1xuICAgIHNob3dFcnJvclRvYXN0KGFwcEVycm9yKTtcbiAgICB0aHJvdyBhcHBFcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IHsgZ2V0Q29ja3RhaWxJbmZvLCBnZXRUcmVuZENvY2t0YWlscyB9O1xuZXhwb3J0IHR5cGUgeyBDb2NrdGFpbFR5cGUgfTtcbiJdfQ==