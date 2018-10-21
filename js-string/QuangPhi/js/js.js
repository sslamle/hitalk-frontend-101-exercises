var input = document.getElementById('text');
var inputText = document.getElementById('input');
var outputText = document.getElementById('output');

const firstInput = "Chuỗi ban đầu";
const firstOutput = "Chuỗi sau khi xử lý";

var reset = () => {
    inputText.style.color = "black";
    inputText.innerHTML = "";
    outputText.innerHTML = "";
}

var checkNull = (text) => {
    if (text) {
        return true;
    }
    err("Vui lòng nhập dữ liệu để tiếp tục");
    return false;
}

var err = (message) =>{
    setTimeout(() => {
      inputText.innerHTML = message;
      inputText.style.color = "red";
    }, 200);
}

//Bài 1 xóa khoảng trắng trong chuỗi
var bai1 = () => {
    var text = input.value.trim();
    reset();
    if (checkNull(text)) {
        inputText.innerHTML = `${firstInput} :  ${text}`;
        for (let i = 0; i < text.length; i++) {
            text = text.replace(' ', '');
        }
        outputText.innerHTML = `${firstOutput} : ${text}`;
    }
};

var bai2 = () => {
    var text = input.value.trim();
    reset();
    if (checkNull(text)) {
        inputText.innerHTML = `${firstInput} : ${text}`;
        for (let i = text.length - 1; i > 0; i--) {
            if (text[i] == ' ') {
                text = text.substr(i);
                break;
            }
        }
        outputText.innerHTML = `${firstOutput} : ${text}`;
    }
};

// var bai3 = () => {
//     var text = input.value.trim();
//     reset();
//     if (checkNull(text)) {
//         inputText.innerHTML = `${firstInput} : ${text}`;
//         for (let i = 0; i < text.length; i++) {
//             var x = text[i].toUpperCase();
//             if (text[i] == x) {
//                 text = text.replace(text[i], text[i].toLowerCase());
//             } else {
//                 text = text.replace(text[i], x);
//             }
//         }
//         outputText.innerHTML = `${firstOutput} : ${text}`;
//     }
// };

var bai3 = () => {
    var text = input.value.trim();
    reset();
    if (checkNull(text)) {
        inputText.innerHTML = `${firstInput} : ${text}`;
        let arrayText = [];
        for(let i = 0; i < text.length; i++){
            var x = text[i].toUpperCase();
            if(text[i] == x){
                arrayText[i] = text[i].toLowerCase();
            }else{
                arrayText[i] = text[i].toUpperCase();
            }
        }
        outputText.innerHTML = `${firstOutput} : ${arrayText.join('')}`
    }
}


var inputChuoi2 = document.getElementById('text2');
var inputViTri = document.getElementById('text3');
var bai4 = () => {
    var text = input.value.trim();
    var text02 = inputChuoi2.value.trim();
    var index = inputViTri.value.trim();
    reset();
    if (checkNull(text) && checkNull(text02) && checkNull(index)) {
        if (isNaN(index)) {
            err("Vui lòng điền số cho vị trí chèn !");
        } else {
            if (index < 0) {
                err(" Vị trí mảng k thể là số âm !");
                return;
            }
            if (index >= text.length) {
                index = text.length;
            }
            inputText.innerHTML = `${firstInput} : ${text} , chuỗi chèn : ${text02}, Vị trí chèn : ${index}`;
            var resultSet = `${text.substring(0,index)} ${text02} ${text.substr(index)}`;
            outputText.innerHTML = `${firstOutput} : ${resultSet}`;
        }
    }
}

var bai5 = () => {
    var text = input.value.trim();
    reset();
    if (checkNull(text)) {
        inputText.innerHTML = `${firstInput} : ${text}`;
        if (text.length > 10) {
            text = text.substr(0, 10) + '...';
        }
        outputText.innerHTML = `${firstOutput} : ${text}`
    }
}
