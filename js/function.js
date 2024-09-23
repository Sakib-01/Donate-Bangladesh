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
  const amountChange = parseFloat(amount - am);
  console.log(am, amount, amountChange);
  return amountChange;
}

function historyUpdate(id, id2) {
  const inputAmount = parseFloat(document.getElementById(id).value);
  const history = document.getElementById("history-container");
  history.innerHTML += `
      <div
          id="history-content"
          class="border-2 border:rgba(17, 17, 17, 0.1) rounded-3xl p-8"
        >
          <h3 class="text-txtpPrimary">
            ${inputAmount} Taka is Donated for famine-2024 at ${id2}, Bangladesh
          </h3>
          <p class="text-txtSecondary">
            Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)
          </p>
        </div>
      </div>
      <br>
  `;
  history.appendChild(updateHistory);
  return;
}
