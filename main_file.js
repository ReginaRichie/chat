document.getElementById('button_log_in').onclick = () => {
    document.getElementById('modal').style.display = 'flex'
}

document.getElementById('close_app').onclick = () => {
    document.getElementById("modal").style.display = 'none'
}

document.getElementById('button_registration').onclick = () => {
    document.getElementById("modal_registration").style.display = 'flex'
}

document.getElementById('close_app_2').onclick = () => {
    document.getElementById("modal_registration").style.display = 'none'
}

//document.getElementById('login_button').onclick = () => {
//    window.location.replace("chat_page/chat_page.html")
//}


function loadXMLDoc() {
    let formData = new FormData();
    formData.append('login', document.getElementById("login").value)
    formData.append('password', document.getElementById("Password").value)
    xmlhttp = new XMLHttpRequest()
    xmlhttp.open('POST', 'http://ev-gen.ru:3000')
    xmlhttp.send(formData)

    xmlhttp.onload = function(){
        if (xmlhttp.status !== 200){
            alert( 'Ошибка: ' + xmlhttp.status);
        }else{
            alert('Все ок: ' + xmlhttp.response)
        }
    }
}
