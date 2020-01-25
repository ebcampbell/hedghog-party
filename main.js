var nameInput = document.querySelector("#name-input");
var hogletInput = document.querySelector("#hoglet-input");
var allergiesInput = document.querySelector("#allergies-input");
var inviteBtn = document.querySelector("#invite-btn");
var dataContainer = document.querySelector(".data");
var uninviteBtn = document.querySelector(".uninvite-btn");

inviteBtn.addEventListener("click", displayInfo);
dataContainer.addEventListener("click", removeHedgehog);
nameInput.addEventListener("input", enableInviteBtn);
hogletInput.addEventListener("input", enableInviteBtn);
allergiesInput.addEventListener("input", enableInviteBtn);

function displayInfo() {
  dataContainer.innerHTML += `<div class="rows">
    <p class="name">${nameInput.value}</p>
    <p class="hoglets">${hogletInput.value}</p>
    <p class="allergies">${allergiesInput.value}</p>
    <button class="uninvite-btn" type="button" name="button">uninvite</button>
  </div>`;

  clearInputs();
}

function removeHedgehog() {
  event.target.parentElement.remove();
}

function enableInviteBtn() {
  if (nameInput.value !== "" && hogletInput.value !== "" && allergiesInput.value !== "") {
    inviteBtn.disabled = false;
  } else {
    inviteBtn.disabled = true;
  }
}

function clearInputs() {
  nameInput.value = "";
  hogletInput.value = "";
  allergiesInput.value = "";
}
