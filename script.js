 var userMoney = prompt("Hisobingizdagi pul miqdorini so'mda kiriting?");
 var moneyYev = 11650.34;
 var moneyDol = 10650.34;
 var moneyTotal = 500 * moneyDol + 250 * moneyDol + 120 * moneyYev;
 var saytText = document.querySelector("p");

 if (0 < userMoney && userMoney > moneyTotal) {
     saytText.textContent = " Oq yo'l,Alisher!"

 } else if (0 < userMoney && userMoney < moneyTotal) {
     saytText.textContent = "Alisher, ozgina sabr qilish kerak bo'lar ekan."

 } else {
     saytText.textContent = "Iltimos pul miqdorini raqamlarda kiriting!"
 }