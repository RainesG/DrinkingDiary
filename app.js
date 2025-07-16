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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQW1EO0FBRW5ELEdBQUcsQ0FBQztJQUNGLE9BQU8sRUFBRSxRQUFRO0lBRWpCLFFBQVE7UUFFTixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELE1BQU07SUFFTixDQUFDO0lBRUQsTUFBTTtJQUVOLENBQUM7SUFFRCxVQUFVLEVBQUU7UUFDVixRQUFRLEVBQUUsSUFBSTtLQUNmO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNlcnZpY2VzID0gcmVxdWlyZSgnLi9zZXJ2ZXIvaW5kZXgubW9kdWxlJyk7XG4vLyBhcHAuanNcbkFwcCh7XG4gIHNlcnZpY2U6IHNlcnZpY2VzLFxuXG4gIG9uTGF1bmNoKCkge1xuICAgIC8vIE1pbmkgUHJvZ3JhbSBpbml0aWFsaXphdGlvbiBsb2dpY1xuICAgIGNvbnNvbGUubG9nKCdNaW5pIFByb2dyYW0gbGF1bmNoZWQnKTtcbiAgfSxcblxuICBvblNob3coKSB7XG4gICAgLy8gTWluaSBQcm9ncmFtIHNob3duIGxvZ2ljXG4gIH0sXG5cbiAgb25IaWRlKCkge1xuICAgIC8vIE1pbmkgUHJvZ3JhbSBoaWRkZW4gbG9naWNcbiAgfSxcblxuICBnbG9iYWxEYXRhOiB7XG4gICAgdXNlckluZm86IG51bGwsXG4gIH0sXG59KTtcbiJdfQ==