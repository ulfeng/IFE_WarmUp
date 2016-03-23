/**
 * Created by Sina_lifeng on 2016/3/23.
 */

(function () {
    var Input = document.getElementById('input-num');
    var addLeftBtn = document.getElementById('addLeft');
    var addRightBtn = document.getElementById('addRight');
    var removeLeftBtn = document.getElementById('removeLeft');
    var removeRightBtn = document.getElementById('removeRight');
    var showBox = document.getElementById('show');
    var inputValue;

    // 左侧入
    addLeftBtn.onclick = function () {
        inputValue = Input.value;
        if (inputValue) {
            var _div = document.createElement('div');
            var _text = document.createTextNode(inputValue);
            _div.appendChild(_text);
            showBox.insertBefore(_div, showBox.childNodes[0]);
        } else {
            alert('不能为空哦！');
        }
    }

    // 右侧入
    addRightBtn.onclick = function () {
        inputValue = Input.value;
        if (inputValue) {
            var _div = document.createElement('div');
            var _text = document.createTextNode(inputValue);
            _div.appendChild(_text);
            showBox.appendChild(_div);
        } else {
            alert('不能为空哦！');
        }
    }

    // 左侧出
    removeLeftBtn.onclick = function () {
        var removeText = showBox.childNodes[0].innerHTML;
        showBox.removeChild(showBox.childNodes[0]);
        alert(removeText + '已经被移除！');
    }

    // 右侧出
    removeRightBtn.onclick = function () {
        var removeText = showBox.lastChild.innerHTML;
        showBox.removeChild(showBox.lastChild);
        alert(removeText + '已经被移除！');
    }

    // div 点击移除
    showBox.onclick = function (ev) {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if (target.nodeName.toLowerCase() == 'div') {
            var removeText = target.innerHTML;
            showBox.removeChild(target);
            alert(removeText + '已经被移除！');
        }
    }

})()


