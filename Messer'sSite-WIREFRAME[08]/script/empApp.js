
function ValidateForm(frm) {
    if (frm.First_Name.value == "") { alert('First name is required.'); frm.First_Name.focus(); return false; }
    if (frm.Last_Name.value == "") { alert('Last name is required.'); frm.Last_Name.focus(); return false; }
    if (frm.Email_Address.value == "") { alert('Email address is required.'); frm.Email_Address.focus(); return false; }
    if (frm.Email_Address.value.indexOf("@") < 1 || frm.Email_Address.value.indexOf(".") < 1) { alert('Please enter a valid email address.'); frm.Email_Address.focus(); return false; }
    if (frm.Position.value == "") { alert('Position is required.'); frm.Position.focus(); return false; }
    if (frm.Phone.value == "") { alert('Phone is required.'); frm.Phone.focus(); return false; }
    if (frm.skip_CaptchaCode.value == "") { alert('Enter security code.'); frm.skip_CaptchaCode.focus(); return false; }
    return true;
}
function ReloadCaptchaImage(captchaImageId) {
    var obj = document.getElementById(captchaImageId);
    var src = '' + obj.src;
    obj.src = '';
    var date = new Date();
    var pos = src.indexOf('&rad=');
    if (pos >= 0) { src = src.substr(0, pos); }
    obj.src = src + '&rad=' + date.getTime();
    return false;
}