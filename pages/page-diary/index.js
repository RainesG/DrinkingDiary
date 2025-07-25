"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Page({
    data: {
        records: [
            {
                amount: 0,
                id: '123123',
                name: 'test',
            },
        ],
        summary: {
            totalAmount: 0,
            totalAlcohol: 0,
            rating: '',
        },
    },
    onLoad() { },
    updateSummary() {
        let totalAmount = 0;
        let totalAlcohol = 0;
        let rating = '';
        if (totalAlcohol > 200) {
            rating = 'Wow, you can drink so much!';
        }
        else if (totalAlcohol > 100) {
            rating = 'Impressive capacity!';
        }
        else if (totalAlcohol > 0) {
            rating = 'Enjoy responsibly!';
        }
        else {
            rating = 'No drinks today!';
        }
        this.setData({
            summary: {
                totalAmount,
                totalAlcohol: parseFloat(totalAlcohol.toFixed(1)),
                rating,
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRTtZQUNQO2dCQUNFLE1BQU0sRUFBRSxDQUFDO2dCQUNULEVBQUUsRUFBRSxRQUFRO2dCQUNaLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FPQTtRQUNILE9BQU8sRUFBRTtZQUNQLFdBQVcsRUFBRSxDQUFDO1lBQ2QsWUFBWSxFQUFFLENBQUM7WUFDZixNQUFNLEVBQUUsRUFBRTtTQUNYO0tBQ0Y7SUFFRCxNQUFNLEtBQUksQ0FBQztJQUVYLGFBQWE7UUFFWCxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLFlBQVksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUN2QixNQUFNLEdBQUcsNkJBQTZCLENBQUM7UUFDekMsQ0FBQzthQUFNLElBQUksWUFBWSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQzlCLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQztRQUNsQyxDQUFDO2FBQU0sSUFBSSxZQUFZLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDNUIsTUFBTSxHQUFHLG9CQUFvQixDQUFDO1FBQ2hDLENBQUM7YUFBTSxDQUFDO1lBQ04sTUFBTSxHQUFHLGtCQUFrQixDQUFDO1FBQzlCLENBQUM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsT0FBTyxFQUFFO2dCQUNQLFdBQVc7Z0JBQ1gsWUFBWSxFQUFFLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxNQUFNO2FBQ1A7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRheWpzID0gcmVxdWlyZSgnZGF5anMnKTtcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICByZWNvcmRzOiBbXG4gICAgICB7XG4gICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgaWQ6ICcxMjMxMjMnLFxuICAgICAgICBuYW1lOiAndGVzdCcsXG4gICAgICB9LFxuICAgIF0gYXMge1xuICAgICAgYW1vdW50OiBudW1iZXI7XG4gICAgICBpZDogc3RyaW5nO1xuICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgdGh1bWI/OiBzdHJpbmc7XG4gICAgICBkYXRlPzogZGF5anMuRGF5anM7XG4gICAgfVtdLFxuICAgIHN1bW1hcnk6IHtcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxuICAgICAgdG90YWxBbGNvaG9sOiAwLFxuICAgICAgcmF0aW5nOiAnJyxcbiAgICB9LFxuICB9LFxuXG4gIG9uTG9hZCgpIHt9LFxuXG4gIHVwZGF0ZVN1bW1hcnkoKSB7XG4gICAgLy8gR2V0IGFsbCByZWNvcmRzIGZvciBzZWxlY3RlZERhdGVcbiAgICBsZXQgdG90YWxBbW91bnQgPSAwO1xuICAgIGxldCB0b3RhbEFsY29ob2wgPSAwO1xuICAgIGxldCByYXRpbmcgPSAnJztcbiAgICBpZiAodG90YWxBbGNvaG9sID4gMjAwKSB7XG4gICAgICByYXRpbmcgPSAnV293LCB5b3UgY2FuIGRyaW5rIHNvIG11Y2ghJztcbiAgICB9IGVsc2UgaWYgKHRvdGFsQWxjb2hvbCA+IDEwMCkge1xuICAgICAgcmF0aW5nID0gJ0ltcHJlc3NpdmUgY2FwYWNpdHkhJztcbiAgICB9IGVsc2UgaWYgKHRvdGFsQWxjb2hvbCA+IDApIHtcbiAgICAgIHJhdGluZyA9ICdFbmpveSByZXNwb25zaWJseSEnO1xuICAgIH0gZWxzZSB7XG4gICAgICByYXRpbmcgPSAnTm8gZHJpbmtzIHRvZGF5ISc7XG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBzdW1tYXJ5OiB7XG4gICAgICAgIHRvdGFsQW1vdW50LFxuICAgICAgICB0b3RhbEFsY29ob2w6IHBhcnNlRmxvYXQodG90YWxBbGNvaG9sLnRvRml4ZWQoMSkpLFxuICAgICAgICByYXRpbmcsXG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxufSk7XG4iXX0=