
function getDeviceType() {
    new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    })
}
window.onload = function(){
    getDeviceType()
    console.log("函数调用");
}