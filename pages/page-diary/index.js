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
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const cocktailInfo = yield index_module_1.getCocktailByName(this.data.searchValue);
            const target = (_a = cocktailInfo === null || cocktailInfo === void 0 ? void 0 : cocktailInfo.drinks) === null || _a === void 0 ? void 0 : _a[0];
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
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDREQUE0RTtBQUU1RSxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBQ25ELHFCQUFxQixFQUFFLEtBQUs7UUFDNUIsZUFBZSxFQUNiLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7WUFDMUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQztRQUMzQyxXQUFXLEVBQUUsRUFBRTtRQUNmLFNBQVMsRUFBRSxFQUFrQjtRQUM3QixXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUM7S0FDbEI7SUFFRCxNQUFNLEtBQUksQ0FBQztJQUVYLGNBQWM7UUFFWixFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ2hCLElBQUksRUFBRSxrQ0FBa0M7WUFDeEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUNiLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO29CQUN0QixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxhQUFhLENBQUMsQ0FBNkI7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVLLGlCQUFpQjs7O1lBQ3JCLE1BQU0sWUFBWSxHQUFHLE1BQU0sZ0NBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNwRSxNQUFNLE1BQU0sU0FBRyxZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsTUFBTSwwQ0FBRyxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRTtvQkFDbkUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRTt3QkFDbEQsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztxQkFDaEM7b0JBQ0QsT0FBTyxXQUFXLENBQUM7Z0JBQ3JCLENBQUMsRUFBRSxFQUFjLENBQUMsQ0FBQztnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQzthQUNsRDs7S0FDRjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENvY2t0YWlsQnlOYW1lLCBDb2NrdGFpbFR5cGUgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvaW5kZXgubW9kdWxlJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB1c2VySW5mbzoge30sXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgICBjYW5JVXNlR2V0VXNlclByb2ZpbGU6IGZhbHNlLFxuICAgIGNhbklVc2VPcGVuRGF0YTpcbiAgICAgIHd4LmNhbklVc2UoJ29wZW4tZGF0YS50eXBlLnVzZXJBdmF0YXJVcmwnKSAmJlxuICAgICAgd3guY2FuSVVzZSgnb3Blbi1kYXRhLnR5cGUudXNlck5pY2tOYW1lJyksXG4gICAgc2VhcmNoVmFsdWU6ICcnLFxuICAgIGRyaW5rSW5mbzoge30gYXMgQ29ja3RhaWxUeXBlLFxuICAgIGluZ3JlZGllbnRzOiBbJyddLFxuICB9LFxuXG4gIG9uTG9hZCgpIHt9LFxuXG4gIGdldFVzZXJQcm9maWxlKCkge1xuICAgIC8vIEdldCB1c2VyIGluZm9cbiAgICB3eC5nZXRVc2VyUHJvZmlsZSh7XG4gICAgICBkZXNjOiAnVXNlZCB0byBkaXNwbGF5IHVzZXIgaW5mb3JtYXRpb24nLFxuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG5cbiAgb25JbnB1dENoYW5nZShlOiB7IGRldGFpbDogeyB2YWx1ZTogYW55IH0gfSkge1xuICAgIHRoaXMuc2V0RGF0YSh7IHNlYXJjaFZhbHVlOiBlLmRldGFpbC52YWx1ZSB9KTtcbiAgfSxcblxuICBhc3luYyBnZXRDb2NrdGFpbEJ5TmFtZSgpIHtcbiAgICBjb25zdCBjb2NrdGFpbEluZm8gPSBhd2FpdCBnZXRDb2NrdGFpbEJ5TmFtZSh0aGlzLmRhdGEuc2VhcmNoVmFsdWUpO1xuICAgIGNvbnN0IHRhcmdldCA9IGNvY2t0YWlsSW5mbz8uZHJpbmtzPy5bMF07XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgY29uc3QgaW5ncmVkaWVudHMgPSBPYmplY3Qua2V5cyh0YXJnZXQpLnJlZHVjZSgoaW5ncmVkaWVudHMsIGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKHRhcmdldFtpdGVtXSAmJiBpdGVtLmluY2x1ZGVzKCdzdHJJbmdyZWRpZW50JykpIHtcbiAgICAgICAgICBpbmdyZWRpZW50cy5wdXNoKHRhcmdldFtpdGVtXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZ3JlZGllbnRzO1xuICAgICAgfSwgW10gYXMgc3RyaW5nW10pO1xuICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7IGRyaW5rSW5mbzogdGFyZ2V0LCBpbmdyZWRpZW50cyB9KTtcbiAgICB9XG4gIH0sXG59KTtcbiJdfQ==