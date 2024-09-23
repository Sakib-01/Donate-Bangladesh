const donateContainer = document.getElementById("donate-container");
const historyContainer = document.getElementById("history-container");
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
  const setDonateMoney = setMoney("input-amount", "donate-amount-1");
  // console.log(getDonateMoney, setDonateMoney);
  // document.getElementById("donate-amount-1").innerText = setDonateMoney;
  totalAmount("input-amount", "my_modal_1");
  historyUpdate("input-amount", "Noakhali");
});

document.getElementById("donate-now-2").addEventListener("click", function () {
  const getDonateMoney = getMoney("input-amount-2");
  const setDonateMoney = setMoney("input-amount-2", "donate-amount-2");
  // console.log(getDonateMoney, setDonateMoney);
  // document.getElementById("donate-amount-2").innerText = setDonateMoney;
  totalAmount("input-amount-2", "my_modal_2");
  historyUpdate("input-amount-2", "Feni");
});

document.getElementById("donate-now-3").addEventListener("click", function () {
  const getDonateMoney = getMoney("input-amount-3");
  const setDonateMoney = setMoney("input-amount-3", "donate-amount-3");
  // console.log(getDonateMoney, setDonateMoney);
  // document.getElementById("donate-amount-3").innerText = setDonateMoney;
  totalAmount("input-amount-3", "my_modal_3");
  historyUpdate("input-amount-3", "Quota-Movement");
});

// document.getElementById("donate-now").addEventListener("click", function () {
//   const inputAmount = parseFloat(document.getElementById("input-amount").value);
//   const donateAmount = document.getElementById("donate-amount");
//   donateAmount.innerText = inputAmount;
// });
