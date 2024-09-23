const donateContainer = document.getElementById("donate-container");
const historyContainer = document.getElementById("history-container");
// const btnDonateNow = document.querySelectorAll("donate-now");
const Noakhali = document.getElementById("Noakhali").innerText;
const Feni = document.getElementById("Feni").innerText;
const quotaMovement = document.getElementById("Quota-Movement").innerText;

document.getElementById("btn-donate").addEventListener("click", function () {
  historyContainer.classList.add("hidden");
  donateContainer.classList.remove("hidden");
  document.getElementById("btn-history").classList.remove("bg-primary");
  document.getElementById("btn-donate").classList.add("bg-primary");
});

document.getElementById("btn-history").addEventListener("click", function () {
  historyContainer.classList.remove("hidden");
  donateContainer.classList.add("hidden");

  document.getElementById("btn-history").classList.add("bg-primary");
  document.getElementById("btn-donate").classList.remove("bg-primary");
});

document.getElementById("donate-now-1").addEventListener("click", function () {
  const getDonateMoney = getMoney("input-amount");
  const setDonateMoney = setMoney("donate-amount-1");
  // console.log(getDonateMoney, setDonateMoney);
  document.getElementById("donate-amount-1").innerText = getDonateMoney;
  totalAmount("input-amount");
  historyUpdate("input-amount", "Noakhali");
});

document.getElementById("donate-now-2").addEventListener("click", function () {
  const getDonateMoney = getMoney("input-amount-2");
  const setDonateMoney = setMoney("donate-amount-2");
  // console.log(getDonateMoney, setDonateMoney);

  document.getElementById("donate-amount-2").innerText = getDonateMoney;
  totalAmount("input-amount-2");
  historyUpdate("input-amount-2", "Feni");
});

document.getElementById("donate-now-3").addEventListener("click", function () {
  const getDonateMoney = getMoney("input-amount-3");
  const setDonateMoney = setMoney("donate-amount-3");
  // console.log(getDonateMoney, setDonateMoney);

  document.getElementById("donate-amount-3").innerText = getDonateMoney;
  totalAmount("input-amount-3");
  historyUpdate("input-amount-3", "Quota-Movement");
  // modal
});

// document.getElementById("donate-now").addEventListener("click", function () {
//   const inputAmount = parseFloat(document.getElementById("input-amount").value);
//   const donateAmount = document.getElementById("donate-amount");
//   donateAmount.innerText = inputAmount;
// });

// const modal = document.getElementById('donation-modal');
//   const donateButton = document.getElementById('donate-now-1');

//   // When the user clicks the Donate Now button, open the modal
//   donateButton.addEventListener('click', function() {
//     modal.showModal();

// modal
