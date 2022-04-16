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
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
    //     if (this.readyState === 4 && this.status === 200){
    //         document.getElementById("login_button").innerHTML = this.responseText
    //     }
     }
    xmlhttp.open("GET", "http://ev-gen.ru:10000", true);
    xmlhttp.send();

    xmlhttp.onload = function(){
        if (xmlhttp.status !== 200){
            alert( 'Ошибка: ' + xmlhttp.status);
        }else{
            alert('Все ок: ' + xmlhttp.response)
        }
    }
}