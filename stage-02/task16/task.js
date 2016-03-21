/**
 * Created by Sina_lifeng on 2016/3/21.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = new Object();
;

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var cityValue = document.getElementById('aqi-city-input').value;
    var qualityValue = document.getElementById('aqi-value-input').value;
    aqiData.city = "北京";
    aqiData.quality = 60;
    return aqiData;
}

 alert(addAqiData());


/**
 * 渲染aqi-table表格
 */
function renderAqiList() {

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    alert(addAqiData());
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
    // do sth.

    renderAqiList();
}

function init() {
    // 点击时触发addBtnHandle函数
   // var addBtn = document.getElementById('add-btn');
   // addBtn.onclick = addBtnHandle();

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();