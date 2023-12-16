let auth = window.localStorage.getItem("auth");

if (auth != "ok") {
  window.location.href = "loginpage.html";
}

//Sepete Ekleme Kısmı

 // Arttır ve azalt butonlarını seçelim
 var buttons = document.querySelectorAll(".arttir-azalt");

 // Butonlara tıklandığında çalışacak fonksiyonu tanımlayalım
 buttons.forEach(function(button) {
   button.onclick = function() {
     // Spandaki sayıyı seçelim
     var span = document.getElementById("sayi");
     var type = button.getAttribute("data-type");

     if (type === "arttir") {
       // Sayıyı bir arttıralım ve span'a atayalım
       span.innerHTML = parseInt(span.innerHTML) + 1;
     } else if (type === "azalt") {
       // Sayı 0'dan küçükse sayıyı değiştirmeyelim
       if (parseInt(span.innerHTML) > 0) {
         // Sayıyı bir azaltalım ve span'a atayalım
         span.innerHTML = parseInt(span.innerHTML) - 1;
       }
     }
   }
 });