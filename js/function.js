// create function

function getMoney(id) {
  const inputAmount = parseFloat(document.getElementById(id).value);

  if (isNaN(inputAmount) || inputAmount <= 0) {
    alert("Please enter a valid donation amount.");
    return 0;
  }

  return inputAmount;
}

function setMoney(id) {
  const donateElement = parseFloat(document.getElementById(id).innerText);
  return donateElement;
}

function totalAmount(id) {
  const am = parseFloat(document.getElementById(id).value);
  const amount = parseFloat(document.getElementById("total-amount").innerText);
  const amountChange = amount - am;
  if (am > amount) {
    alert("The entered amount exceeds the total available amount.");
    return 0;
  }

  console.log(am, amount, amountChange);
  return amountChange;
}

function historyUpdate(id, location) {
  const inputAmount = parseFloat(document.getElementById(id).value);
  const amount = parseFloat(document.getElementById("total-amount").innerText);

  if (isNaN(inputAmount) || inputAmount <= 0 || inputAmount > amount) {
    return 0;
  }
  const historyContent = document.createElement("div");
  historyContent.id = "history-content";
  historyContent.className =
    "border-2 border:rgba(17, 17, 17, 0.1) rounded-3xl p-8";
  historyContent.innerHTML = `
      <h3 class="text-txtpPrimary">
        ${inputAmount} Taka is Donated for famine-2024 at ${location}, Bangladesh
      </h3>
      <p class="text-txtSecondary">
        Date: ${new Date().toLocaleString()} 
      </p>
  `;
  const history = document.getElementById("history-container");
  history.appendChild(historyContent);
}

// function showModal() {
//   const modal = document.getElementById("my_modal_5");
//   modal.showModal();
// }
