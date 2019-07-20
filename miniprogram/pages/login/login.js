"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../api/index");
Page({
    data: {},
    onLoad: function () {
        wx.login({
            success: function (res) {
                wx.request({
                    url: "" + index_1.SERVER_PATH,
                    data: {
                        code: res.code
                    }
                });
            }
        });
    },
    getUserInfo: function (result) {
        var userInfo = result.detail.userInfo;
        if (!userInfo)
            return wx.showModal({
                title: '',
                content: '需要获取个人信息，请务必同意哟~',
                confirmText: '好的了解',
                showCancel: false,
            });
        console.log(result.detail.cloudID);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHlDQUV3QjtBQUV4QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUUsRUFFTDtJQUNELE1BQU07UUFDSixFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxZQUFFLEdBQUc7Z0JBQ1YsRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDVCxHQUFHLEVBQUUsS0FBRyxtQkFBYTtvQkFDckIsSUFBSSxFQUFFO3dCQUNKLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtxQkFDZjtpQkFDRixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFdBQVcsWUFBRSxNQUE2QjtRQUV0QyxJQUFBLGlDQUFRLENBQ087UUFFakIsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ2pDLEtBQUssRUFBRSxFQUFFO2dCQUNULE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLFdBQVcsRUFBRSxNQUFNO2dCQUNuQixVQUFVLEVBQUUsS0FBSzthQUNsQixDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDcEMsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQmluZEdldFVzZXJJbmZvUmVzdWx0LFxyXG59IGZyb20gJy4uLy4uL3R5cGVzJ1xyXG5pbXBvcnQge1xyXG4gIFNFUlZFUl9QQVRILFxyXG59IGZyb20gJy4uLy4uL2FwaS9pbmRleCdcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuXHJcbiAgfSxcclxuICBvbkxvYWQgKCkge1xyXG4gICAgd3gubG9naW4oe1xyXG4gICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogYCR7U0VSVkVSX1BBVEh9YCxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgY29kZTogcmVzLmNvZGVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZ2V0VXNlckluZm8gKHJlc3VsdDogQmluZEdldFVzZXJJbmZvUmVzdWx0KSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHVzZXJJbmZvLFxyXG4gICAgfSA9IHJlc3VsdC5kZXRhaWxcclxuICAgIC8vIOayoeacieeUqOaIt+S/oeaBr+adg+mZkO+8jOWPi+WlveaPkOekulxyXG4gICAgaWYgKCF1c2VySW5mbykgcmV0dXJuIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgY29udGVudDogJ+mcgOimgeiOt+WPluS4quS6uuS/oeaBr++8jOivt+WKoeW/heWQjOaEj+WTn34nLFxyXG4gICAgICBjb25maXJtVGV4dDogJ+WlveeahOS6huinoycsXHJcbiAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kZXRhaWwuY2xvdWRJRClcclxuICB9XHJcbn0pXHJcbiJdfQ==