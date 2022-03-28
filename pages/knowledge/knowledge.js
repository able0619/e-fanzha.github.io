// pages/knowledge/knowledge.js
Page({
    

    /**
     * 页面的初始数据
     */
    data: {
        addClass:1,
        top:0,
        show:true,
        show2:false,
        show3:false,
        show4:false,
    },


    // 点击增加class
    addClass(e){
        console.log(e.currentTarget.dataset.addclass-0)
        this.setData({
            addClass:e.currentTarget.dataset.addclass-0,
        })
        this.show(e.currentTarget.dataset.addclass-0)
    },

    show(data){
        if(!this.data.show){
            if(data === 1){
                this.setData({
                    show:!this.data.show,
                    show2:!this.data.show2
                })
            }
        }
        if(!this.data.show2){
            if(data === 2){
                this.setData({
                    show:!this.data.show,
                    show2:!this.data.show2
                })
            }
        }
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})