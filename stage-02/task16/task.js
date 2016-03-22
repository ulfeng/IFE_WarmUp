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
var aqiData = {};
var cityValue = document.getElementById('aqi-city-input');
var qualityValue = document.getElementById('aqi-value-input');

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var cityValueTrim = cityValue.value.trim();
    var qualityValueTrim = qualityValue.value.trim();

    // 验证城市名称
    function checkCity() {
        if (cityValueTrim !== "" && cityValueTrim !== null) {
            if (!cityValueTrim.match(/^[A-Za-z\u4E00-\u9FA5]+$/)) {
                alert("城市名称格式错误，请重新输入!");
                return false;
            } else {
                return true;
            }
        } else {
            alert("城市名称不能为空哦！");
            return false;
        }
    }

    // 验证空气质量指数
    function checkQuality() {
        if (qualityValueTrim !== "" && qualityValueTrim !== null) {
            if (!qualityValueTrim.match(/^-?[1-9]\d*$/)) {
                alert("空气质量指数格式错误，请重新输入!");
                return false;
            } else {
                return true;
            }
        } else {
            alert("空气质量指数不能为空哦！");
            return false;
        }
    }

    var checkCityTag = checkCity();
    var checkQualityTag = checkQuality();

    // 返回aqiData
    if (checkCityTag == true && checkQualityTag == true) {
        aqiData[cityValueTrim] = qualityValueTrim;
    }
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var aqiTable = document.getElementById('aqi-table');
    var _html = '<tr> <td>城市</td> <td>空气质量</td> <td>操作</td> </tr>';
    for (var city in aqiData) {
        _html += '<tr><td>' + city + '</td><td>' + aqiData[city] + '</td><td><button data-city="' + city + '">删除</button></td>';
    }
    // 三目运算符
    aqiTable.innerHTML = city ? _html : '';
}

// 添加操作
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

// 删除操作
function delBtnHandle() {
    var city=this.parentNode.parentNode.firstChild.innerHTML;
    delete aqiData[city];
    renderAqiList();
}

// 初始化
function init() {
    var addBtn = document.getElementById('add-btn');
    var tableBtn = document.getElementById('aqi-table');

    addBtn.onclick = function () {
        addBtnHandle();
    }

    // 事件委托
    tableBtn.onclick = function (ev) {
        var ev = ev || window.event;
        var target=ev.target||ev.srcElement;
        if(target.nodeName.toLowerCase()=='button'){
            // call 或 apply
            delBtnHandle.call(target);
        }
    }
}

init();