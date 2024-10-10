// ------- KIỂM TRA DỮ LIỆU RỖNG -------
function checkEmptyValue(theThongBao, value) {
  if (value.trim() == "") {
    theThongBao.innerHTML = "Vui lòng không bỏ trống";
    return false;
  } else {
    theThongBao.innerHTML = "";
    return true;
  }
}
// ------- KIỂM TRA GIỚI HẠN KÝ TỰ -------
function checkMinMaxValue(theThongBao, value, min, max) {
  if (value.length < min || value.length > max) {
    theThongBao.innerHTML = `Vui lòng nhập dữ liệu có độ dài từ ${min} tới ${max} ký tự`;
    return false;
  } else {
    theThongBao.innerHTML = "";
    return true;
  }
}
// ------- KIỂM TRA DỮ LIỆU CHỮ -------
function checkWordValue(theThongBao, value) {
  let regexWord =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừữựỳỵỷỹ\s]+$/;
  let checkWord = regexWord.test(value); // T/F
  if (!checkWord) {
    theThongBao.innerHTML = "Vui lòng nhập dữ liệu chữ";
    return false;
  } else {
    theThongBao.innerHTML = "";
    return true;
  }
}
// ------- KIỂM TRA ĐỊNH DẠNG EMAIL -------
function checkEmailValue(theThongBao, value) {
  let regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let checkEmail = regexEmail.test(value);
  if (!checkEmail) {
    theThongBao.innerHTML = "Vui lòng nhập đúng định dạng email";
    return false;
  } else {
    theThongBao.innerHTML = "";
    return true;
  }
}
// ------- KIỂM TRA DỮ LIỆU CÓ 1 KÝ TỰ SỐ, 1 CHỮ CÁI IN HOA, 1 KÝ TỰ ĐẶC BIỆT -------
function checkPassword(theThongBao, value) {
  let regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/;
  let checkPassword = regexPassword.test(value);
  if (!checkPassword) {
    theThongBao.innerHTML =
      "Vui lòng nhập mật khẩu có ít nhất 1 ký tự số, 1 chữ cái in hoa và 1 ký tự đặc biệt";
    return false;
  } else {
    theThongBao.innerHTML = "";
    return true;
  }
}
// ------- KIỂM TRA PASSWORD CONFIRMATION -------
function checkPasswordConfirmation(theThongBao, value, idInputPassword) {
  let passwordValue = document.getElementById(idInputPassword).value;
  if (value !== passwordValue) {
    theThongBao.innerHTML = "Vui lòng nhập lại đúng mật khẩu";
    return false;
  } else {
    theThongBao.innerHTML = "";
    return true;
  }
}
// ------- KIỂM TRA DỮ LIỆU MM/DD/YYYY -------
function checkMonthDateYear(theThongBao, value) {
  let regexMonthDateYear =
    /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(\d{4})$/;
  let checkMonthDateYear = regexMonthDateYear.test(value);
  if (!checkMonthDateYear) {
    theThongBao.innerHTML = "Vui lòng nhập ngày làm theo định dạng MM/DD/YYYY";
    return false;
  } else {
    theThongBao.innerHTML = "";
    return true;
  }
}
// ------- KIỂM TRA SỐ NGUYÊN DƯƠNG -------
function checkSoNguyenDuong(theThongBao, value) {
  let regexSoNguyenDuong = /^[1-9][0-9]*$/;
  let checkSoNguyenDuong = regexSoNguyenDuong.test(value);
  if (!checkSoNguyenDuong) {
    theThongBao.innerHTML = "Vui lòng nhập dữ liệu số";
    return false;
  } else {
    theThongBao.innerHTML = "";
    return true;
  }
}
// ------- KIỂM TRA LƯƠNG CĂN BẢN (1,000,000 - 20,000,000) -------
function checkLimit(theThongBao, value, min, max, donVi) {
  if (value < min || value > max) {
    theThongBao.innerHTML = `Vui lòng nhập dữ liệu khoảng từ ${min} tới ${max} ${donVi}`;
    return false;
  } else {
    theThongBao.innerHTML = "";
    return true;
  }
}

// ------- KIỂM TRA ĐỊNH DẠNG SĐT -------
function checkVNPhoneNumber(theThongBao, value) {
  let regexPhoneNumber =
    /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/;
  let checkVNPhoneNumber = regexPhoneNumber.test(value);
  if (!checkVNPhoneNumber) {
    theThongBao.innerHTML =
      "Vui lòng nhập đúng định dạng số điện thoại di động Việt Nam";
    return false;
  } else {
    theThongBao.innerHTML = "";
    return true;
  }
}
