"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_module_1 = require("@/utils/util.module");
Page({
    data: {
        logs: [],
    },
    onLoad() {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map((log) => {
                return {
                    date: (0, util_module_1.formatTime)(new Date(log)),
                    timeStamp: log,
                };
            }),
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBaUQ7QUFFakQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUU7S0FDVDtJQUNELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQ3pDLENBQUMsR0FBMkIsRUFBRSxFQUFFO2dCQUM5QixPQUFPO29CQUNMLElBQUksRUFBRSxJQUFBLHdCQUFVLEVBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQy9CLFNBQVMsRUFBRSxHQUFHO2lCQUNmLENBQUM7WUFDSixDQUFDLENBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gJ0AvdXRpbHMvdXRpbC5tb2R1bGUnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGxvZ3M6IFtdLFxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGxvZ3M6ICh3eC5nZXRTdG9yYWdlU3luYygnbG9ncycpIHx8IFtdKS5tYXAoXG4gICAgICAgIChsb2c6IHN0cmluZyB8IG51bWJlciB8IERhdGUpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0ZTogZm9ybWF0VGltZShuZXcgRGF0ZShsb2cpKSxcbiAgICAgICAgICAgIHRpbWVTdGFtcDogbG9nLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICksXG4gICAgfSk7XG4gIH0sXG59KTtcbiJdfQ==