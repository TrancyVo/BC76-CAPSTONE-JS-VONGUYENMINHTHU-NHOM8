document.getElementById("formREG").onsubmit = function (event) {
  event.preventDefault();
  let data = getValueForm();
  if (data) {
    delete data.passwordConfirmation;
    console.log(data);
    let promise = axios({
      url: "https://shop.cyberlearn.vn/api/Users/signup",
      method: "POST",
      data: data,
    });
    promise
      .then((res) => {
        console.log(res);
        information(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        information(err.response.data.message, "danger");
      });
  }
};

function getValueForm() {
  let arrField = document.querySelectorAll("#formREG input");

  let khachHang = {};
  let checkRadio = false;
  let flag = true;
  for (let field of arrField) {
    let { name, value } = field;
    if (name == "gender") {
      if (field.checked) {
        khachHang[name] = value == "male" ? true : false;
        checkRadio = true;
      }
    } else {
      khachHang[name] = value;
    }
    // thẻ thông báo
    let theSpanThongBao = field.parentElement.querySelector("span");
    // điều kiện input
    if (!checkEmptyValue(theSpanThongBao, value)) {
      flag = false;
    } else {
      let dataAttributeValue = field.getAttribute("data-validation");
      switch (dataAttributeValue) {
        case "email":
          if (!checkEmailValue(theSpanThongBao, value)) {
            flag = false;
          }
          break;
        case "name":
          if (!checkWordValue(theSpanThongBao, value)) {
            flag = false;
          }
          break;
        case "password":
          if (!checkPassword(theSpanThongBao, value)) {
            flag = false;
          }
          break;
        case "phone":
          if (!checkVNPhoneNumber(theSpanThongBao, value)) {
            flag = false;
          }
          break;
        case "passwordConfirmation":
          if (!checkPasswordConfirmation(theSpanThongBao, value, "password")) {
            flag = false;
          }
          break;
      }
    }
  }
  if (!checkRadio) {
    document.getElementById("genderInform").innerHTML =
      "Vui lòng không bỏ trống";
    flag = false;
  }
  return flag ? khachHang : null;
}

function information(content, status = "success") {
  let bgColor = status == "success" ? "green" : "red";
  Toastify({
    text: content,
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: bgColor,
      borderRadius: "12px",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
