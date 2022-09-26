var loginForm = document.getElementById('login_form');
var regForm = document.getElementById('reg_form');
var btnDesign = document.getElementById('btn_design');

function logform() {
    if(window.matchMedia('(max-width: 768px').matches) {
        loginForm.style.left = "-500px";
        regForm.style.left = "11%";
        btnDesign.style.left = "110px";
    }

    if(window.matchMedia('(max-width: 991px').matches) {
        loginForm.style.left = "-500px";
        regForm.style.left = "12%";
        btnDesign.style.left = "110px";
    } else {
        loginForm.style.left = "-500px";
        regForm.style.left = "15%";
        btnDesign.style.left="110px";
    }

}

function regform() {
    if(window.matchMedia('(max-width: 768px').matches) {
        loginForm.style.left = "11%";
        regForm.style.left = "450px";
        btnDesign.style.left = "0px";
    }

    if(window.matchMedia('(max-width: 991px').matches) {
        loginForm.style.left = "12%";
        regForm.style.left = "450px";
        btnDesign.style.left = "0px";
    } else {
        loginForm.style.left = "15%";
        regForm.style.left = "450px";
        btnDesign.style.left="0px";
    }
}