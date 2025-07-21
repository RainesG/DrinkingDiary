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
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDREQUE0RTtBQUU1RSxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBQ25ELHFCQUFxQixFQUFFLEtBQUs7UUFDNUIsZUFBZSxFQUNiLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7WUFDMUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQztRQUMzQyxXQUFXLEVBQUUsRUFBRTtRQUNmLFNBQVMsRUFBRSxFQUFrQjtRQUM3QixXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUM7S0FDbEI7SUFFRCxNQUFNLEtBQUksQ0FBQztJQUVYLGNBQWM7UUFFWixFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ2hCLElBQUksRUFBRSxrQ0FBa0M7WUFDeEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUNiLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO29CQUN0QixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxhQUFhLENBQUMsQ0FBNkI7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVLLGlCQUFpQjs7WUFDckIsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFBLGdDQUFpQixFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDcEUsTUFBTSxNQUFNLEdBQUcsWUFBWSxhQUFaLFlBQVksdUJBQVosWUFBWSxDQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksTUFBTSxFQUFFLENBQUM7Z0JBQ1gsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUU7b0JBQ25FLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQzt3QkFDbkQsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDakMsQ0FBQztvQkFDRCxPQUFPLFdBQVcsQ0FBQztnQkFDckIsQ0FBQyxFQUFFLEVBQWMsQ0FBQyxDQUFDO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQ25ELENBQUM7aUJBQU0sQ0FBQztnQkFDTixFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUNwRCxDQUFDO1FBQ0gsQ0FBQztLQUFBO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q29ja3RhaWxCeU5hbWUsIENvY2t0YWlsVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZlci9pbmRleC5tb2R1bGUnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHVzZXJJbmZvOiB7fSxcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxuICAgIGNhbklVc2VHZXRVc2VyUHJvZmlsZTogZmFsc2UsXG4gICAgY2FuSVVzZU9wZW5EYXRhOlxuICAgICAgd3guY2FuSVVzZSgnb3Blbi1kYXRhLnR5cGUudXNlckF2YXRhclVybCcpICYmXG4gICAgICB3eC5jYW5JVXNlKCdvcGVuLWRhdGEudHlwZS51c2VyTmlja05hbWUnKSxcbiAgICBzZWFyY2hWYWx1ZTogJycsXG4gICAgZHJpbmtJbmZvOiB7fSBhcyBDb2NrdGFpbFR5cGUsXG4gICAgaW5ncmVkaWVudHM6IFsnJ10sXG4gIH0sXG5cbiAgb25Mb2FkKCkge30sXG5cbiAgZ2V0VXNlclByb2ZpbGUoKSB7XG4gICAgLy8gR2V0IHVzZXIgaW5mb1xuICAgIHd4LmdldFVzZXJQcm9maWxlKHtcbiAgICAgIGRlc2M6ICdVc2VkIHRvIGRpc3BsYXkgdXNlciBpbmZvcm1hdGlvbicsXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcblxuICBvbklucHV0Q2hhbmdlKGU6IHsgZGV0YWlsOiB7IHZhbHVlOiBhbnkgfSB9KSB7XG4gICAgdGhpcy5zZXREYXRhKHsgc2VhcmNoVmFsdWU6IGUuZGV0YWlsLnZhbHVlIH0pO1xuICB9LFxuXG4gIGFzeW5jIGdldENvY2t0YWlsQnlOYW1lKCkge1xuICAgIGNvbnN0IGNvY2t0YWlsSW5mbyA9IGF3YWl0IGdldENvY2t0YWlsQnlOYW1lKHRoaXMuZGF0YS5zZWFyY2hWYWx1ZSk7XG4gICAgY29uc3QgdGFyZ2V0ID0gY29ja3RhaWxJbmZvPy5bMF07XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgY29uc3QgaW5ncmVkaWVudHMgPSBPYmplY3Qua2V5cyh0YXJnZXQpLnJlZHVjZSgoaW5ncmVkaWVudHMsIGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKHRhcmdldFtpdGVtXSAmJiBpdGVtLmluY2x1ZGVzKCdzdHJJbmdyZWRpZW50JykpIHtcbiAgICAgICAgICBpbmdyZWRpZW50cy5wdXNoKHRhcmdldFtpdGVtXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZ3JlZGllbnRzO1xuICAgICAgfSwgW10gYXMgc3RyaW5nW10pO1xuICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7IGRyaW5rSW5mbzogdGFyZ2V0LCBpbmdyZWRpZW50cyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6ICfmnKrmn6XliLDmraTmrL7puKHlsL7phZInLCBpY29uOiAnbm9uZScgfSk7XG4gICAgfVxuICB9LFxufSk7XG4iXX0=