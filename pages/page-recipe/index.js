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
        ingredients: [],
    },
    onLoad() { },
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
                const cocktailInfo = yield (0, index_module_1.getCocktailByName)(this.data.searchValue);
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdEQUF3RTtBQUN4RSx1REFBc0U7QUFFdEUsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxxQkFBcUIsRUFBRSxLQUFLO1FBQzVCLGVBQWUsRUFDYixFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1lBQzFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUM7UUFDM0MsV0FBVyxFQUFFLEVBQUU7UUFDZixTQUFTLEVBQUUsRUFBa0I7UUFDN0IsV0FBVyxFQUFFLEVBQStDO0tBQzdEO0lBRUQsTUFBTSxLQUFJLENBQUM7SUFFWCxhQUFhLENBQUMsQ0FBNkI7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVLLGlCQUFpQjs7O1lBQ3JCLElBQUksQ0FBQztnQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDM0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQzdDLE9BQU87Z0JBQ1QsQ0FBQztnQkFFRCxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUEsZ0NBQWlCLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxDQUFBLFlBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRSxNQUFNLEtBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsU0FBUyxFQUFFLFlBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRyxDQUFDLENBQUM7d0JBQzVCLFdBQVcsRUFBRSxNQUFBLFlBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRyxDQUFDLENBQUMsMENBQUUsV0FBVztxQkFDNUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7cUJBQU0sQ0FBQztvQkFDTixJQUFBLDZCQUFjLEVBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDekUsQ0FBQztZQUNILENBQUM7WUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO2dCQUNmLE1BQU0sUUFBUSxHQUFHLElBQUEsNkJBQWMsRUFBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkMsSUFBQSw2QkFBYyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLENBQUM7UUFDSCxDQUFDO0tBQUE7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDb2NrdGFpbEJ5TmFtZSwgQ29ja3RhaWxUeXBlIH0gZnJvbSAnQC9zZXJ2ZXIvaW5kZXgubW9kdWxlJztcbmltcG9ydCB7IGhhbmRsZUFwaUVycm9yLCBzaG93RXJyb3JUb2FzdCB9IGZyb20gJ0AvdXRpbHMvZXJyb3IubW9kdWxlJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB1c2VySW5mbzoge30sXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgICBjYW5JVXNlR2V0VXNlclByb2ZpbGU6IGZhbHNlLFxuICAgIGNhbklVc2VPcGVuRGF0YTpcbiAgICAgIHd4LmNhbklVc2UoJ29wZW4tZGF0YS50eXBlLnVzZXJBdmF0YXJVcmwnKSAmJlxuICAgICAgd3guY2FuSVVzZSgnb3Blbi1kYXRhLnR5cGUudXNlck5pY2tOYW1lJyksXG4gICAgc2VhcmNoVmFsdWU6ICcnLFxuICAgIGRyaW5rSW5mbzoge30gYXMgQ29ja3RhaWxUeXBlLFxuICAgIGluZ3JlZGllbnRzOiBbXSBhcyB7IG1lYXN1cmU6IHN0cmluZzsgaW5ncmVkaWVudDogc3RyaW5nIH1bXSxcbiAgfSxcblxuICBvbkxvYWQoKSB7fSxcblxuICBvbklucHV0Q2hhbmdlKGU6IHsgZGV0YWlsOiB7IHZhbHVlOiBhbnkgfSB9KSB7XG4gICAgdGhpcy5zZXREYXRhKHsgc2VhcmNoVmFsdWU6IGUuZGV0YWlsLnZhbHVlIH0pO1xuICB9LFxuXG4gIGFzeW5jIGdldENvY2t0YWlsQnlOYW1lKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXRoaXMuZGF0YS5zZWFyY2hWYWx1ZSkge1xuICAgICAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+ivt+i+k+WFpScsIGljb246ICdub25lJyB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb2NrdGFpbEluZm8gPSBhd2FpdCBnZXRDb2NrdGFpbEJ5TmFtZSh0aGlzLmRhdGEuc2VhcmNoVmFsdWUpO1xuICAgICAgY29uc29sZS5sb2coY29ja3RhaWxJbmZvLCAnaW5mbyBsb2cnKTtcbiAgICAgIGlmICgoY29ja3RhaWxJbmZvPy5sZW5ndGggfHwgMCkgPiAwKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgZHJpbmtJbmZvOiBjb2NrdGFpbEluZm8/LlswXSxcbiAgICAgICAgICBpbmdyZWRpZW50czogY29ja3RhaWxJbmZvPy5bMF0/LmluZ3JlZGllbnRzLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dFcnJvclRvYXN0KHsgY29kZTogJzIwMCcsIG1lc3NhZ2U6IEpTT04uc3RyaW5naWZ5KGNvY2t0YWlsSW5mbykgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IGFwcEVycm9yID0gaGFuZGxlQXBpRXJyb3IoZXJyb3IpO1xuICAgICAgc2hvd0Vycm9yVG9hc3QoYXBwRXJyb3IpO1xuICAgIH1cbiAgfSxcbn0pO1xuIl19