var chieuCao = document.querySelector('#chieuCao');
var canNang = document.querySelector('#canNang');

document.querySelector('#tinhBMI').addEventListener('click', function () {
    var BMI = (parseFloat(canNang.value) / (parseFloat(chieuCao.value) * parseFloat(chieuCao.value)));
    var result;
    if (BMI < 18.5) {
        result = "Chỉ số BMI của bạn : " + BMI.toFixed(2) + " - Thiếu cân";
    } else if (BMI >= 18.5 && BMI <= 25) {
        result = "Chỉ số BMI của bạn : " + BMI.toFixed(2) + " - Người bình thường";
    } else if (BMI > 25) {
        result = "Chỉ số BMI của bạn : " + BMI.toFixed(2) + " - Thừa cân";
    }

    if(result==undefined){
        result = "Bạn phải nhập vào chiều cao và cân nặng!";
    }

    document.querySelector('#result').innerHTML = result;
});