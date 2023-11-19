var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    if(document.contact__form.name.value && document.contact__form.phone.value != ""){
    modal.style.display = "block";
}else{
    alert ( "Вы не заполнили ваше имя или телефон!" );
}
}
span.onclick = function(){
    modal.style.display = "none";
}

