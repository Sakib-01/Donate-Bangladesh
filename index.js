const donateContainer = document.getElementById("donate-container");
const historyContainer = document.getElementById("history-container");

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
