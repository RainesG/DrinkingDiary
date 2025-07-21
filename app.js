"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services = require("./server/index.module");
App({
    service: services,
    onLaunch() {
        console.log('Mini Program launched');
    },
    onShow() {
    },
    onHide() {
    },
    globalData: {
        userInfo: null,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQWtEO0FBRWxELEdBQUcsQ0FBQztJQUNGLE9BQU8sRUFBRSxRQUFRO0lBRWpCLFFBQVE7UUFFTixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELE1BQU07SUFFTixDQUFDO0lBRUQsTUFBTTtJQUVOLENBQUM7SUFFRCxVQUFVLEVBQUU7UUFDVixRQUFRLEVBQUUsSUFBSTtLQUNmO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc2VydmljZXMgZnJvbSAnLi9zZXJ2ZXIvaW5kZXgubW9kdWxlJztcbi8vIGFwcC5qc1xuQXBwKHtcbiAgc2VydmljZTogc2VydmljZXMsXG5cbiAgb25MYXVuY2goKSB7XG4gICAgLy8gTWluaSBQcm9ncmFtIGluaXRpYWxpemF0aW9uIGxvZ2ljXG4gICAgY29uc29sZS5sb2coJ01pbmkgUHJvZ3JhbSBsYXVuY2hlZCcpO1xuICB9LFxuXG4gIG9uU2hvdygpIHtcbiAgICAvLyBNaW5pIFByb2dyYW0gc2hvd24gbG9naWNcbiAgfSxcblxuICBvbkhpZGUoKSB7XG4gICAgLy8gTWluaSBQcm9ncmFtIGhpZGRlbiBsb2dpY1xuICB9LFxuXG4gIGdsb2JhbERhdGE6IHtcbiAgICB1c2VySW5mbzogbnVsbCxcbiAgfSxcbn0pO1xuIl19