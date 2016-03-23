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

    // 验证输入框
    function checkInputValue() {
        inputValue = Input.value;
        if (inputValue) {
            if (inputValue.match(/^-?[1-9]\d*$/)) {
                if (inputValue > 100 || inputValue < 10) {
                    alert('请输入10-100之间的正整数!');
                    return false;
                } else {
                    return inputValue;
                    return true;
                }
            } else {
                alert('请输入正整数!');
                return false;
            }
        } else {
            alert('不能为空哦！');
            return false;
        }
    }

    // 验证内容
    function checkShowBox() {
        if (showBox.children.length <= 60) {
            return true;
        } else {
            return false;
            alert("最多只能输入60个！")
        }
    }

    // 左侧入
    addLeftBtn.onclick = function () {
        //checkInputValue();
        inputValue = Input.value;
        if (checkInputValue() && checkShowBox()) {
            var _divWrap = document.createElement('div');
            var _div = document.createElement('div');
            _divWrap.className = 'divWrap';
            _div.style.height = inputValue * 3 + 'px';
            _divWrap.appendChild(_div);
            showBox.insertBefore(_divWrap, showBox.childNodes[0]);
        }
    }

    // 右侧入
    addRightBtn.onclick = function () {
        inputValue = Input.value;
        if (checkInputValue() && checkShowBox()) {
            var _divWrap = document.createElement('div');
            var _div = document.createElement('div');
            _divWrap.className = 'divWrap';
            _div.style.height = inputValue * 3 + 'px';
            _divWrap.appendChild(_div);
            showBox.appendChild(_divWrap);
        }
    }

    // 左侧出
    removeLeftBtn.onclick = function () {
        showBox.removeChild(showBox.childNodes[0]);
    }

    // 右侧出
    removeRightBtn.onclick = function () {
        showBox.removeChild(showBox.lastChild);
    }

    // div 点击移除
    showBox.onclick = function (ev) {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if (target.nodeName.toLowerCase() == 'div') {
            showBox.removeChild(target);
        }
    }

})()


