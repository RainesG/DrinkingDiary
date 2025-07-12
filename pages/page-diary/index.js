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
const { getCocktailByName } = require('../../server/cocktailApi');
Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') &&
            wx.canIUse('open-data.type.userNickName'),
        searchValue: '',
        drinkInfo: [],
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
            const cocktailInfo = yield getCocktailByName(this.data.searchValue);
            const target = (_a = cocktailInfo === null || cocktailInfo === void 0 ? void 0 : cocktailInfo.drinks) === null || _a === void 0 ? void 0 : _a[0];
            const drinkInfo = Object.keys(target).reduce((infos, item) => {
                if (target[item]) {
                    infos.push({ attribute: item, value: target[item] });
                }
                return infos;
            }, []);
            console.log(drinkInfo);
            this.setData({ drinkInfo });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFFbEUsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxxQkFBcUIsRUFBRSxLQUFLO1FBQzVCLGVBQWUsRUFDYixFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1lBQzFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUM7UUFDM0MsV0FBVyxFQUFFLEVBQUU7UUFDZixTQUFTLEVBQUUsRUFBNEM7S0FDeEQ7SUFFRCxNQUFNLEtBQUksQ0FBQztJQUVYLGNBQWM7UUFFWixFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ2hCLElBQUksRUFBRSxrQ0FBa0M7WUFDeEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUNiLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO29CQUN0QixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxhQUFhLENBQUMsQ0FBNkI7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVLLGlCQUFpQjs7O1lBQ3JCLE1BQU0sWUFBWSxHQUFHLE1BQU0saUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNwRSxNQUFNLE1BQU0sU0FBRyxZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsTUFBTSwwQ0FBRyxDQUFDLENBQUMsQ0FBQztZQUN6QyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FDMUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBQ2QsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUN0RDtnQkFDRCxPQUFPLEtBQUssQ0FBQztZQUNmLENBQUMsRUFDRCxFQUE0QyxDQUM3QyxDQUFDO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQzs7S0FDN0I7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGdldENvY2t0YWlsQnlOYW1lIH0gPSByZXF1aXJlKCcuLi8uLi9zZXJ2ZXIvY29ja3RhaWxBcGknKTtcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB1c2VySW5mbzoge30sXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgICBjYW5JVXNlR2V0VXNlclByb2ZpbGU6IGZhbHNlLFxuICAgIGNhbklVc2VPcGVuRGF0YTpcbiAgICAgIHd4LmNhbklVc2UoJ29wZW4tZGF0YS50eXBlLnVzZXJBdmF0YXJVcmwnKSAmJlxuICAgICAgd3guY2FuSVVzZSgnb3Blbi1kYXRhLnR5cGUudXNlck5pY2tOYW1lJyksXG4gICAgc2VhcmNoVmFsdWU6ICcnLFxuICAgIGRyaW5rSW5mbzogW10gYXMgeyBhdHRyaWJ1dGU6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9W10sXG4gIH0sXG5cbiAgb25Mb2FkKCkge30sXG5cbiAgZ2V0VXNlclByb2ZpbGUoKSB7XG4gICAgLy8gR2V0IHVzZXIgaW5mb1xuICAgIHd4LmdldFVzZXJQcm9maWxlKHtcbiAgICAgIGRlc2M6ICdVc2VkIHRvIGRpc3BsYXkgdXNlciBpbmZvcm1hdGlvbicsXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcblxuICBvbklucHV0Q2hhbmdlKGU6IHsgZGV0YWlsOiB7IHZhbHVlOiBhbnkgfSB9KSB7XG4gICAgdGhpcy5zZXREYXRhKHsgc2VhcmNoVmFsdWU6IGUuZGV0YWlsLnZhbHVlIH0pO1xuICB9LFxuXG4gIGFzeW5jIGdldENvY2t0YWlsQnlOYW1lKCkge1xuICAgIGNvbnN0IGNvY2t0YWlsSW5mbyA9IGF3YWl0IGdldENvY2t0YWlsQnlOYW1lKHRoaXMuZGF0YS5zZWFyY2hWYWx1ZSk7XG4gICAgY29uc3QgdGFyZ2V0ID0gY29ja3RhaWxJbmZvPy5kcmlua3M/LlswXTtcbiAgICBjb25zdCBkcmlua0luZm8gPSBPYmplY3Qua2V5cyh0YXJnZXQpLnJlZHVjZShcbiAgICAgIChpbmZvcywgaXRlbSkgPT4ge1xuICAgICAgICBpZiAodGFyZ2V0W2l0ZW1dKSB7XG4gICAgICAgICAgaW5mb3MucHVzaCh7IGF0dHJpYnV0ZTogaXRlbSwgdmFsdWU6IHRhcmdldFtpdGVtXSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5mb3M7XG4gICAgICB9LFxuICAgICAgW10gYXMgeyBhdHRyaWJ1dGU6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9W11cbiAgICApO1xuICAgIGNvbnNvbGUubG9nKGRyaW5rSW5mbyk7XG4gICAgdGhpcy5zZXREYXRhKHsgZHJpbmtJbmZvIH0pO1xuICB9LFxufSk7XG4iXX0=