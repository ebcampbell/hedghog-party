var nameInput = document.querySelector("#name-input");
var hogletInput = document.querySelector("#hoglet-input");
var allergiesInput = document.querySelector("#allergies-input");
var inviteBtn = document.querySelector("#invite-btn");
var dataContainer = document.querySelector(".data");

inviteBtn.addEventListener("click", displayInfo);

function displayInfo() {
  dataContainer.innerHTML += `<div class="rows">
    <p class="name">${nameInput.value}</p>
    <p class="hoglets">${hogletInput.value}</p>
    <p class="allergies">${allergiesInput.value}</p>
    <button class="uninvite-btn" type="button" name="button">uninvite</button>
  </div>`

  var uninviteBtn = document.querySelector(".uninvite-btn");
  uninviteBtn.addEventListener("click", removeHedgehog);
}

function removeHedgehog() {
  event.target.parentElement.remove();
}
