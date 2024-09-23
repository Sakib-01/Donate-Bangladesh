// create function

function getMoney(id) {
  const inputAmount = parseFloat(document.getElementById(id).value);
  return inputAmount;
}

function setMoney(id) {
  const donateElement = parseFloat(document.getElementById(id).innerText);
  return donateElement;
}

function totalAmount(id) {
  const am = parseFloat(document.getElementById(id).value);
  const amount = parseFloat(document.getElementById("total-amount").innerText);
  if (am > amount || isNaN(am) || am <= 0) {
    alert("Please enter a valid donation amount.");
    return 0;
  }
  const amountChange = amount - am;
  document.getElementById("total-amount").innerText = amountChange;

  console.log(am, amount, amountChange);
  return amountChange;
}

function historyUpdate(id, id2) {
  const inputAmount = parseFloat(document.getElementById(id).value);
  const history = document.getElementById("history-container");
  const amount = parseFloat(document.getElementById("total-amount").innerText);
  if (inputAmount > amount || isNaN(inputAmount) || inputAmount <= 0) {
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

  // Append the new history entry to the history container
  history.appendChild(historyEntry);
}

// function showModal() {
//   const modal = document.getElementById("my_modal_5");
//   modal.showModal();
// }
