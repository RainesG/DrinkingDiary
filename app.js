"use strict";
const services = require('./server/index');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUUzQyxHQUFHLENBQUM7SUFDRixPQUFPLEVBQUUsUUFBUTtJQUVqQixRQUFRO1FBRU4sT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxNQUFNO0lBRU4sQ0FBQztJQUVELE1BQU07SUFFTixDQUFDO0lBRUQsVUFBVSxFQUFFO1FBQ1YsUUFBUSxFQUFFLElBQUk7S0FDZjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlcnZpY2VzID0gcmVxdWlyZSgnLi9zZXJ2ZXIvaW5kZXgnKTtcbi8vIGFwcC5qc1xuQXBwKHtcbiAgc2VydmljZTogc2VydmljZXMsXG5cbiAgb25MYXVuY2goKSB7XG4gICAgLy8gTWluaSBQcm9ncmFtIGluaXRpYWxpemF0aW9uIGxvZ2ljXG4gICAgY29uc29sZS5sb2coJ01pbmkgUHJvZ3JhbSBsYXVuY2hlZCcpO1xuICB9LFxuXG4gIG9uU2hvdygpIHtcbiAgICAvLyBNaW5pIFByb2dyYW0gc2hvd24gbG9naWNcbiAgfSxcblxuICBvbkhpZGUoKSB7XG4gICAgLy8gTWluaSBQcm9ncmFtIGhpZGRlbiBsb2dpY1xuICB9LFxuXG4gIGdsb2JhbERhdGE6IHtcbiAgICB1c2VySW5mbzogbnVsbCxcbiAgfSxcbn0pO1xuIl19