"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_module_1 = require("../../utils/util.module");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBcUQ7QUFFckQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUU7S0FDVDtJQUNELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQ3pDLENBQUMsR0FBMkIsRUFBRSxFQUFFO2dCQUM5QixPQUFPO29CQUNMLElBQUksRUFBRSxJQUFBLHdCQUFVLEVBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQy9CLFNBQVMsRUFBRSxHQUFHO2lCQUNmLENBQUM7WUFDSixDQUFDLENBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwubW9kdWxlJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBsb2dzOiBbXSxcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBsb2dzOiAod3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXSkubWFwKFxuICAgICAgICAobG9nOiBzdHJpbmcgfCBudW1iZXIgfCBEYXRlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGU6IGZvcm1hdFRpbWUobmV3IERhdGUobG9nKSksXG4gICAgICAgICAgICB0aW1lU3RhbXA6IGxvZyxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICApLFxuICAgIH0pO1xuICB9LFxufSk7XG4iXX0=