function BMI(weight, height) {
  return weight / (height * height);
}


function phanLoai(bmi) {
  if (bmi < 18.5) {
    return 'Thiếu cân';
  } else if (bmi > 25) {
    return 'Thừa cân';
  } else {
    return 'Cân đối';
  }
}

var show = document.getElementBysId('show');
var showScreen = (message) => { //   In ra màn hình
  show.innerHTML = message;
};

function getBMI() {
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;

  showScreen(""); //Mỗi lần click thì sẽ reset lại...tạo cảm giác chương trình đg run

  var message = ""; //Chứa thông tin hiển thị ra màn hình
  //Nếu người dùng nhập vào dấu ',' hệ thống sẽ chuyển sang dấu '.'
  if (weight.search(',') > 0) {
    // Dùng String.search() kiểm tra người dùng có nhập dấu ',' vào hay không
    // Lớn hơn 0 vì dấu phẩy ở đầu tiên sẽ k đc tính
    weight = weight.replace(',', '.');
    //String.replace() chuyển ',' thành dấu '.' để tiếp tục phép toán
  }
  if (height.search(',') > 0) {
    height = height.replace(',', '.');
  }

  if (weight == "" || height == "") {
    message = "Vui lòng nhập đầy đủ dữ liệu";
  } else if (isNaN(weight) || isNaN(height)) {
    message = "Dữ liệu nhập vào không phải số";
  } else {
    weight = parseFloat(weight);
    height = parseFloat(height);
    if (weight <= 0 || height <= 0) {
      message = "Dữ liệu nhập vào phải lớn hơn 0";
    } else {
      var bmi = BMI(weight, height);
      message = "Chỉ số BMI " + bmi.toFixed(2) + " - " + " Người " + phanLoai(bmi);
    }
  }
  setTimeout(function () { //Dùng setTimout để có time delay
    showScreen(message);
  }, 200);
}