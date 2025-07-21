"use strict";
Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') &&
            wx.canIUse('open-data.type.userNickName'),
    },
    onLoad() { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxxQkFBcUIsRUFBRSxLQUFLO1FBQzVCLGVBQWUsRUFDYixFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1lBQzFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUM7S0FDNUM7SUFFRCxNQUFNLEtBQUksQ0FBQztDQUNaLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LmpzXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIG1vdHRvOiAnSGVsbG8gV29ybGQnLFxuICAgIHVzZXJJbmZvOiB7fSxcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxuICAgIGNhbklVc2VHZXRVc2VyUHJvZmlsZTogZmFsc2UsXG4gICAgY2FuSVVzZU9wZW5EYXRhOlxuICAgICAgd3guY2FuSVVzZSgnb3Blbi1kYXRhLnR5cGUudXNlckF2YXRhclVybCcpICYmXG4gICAgICB3eC5jYW5JVXNlKCdvcGVuLWRhdGEudHlwZS51c2VyTmlja05hbWUnKSxcbiAgfSxcblxuICBvbkxvYWQoKSB7fSxcbn0pO1xuIl19