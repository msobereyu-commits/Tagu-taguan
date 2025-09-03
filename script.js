let hidingSpot = Math.floor(Math.random() * 3) + 1;
let found = false;

console.log("Nakatago ang bata sa pintuan:", hidingSpot); // Debug

function chooseDoor(doorNumber) {
  if (found) return; // tigil kung nahanap na

  let message = document.getElementById("message");

  if (doorNumber === hidingSpot) {
    document.getElementById("child" + doorNumber).style.display = "block";
    message.innerHTML = "🎉 Nahanap mo ang bata! 🧒";
    found = true;
  } else {
    message.innerHTML = "😅 Wala dito... subukan ulit!";
  }
}

function resetGame() {
  for (let i = 1; i <= 3; i++) {
    document.getElementById("child" + i).style.display = "none";
  }
  hidingSpot = Math.floor(Math.random() * 3) + 1;
  found = false;
  document.getElementById("message").innerHTML = "🕵️ Hanapin ulit ang bata!";
  console.log("Bagong hiding spot:", hidingSpot); // Debug
}
