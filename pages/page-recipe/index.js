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
const index_module_1 = require("../../server/index.module");
const error_module_1 = require("../../utils/error.module");
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
        ingredients: [''],
    },
    onLoad() { },
    getUserProfile() {
        wx.getUserProfile({
            desc: 'Used to display user information',
            success: res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true,
                });
            },
        });
    },
    onInputChange(e) {
        this.setData({ searchValue: e.detail.value });
    },
    getCocktailByName() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cocktailInfo = yield (0, index_module_1.getCocktailByName)(this.data.searchValue);
                const target = cocktailInfo === null || cocktailInfo === void 0 ? void 0 : cocktailInfo[0];
                if (target) {
                    const ingredients = Object.keys(target).reduce((ingredients, item) => {
                        if (target[item] && item.includes('strIngredient')) {
                            ingredients.push(target[item]);
                        }
                        return ingredients;
                    }, []);
                    console.log(target);
                    this.setData({ drinkInfo: target, ingredients });
                }
                else {
                    wx.showToast({ title: '未查到此款鸡尾酒', icon: 'none' });
                }
            }
            catch (error) {
                const appError = (0, error_module_1.handleApiError)(error);
                (0, error_module_1.showErrorToast)(appError);
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDREQUE0RTtBQUM1RSwyREFBMEU7QUFFMUUsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxxQkFBcUIsRUFBRSxLQUFLO1FBQzVCLGVBQWUsRUFDYixFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1lBQzFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUM7UUFDM0MsV0FBVyxFQUFFLEVBQUU7UUFDZixTQUFTLEVBQUUsRUFBa0I7UUFDN0IsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDO0tBQ2xCO0lBRUQsTUFBTSxLQUFJLENBQUM7SUFFWCxjQUFjO1FBRVosRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUNoQixJQUFJLEVBQUUsa0NBQWtDO1lBQ3hDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDYixJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtvQkFDdEIsV0FBVyxFQUFFLElBQUk7aUJBQ2xCLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsYUFBYSxDQUFDLENBQTZCO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFSyxpQkFBaUI7O1lBQ3JCLElBQUksQ0FBQztnQkFDSCxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUEsZ0NBQWlCLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDcEUsTUFBTSxNQUFNLEdBQUcsWUFBWSxhQUFaLFlBQVksdUJBQVosWUFBWSxDQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLE1BQU0sRUFBRSxDQUFDO29CQUNYLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFFO3dCQUNuRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUM7NEJBQ25ELFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2pDLENBQUM7d0JBQ0QsT0FBTyxXQUFXLENBQUM7b0JBQ3JCLENBQUMsRUFBRSxFQUFjLENBQUMsQ0FBQztvQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztnQkFDbkQsQ0FBQztxQkFBTSxDQUFDO29CQUNOLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRCxDQUFDO1lBQ0gsQ0FBQztZQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7Z0JBQ2YsTUFBTSxRQUFRLEdBQUcsSUFBQSw2QkFBYyxFQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QyxJQUFBLDZCQUFjLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0IsQ0FBQztRQUNILENBQUM7S0FBQTtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENvY2t0YWlsQnlOYW1lLCBDb2NrdGFpbFR5cGUgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvaW5kZXgubW9kdWxlJztcbmltcG9ydCB7IGhhbmRsZUFwaUVycm9yLCBzaG93RXJyb3JUb2FzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9yLm1vZHVsZSc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgdXNlckluZm86IHt9LFxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gICAgY2FuSVVzZUdldFVzZXJQcm9maWxlOiBmYWxzZSxcbiAgICBjYW5JVXNlT3BlbkRhdGE6XG4gICAgICB3eC5jYW5JVXNlKCdvcGVuLWRhdGEudHlwZS51c2VyQXZhdGFyVXJsJykgJiZcbiAgICAgIHd4LmNhbklVc2UoJ29wZW4tZGF0YS50eXBlLnVzZXJOaWNrTmFtZScpLFxuICAgIHNlYXJjaFZhbHVlOiAnJyxcbiAgICBkcmlua0luZm86IHt9IGFzIENvY2t0YWlsVHlwZSxcbiAgICBpbmdyZWRpZW50czogWycnXSxcbiAgfSxcblxuICBvbkxvYWQoKSB7fSxcblxuICBnZXRVc2VyUHJvZmlsZSgpIHtcbiAgICAvLyBHZXQgdXNlciBpbmZvXG4gICAgd3guZ2V0VXNlclByb2ZpbGUoe1xuICAgICAgZGVzYzogJ1VzZWQgdG8gZGlzcGxheSB1c2VyIGluZm9ybWF0aW9uJyxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxuXG4gIG9uSW5wdXRDaGFuZ2UoZTogeyBkZXRhaWw6IHsgdmFsdWU6IGFueSB9IH0pIHtcbiAgICB0aGlzLnNldERhdGEoeyBzZWFyY2hWYWx1ZTogZS5kZXRhaWwudmFsdWUgfSk7XG4gIH0sXG5cbiAgYXN5bmMgZ2V0Q29ja3RhaWxCeU5hbWUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvY2t0YWlsSW5mbyA9IGF3YWl0IGdldENvY2t0YWlsQnlOYW1lKHRoaXMuZGF0YS5zZWFyY2hWYWx1ZSk7XG4gICAgICBjb25zdCB0YXJnZXQgPSBjb2NrdGFpbEluZm8/LlswXTtcbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgaW5ncmVkaWVudHMgPSBPYmplY3Qua2V5cyh0YXJnZXQpLnJlZHVjZSgoaW5ncmVkaWVudHMsIGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAodGFyZ2V0W2l0ZW1dICYmIGl0ZW0uaW5jbHVkZXMoJ3N0ckluZ3JlZGllbnQnKSkge1xuICAgICAgICAgICAgaW5ncmVkaWVudHMucHVzaCh0YXJnZXRbaXRlbV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaW5ncmVkaWVudHM7XG4gICAgICAgIH0sIFtdIGFzIHN0cmluZ1tdKTtcbiAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgZHJpbmtJbmZvOiB0YXJnZXQsIGluZ3JlZGllbnRzIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6ICfmnKrmn6XliLDmraTmrL7puKHlsL7phZInLCBpY29uOiAnbm9uZScgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IGFwcEVycm9yID0gaGFuZGxlQXBpRXJyb3IoZXJyb3IpO1xuICAgICAgc2hvd0Vycm9yVG9hc3QoYXBwRXJyb3IpO1xuICAgIH1cbiAgfSxcbn0pO1xuIl19