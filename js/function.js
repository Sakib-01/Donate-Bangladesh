// create function

function getMoney(id) {
  const amount = parseFloat(document.getElementById("total-amount").innerText);
  const inputAmount = parseFloat(document.getElementById(id).value);
  if (isNaN(inputAmount) || inputAmount <= 0 || inputAmount > amount) {
    return 0;
  }
  return inputAmount;
}

function setMoney(ia, da) {
  const amount = parseFloat(document.getElementById("total-amount").innerText);
  const inputAmount = parseFloat(document.getElementById(ia).value);
  if (
    isNaN(inputAmount) ||
    inputAmount <= 0 ||
    inputAmount > amount ||
    inputAmount !== "number"
  ) {
    return 0;
  }
  const donateElement = parseFloat(document.getElementById(da).innerText);
  const donate = inputAmount + donateElement;

  document.getElementById(da).innerText = donate;
}

function totalAmount(id, id2) {
  const modal = document.getElementById(id2);
  const am = parseFloat(document.getElementById(id).value);
  const amount = parseFloat(document.getElementById("total-amount").innerText);
  if (am > amount || isNaN(am) || am <= 0 || am !== "number") {
    alert("Please enter a valid donation amount.");
    return 0;
  }
  const amountChange = amount - am;
  modal.showModal();
  document.getElementById("total-amount").innerText = amountChange;
  console.log(am, amount, amountChange);
  return amountChange;
}

function historyUpdate(id, id2) {
  const inputAmount = parseFloat(document.getElementById(id).value);
  const history = document.getElementById("history-container");
  const amount = parseFloat(document.getElementById("total-amount").innerText);
  if (
    inputAmount > amount ||
    isNaN(inputAmount) ||
    inputAmount <= 0 ||
    inputAmount !== "number"
  ) {
    return 0;
  }
  const historyEntry = document.createElement("div");
  historyEntry.id = "history-content";
  historyEntry.className =
    "border-2 border:rgba(17, 17, 17, 0.1) rounded-3xl p-8";
  historyEntry.innerHTML = `
      <h3 class="text-txtpPrimary">
        ${inputAmount} Taka is Donated for famine-2024 at ${id2}, Bangladesh
      </h3>
      <p class="text-txtSecondary">
        Date : ${new Date().toString()}
      </p>
      <br>
  `;

  history.insertBefore(historyEntry, history.firstChild);

  document.getElementById(id).value = "";
}
