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
const app = getApp();
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
                    app.globalData.trends = trends;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdEQUkrQjtBQUMvQix1REFBc0U7QUFDdEUsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFFckIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxxQkFBcUIsRUFBRSxLQUFLO1FBQzVCLGVBQWUsRUFDYixFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1lBQzFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUM7UUFDM0MsV0FBVyxFQUFFLEVBQUU7UUFDZixTQUFTLEVBQUUsRUFBa0I7UUFDN0IsU0FBUyxFQUFFLEVBQW9CO1FBQy9CLFdBQVcsRUFBRSxFQUErQztLQUM3RDtJQUVELE1BQU07UUFDSixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsYUFBYSxDQUFDLENBQTZCO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFSyxpQkFBaUI7OztZQUNyQixJQUFJLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQzNCLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUM3QyxPQUFPO2dCQUNULENBQUM7Z0JBRUQsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFBLDhCQUFlLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxDQUFBLFlBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRSxNQUFNLEtBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsU0FBUyxFQUFFLFlBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRyxDQUFDLENBQUM7d0JBQzVCLFdBQVcsRUFBRSxNQUFBLFlBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRyxDQUFDLENBQUMsMENBQUUsV0FBVztxQkFDNUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7cUJBQU0sQ0FBQztvQkFDTixJQUFBLDZCQUFjLEVBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDekUsQ0FBQztZQUNILENBQUM7WUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO2dCQUNmLE1BQU0sUUFBUSxHQUFHLElBQUEsNkJBQWMsRUFBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkMsSUFBQSw2QkFBYyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLENBQUM7UUFDSCxDQUFDO0tBQUE7SUFFSyxpQkFBaUI7O1lBQ3JCLElBQUksQ0FBQztnQkFDSCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsZ0NBQWlCLEdBQUUsQ0FBQztnQkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxNQUFNLEtBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQzlCLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztvQkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWCxTQUFTLEVBQUUsTUFBTTtxQkFDbEIsQ0FBQyxDQUFDO2dCQUNMLENBQUM7cUJBQU0sQ0FBQztvQkFDTixJQUFBLDZCQUFjLEVBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbkUsQ0FBQztZQUNILENBQUM7WUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO2dCQUNmLE1BQU0sUUFBUSxHQUFHLElBQUEsNkJBQWMsRUFBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkMsSUFBQSw2QkFBYyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLENBQUM7UUFDSCxDQUFDO0tBQUE7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBnZXRDb2NrdGFpbEluZm8sXG4gIGdldFRyZW5kQ29ja3RhaWxzLFxuICBDb2NrdGFpbFR5cGUsXG59IGZyb20gJ0Avc2VydmVyL2luZGV4Lm1vZHVsZSc7XG5pbXBvcnQgeyBoYW5kbGVBcGlFcnJvciwgc2hvd0Vycm9yVG9hc3QgfSBmcm9tICdAL3V0aWxzL2Vycm9yLm1vZHVsZSc7XG5jb25zdCBhcHAgPSBnZXRBcHAoKTtcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB1c2VySW5mbzoge30sXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgICBjYW5JVXNlR2V0VXNlclByb2ZpbGU6IGZhbHNlLFxuICAgIGNhbklVc2VPcGVuRGF0YTpcbiAgICAgIHd4LmNhbklVc2UoJ29wZW4tZGF0YS50eXBlLnVzZXJBdmF0YXJVcmwnKSAmJlxuICAgICAgd3guY2FuSVVzZSgnb3Blbi1kYXRhLnR5cGUudXNlck5pY2tOYW1lJyksXG4gICAgc2VhcmNoVmFsdWU6ICcnLFxuICAgIGRyaW5rSW5mbzoge30gYXMgQ29ja3RhaWxUeXBlLFxuICAgIGNvY2t0YWlsczogW10gYXMgQ29ja3RhaWxUeXBlW10sXG4gICAgaW5ncmVkaWVudHM6IFtdIGFzIHsgbWVhc3VyZTogc3RyaW5nOyBpbmdyZWRpZW50OiBzdHJpbmcgfVtdLFxuICB9LFxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmdldFRyZW5kQ29ja3RhaWxzKCk7XG4gIH0sXG5cbiAgb25JbnB1dENoYW5nZShlOiB7IGRldGFpbDogeyB2YWx1ZTogYW55IH0gfSkge1xuICAgIHRoaXMuc2V0RGF0YSh7IHNlYXJjaFZhbHVlOiBlLmRldGFpbC52YWx1ZSB9KTtcbiAgfSxcblxuICBhc3luYyBnZXRDb2NrdGFpbEJ5TmFtZSgpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCF0aGlzLmRhdGEuc2VhcmNoVmFsdWUpIHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6ICfor7fovpPlhaUnLCBpY29uOiAnbm9uZScgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29ja3RhaWxJbmZvID0gYXdhaXQgZ2V0Q29ja3RhaWxJbmZvKHRoaXMuZGF0YS5zZWFyY2hWYWx1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhjb2NrdGFpbEluZm8sICdpbmZvIGxvZycpO1xuICAgICAgaWYgKChjb2NrdGFpbEluZm8/Lmxlbmd0aCB8fCAwKSA+IDApIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBkcmlua0luZm86IGNvY2t0YWlsSW5mbz8uWzBdLFxuICAgICAgICAgIGluZ3JlZGllbnRzOiBjb2NrdGFpbEluZm8/LlswXT8uaW5ncmVkaWVudHMsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd0Vycm9yVG9hc3QoeyBjb2RlOiAnMjAwJywgbWVzc2FnZTogSlNPTi5zdHJpbmdpZnkoY29ja3RhaWxJbmZvKSB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc3QgYXBwRXJyb3IgPSBoYW5kbGVBcGlFcnJvcihlcnJvcik7XG4gICAgICBzaG93RXJyb3JUb2FzdChhcHBFcnJvcik7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGdldFRyZW5kQ29ja3RhaWxzKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0cmVuZHMgPSBhd2FpdCBnZXRUcmVuZENvY2t0YWlscygpO1xuICAgICAgY29uc29sZS5sb2codHJlbmRzLCAndHJlbmRzIGxvZycpO1xuICAgICAgaWYgKCh0cmVuZHM/Lmxlbmd0aCB8fCAwKSA+IDApIHtcbiAgICAgICAgYXBwLmdsb2JhbERhdGEudHJlbmRzID0gdHJlbmRzO1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGNvY2t0YWlsczogdHJlbmRzLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dFcnJvclRvYXN0KHsgY29kZTogJzIwMCcsIG1lc3NhZ2U6IEpTT04uc3RyaW5naWZ5KHRyZW5kcykgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IGFwcEVycm9yID0gaGFuZGxlQXBpRXJyb3IoZXJyb3IpO1xuICAgICAgc2hvd0Vycm9yVG9hc3QoYXBwRXJyb3IpO1xuICAgIH1cbiAgfSxcbn0pO1xuIl19