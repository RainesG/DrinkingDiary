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
        ingredients: [''],
    },
    onLoad() { },
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
            }
            catch (error) {
                const appError = (0, error_module_1.handleApiError)(error);
                (0, error_module_1.showErrorToast)(appError);
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdEQUF3RTtBQUN4RSx1REFBc0U7QUFFdEUsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxxQkFBcUIsRUFBRSxLQUFLO1FBQzVCLGVBQWUsRUFDYixFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1lBQzFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUM7UUFDM0MsV0FBVyxFQUFFLEVBQUU7UUFDZixTQUFTLEVBQUUsRUFBa0I7UUFDN0IsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDO0tBQ2xCO0lBRUQsTUFBTSxLQUFJLENBQUM7SUFFWCxhQUFhLENBQUMsQ0FBNkI7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVLLGlCQUFpQjs7WUFDckIsSUFBSSxDQUFDO2dCQUNILE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBQSxnQ0FBaUIsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNwRSxNQUFNLE1BQU0sR0FBRyxZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksTUFBTSxFQUFFLENBQUM7b0JBQ1gsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUU7d0JBQ25FLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQzs0QkFDbkQsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDakMsQ0FBQzt3QkFDRCxPQUFPLFdBQVcsQ0FBQztvQkFDckIsQ0FBQyxFQUFFLEVBQWMsQ0FBQyxDQUFDO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDO1lBQ0gsQ0FBQztZQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7Z0JBQ2YsTUFBTSxRQUFRLEdBQUcsSUFBQSw2QkFBYyxFQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QyxJQUFBLDZCQUFjLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0IsQ0FBQztRQUNILENBQUM7S0FBQTtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENvY2t0YWlsQnlOYW1lLCBDb2NrdGFpbFR5cGUgfSBmcm9tICdAL3NlcnZlci9pbmRleC5tb2R1bGUnO1xuaW1wb3J0IHsgaGFuZGxlQXBpRXJyb3IsIHNob3dFcnJvclRvYXN0IH0gZnJvbSAnQC91dGlscy9lcnJvci5tb2R1bGUnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHVzZXJJbmZvOiB7fSxcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxuICAgIGNhbklVc2VHZXRVc2VyUHJvZmlsZTogZmFsc2UsXG4gICAgY2FuSVVzZU9wZW5EYXRhOlxuICAgICAgd3guY2FuSVVzZSgnb3Blbi1kYXRhLnR5cGUudXNlckF2YXRhclVybCcpICYmXG4gICAgICB3eC5jYW5JVXNlKCdvcGVuLWRhdGEudHlwZS51c2VyTmlja05hbWUnKSxcbiAgICBzZWFyY2hWYWx1ZTogJycsXG4gICAgZHJpbmtJbmZvOiB7fSBhcyBDb2NrdGFpbFR5cGUsXG4gICAgaW5ncmVkaWVudHM6IFsnJ10sXG4gIH0sXG5cbiAgb25Mb2FkKCkge30sXG5cbiAgb25JbnB1dENoYW5nZShlOiB7IGRldGFpbDogeyB2YWx1ZTogYW55IH0gfSkge1xuICAgIHRoaXMuc2V0RGF0YSh7IHNlYXJjaFZhbHVlOiBlLmRldGFpbC52YWx1ZSB9KTtcbiAgfSxcblxuICBhc3luYyBnZXRDb2NrdGFpbEJ5TmFtZSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29ja3RhaWxJbmZvID0gYXdhaXQgZ2V0Q29ja3RhaWxCeU5hbWUodGhpcy5kYXRhLnNlYXJjaFZhbHVlKTtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGNvY2t0YWlsSW5mbz8uWzBdO1xuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICBjb25zdCBpbmdyZWRpZW50cyA9IE9iamVjdC5rZXlzKHRhcmdldCkucmVkdWNlKChpbmdyZWRpZW50cywgaXRlbSkgPT4ge1xuICAgICAgICAgIGlmICh0YXJnZXRbaXRlbV0gJiYgaXRlbS5pbmNsdWRlcygnc3RySW5ncmVkaWVudCcpKSB7XG4gICAgICAgICAgICBpbmdyZWRpZW50cy5wdXNoKHRhcmdldFtpdGVtXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBpbmdyZWRpZW50cztcbiAgICAgICAgfSwgW10gYXMgc3RyaW5nW10pO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgICAgICB0aGlzLnNldERhdGEoeyBkcmlua0luZm86IHRhcmdldCwgaW5ncmVkaWVudHMgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IGFwcEVycm9yID0gaGFuZGxlQXBpRXJyb3IoZXJyb3IpO1xuICAgICAgc2hvd0Vycm9yVG9hc3QoYXBwRXJyb3IpO1xuICAgIH1cbiAgfSxcbn0pO1xuIl19