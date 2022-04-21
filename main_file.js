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
    //var login_data = {}
    let formData = new FormData([]);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        var login_data = {}
        login_data['login'] = document.getElementById("login").value
        login_data['password'] = document.getElementById("Password").value
        formData.append(login_data)
     }

    xmlhttp.open("POST", "http://ev-gen.ru:3000", true);
    xtmlhtttp.send(formData)

    xmlhttp.onload = function(){
        if (xmlhttp.status !== 200){
            alert( 'Ошибка: ' + xmlhttp.status);
        }else{
            alert('Все ок: ' + xmlhttp.response + JSON.stringify(formData))
        }
    }
}