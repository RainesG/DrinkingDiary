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
const index_module_1 = require("@/server/index.module");
const error_module_1 = require("@/utils/error.module");
Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') &&
            wx.canIUse('open-data.type.userNickName'),
        searchValue: '',
        drinkInfo: {},
        cocktails: [],
        ingredients: [],
    },
    onLoad() {
        this.getTrendCocktails();
    },
    onInputChange(e) {
        this.setData({ searchValue: e.detail.value });
    },
    getCocktailByName() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (!this.data.searchValue) {
                    wx.showToast({ title: '请输入', icon: 'none' });
                    return;
                }
                const cocktailInfo = yield (0, index_module_1.getCocktailInfo)(this.data.searchValue);
                console.log(cocktailInfo, 'info log');
                if (((cocktailInfo === null || cocktailInfo === void 0 ? void 0 : cocktailInfo.length) || 0) > 0) {
                    this.setData({
                        drinkInfo: cocktailInfo === null || cocktailInfo === void 0 ? void 0 : cocktailInfo[0],
                        ingredients: (_a = cocktailInfo === null || cocktailInfo === void 0 ? void 0 : cocktailInfo[0]) === null || _a === void 0 ? void 0 : _a.ingredients,
                    });
                }
                else {
                    (0, error_module_1.showErrorToast)({ code: '200', message: JSON.stringify(cocktailInfo) });
                }
            }
            catch (error) {
                const appError = (0, error_module_1.handleApiError)(error);
                (0, error_module_1.showErrorToast)(appError);
            }
        });
    },
    getTrendCocktails() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const trends = yield (0, index_module_1.getTrendCocktails)();
                console.log(trends, 'trends log');
                if (((trends === null || trends === void 0 ? void 0 : trends.length) || 0) > 0) {
                    this.setData({
                        cocktails: trends,
                    });
                }
                else {
                    (0, error_module_1.showErrorToast)({ code: '200', message: JSON.stringify(trends) });
                }
            }
            catch (error) {
                const appError = (0, error_module_1.handleApiError)(error);
                (0, error_module_1.showErrorToast)(appError);
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdEQUkrQjtBQUMvQix1REFBc0U7QUFFdEUsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxxQkFBcUIsRUFBRSxLQUFLO1FBQzVCLGVBQWUsRUFDYixFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1lBQzFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUM7UUFDM0MsV0FBVyxFQUFFLEVBQUU7UUFDZixTQUFTLEVBQUUsRUFBa0I7UUFDN0IsU0FBUyxFQUFFLEVBQW9CO1FBQy9CLFdBQVcsRUFBRSxFQUErQztLQUM3RDtJQUVELE1BQU07UUFDSixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsYUFBYSxDQUFDLENBQTZCO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFSyxpQkFBaUI7OztZQUNyQixJQUFJLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQzNCLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUM3QyxPQUFPO2dCQUNULENBQUM7Z0JBRUQsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFBLDhCQUFlLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxDQUFBLFlBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRSxNQUFNLEtBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsU0FBUyxFQUFFLFlBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRyxDQUFDLENBQUM7d0JBQzVCLFdBQVcsRUFBRSxNQUFBLFlBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRyxDQUFDLENBQUMsMENBQUUsV0FBVztxQkFDNUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7cUJBQU0sQ0FBQztvQkFDTixJQUFBLDZCQUFjLEVBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDekUsQ0FBQztZQUNILENBQUM7WUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO2dCQUNmLE1BQU0sUUFBUSxHQUFHLElBQUEsNkJBQWMsRUFBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkMsSUFBQSw2QkFBYyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLENBQUM7UUFDSCxDQUFDO0tBQUE7SUFFSyxpQkFBaUI7O1lBQ3JCLElBQUksQ0FBQztnQkFDSCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsZ0NBQWlCLEdBQUUsQ0FBQztnQkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxNQUFNLEtBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQzlCLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsU0FBUyxFQUFFLE1BQU07cUJBQ2xCLENBQUMsQ0FBQztnQkFDTCxDQUFDO3FCQUFNLENBQUM7b0JBQ04sSUFBQSw2QkFBYyxFQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ25FLENBQUM7WUFDSCxDQUFDO1lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztnQkFDZixNQUFNLFFBQVEsR0FBRyxJQUFBLDZCQUFjLEVBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUEsNkJBQWMsRUFBQyxRQUFRLENBQUMsQ0FBQztZQUMzQixDQUFDO1FBQ0gsQ0FBQztLQUFBO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZ2V0Q29ja3RhaWxJbmZvLFxuICBnZXRUcmVuZENvY2t0YWlscyxcbiAgQ29ja3RhaWxUeXBlLFxufSBmcm9tICdAL3NlcnZlci9pbmRleC5tb2R1bGUnO1xuaW1wb3J0IHsgaGFuZGxlQXBpRXJyb3IsIHNob3dFcnJvclRvYXN0IH0gZnJvbSAnQC91dGlscy9lcnJvci5tb2R1bGUnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHVzZXJJbmZvOiB7fSxcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxuICAgIGNhbklVc2VHZXRVc2VyUHJvZmlsZTogZmFsc2UsXG4gICAgY2FuSVVzZU9wZW5EYXRhOlxuICAgICAgd3guY2FuSVVzZSgnb3Blbi1kYXRhLnR5cGUudXNlckF2YXRhclVybCcpICYmXG4gICAgICB3eC5jYW5JVXNlKCdvcGVuLWRhdGEudHlwZS51c2VyTmlja05hbWUnKSxcbiAgICBzZWFyY2hWYWx1ZTogJycsXG4gICAgZHJpbmtJbmZvOiB7fSBhcyBDb2NrdGFpbFR5cGUsXG4gICAgY29ja3RhaWxzOiBbXSBhcyBDb2NrdGFpbFR5cGVbXSxcbiAgICBpbmdyZWRpZW50czogW10gYXMgeyBtZWFzdXJlOiBzdHJpbmc7IGluZ3JlZGllbnQ6IHN0cmluZyB9W10sXG4gIH0sXG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuZ2V0VHJlbmRDb2NrdGFpbHMoKTtcbiAgfSxcblxuICBvbklucHV0Q2hhbmdlKGU6IHsgZGV0YWlsOiB7IHZhbHVlOiBhbnkgfSB9KSB7XG4gICAgdGhpcy5zZXREYXRhKHsgc2VhcmNoVmFsdWU6IGUuZGV0YWlsLnZhbHVlIH0pO1xuICB9LFxuXG4gIGFzeW5jIGdldENvY2t0YWlsQnlOYW1lKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXRoaXMuZGF0YS5zZWFyY2hWYWx1ZSkge1xuICAgICAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+ivt+i+k+WFpScsIGljb246ICdub25lJyB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb2NrdGFpbEluZm8gPSBhd2FpdCBnZXRDb2NrdGFpbEluZm8odGhpcy5kYXRhLnNlYXJjaFZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKGNvY2t0YWlsSW5mbywgJ2luZm8gbG9nJyk7XG4gICAgICBpZiAoKGNvY2t0YWlsSW5mbz8ubGVuZ3RoIHx8IDApID4gMCkge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGRyaW5rSW5mbzogY29ja3RhaWxJbmZvPy5bMF0sXG4gICAgICAgICAgaW5ncmVkaWVudHM6IGNvY2t0YWlsSW5mbz8uWzBdPy5pbmdyZWRpZW50cyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG93RXJyb3JUb2FzdCh7IGNvZGU6ICcyMDAnLCBtZXNzYWdlOiBKU09OLnN0cmluZ2lmeShjb2NrdGFpbEluZm8pIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBhcHBFcnJvciA9IGhhbmRsZUFwaUVycm9yKGVycm9yKTtcbiAgICAgIHNob3dFcnJvclRvYXN0KGFwcEVycm9yKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZ2V0VHJlbmRDb2NrdGFpbHMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRyZW5kcyA9IGF3YWl0IGdldFRyZW5kQ29ja3RhaWxzKCk7XG4gICAgICBjb25zb2xlLmxvZyh0cmVuZHMsICd0cmVuZHMgbG9nJyk7XG4gICAgICBpZiAoKHRyZW5kcz8ubGVuZ3RoIHx8IDApID4gMCkge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGNvY2t0YWlsczogdHJlbmRzLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dFcnJvclRvYXN0KHsgY29kZTogJzIwMCcsIG1lc3NhZ2U6IEpTT04uc3RyaW5naWZ5KHRyZW5kcykgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IGFwcEVycm9yID0gaGFuZGxlQXBpRXJyb3IoZXJyb3IpO1xuICAgICAgc2hvd0Vycm9yVG9hc3QoYXBwRXJyb3IpO1xuICAgIH1cbiAgfSxcbn0pO1xuIl19