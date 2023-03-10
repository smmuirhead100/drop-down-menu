// about event listener
const about = document.querySelector(".about");
about.addEventListener('mouseover', function (e) {
    dropdown(e.target);
});

//payment event listener
const payment = document.querySelector(".payment");
payment.addEventListener('mouseover', function (e) {
    dropdown(e.target);
});

const dropdownItem = document.createElement("div");
dropdownItem.className = ".dropdownItem";
dropdownItem.textContent = "Helpful Content";

function dropdown(div) {
    div.appendChild(dropdownItem);
}


export { dropdown };