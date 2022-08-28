const name = prompt("Please enter your name");

function padTo2Digits(num) {
  return String(num).padStart(2, "0");
}

(function showTime() {
  let today = new Date();

  let currentDate = `${padTo2Digits(today.getHours())}:${padTo2Digits(
    today.getMinutes()
  )}:${padTo2Digits(today.getSeconds())}`;

  document.getElementById("myName").innerText = name;
  document.getElementById("myClock").innerText = currentDate;

  setTimeout(showTime, 1000);
})();
