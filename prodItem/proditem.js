import { shoes } from "../data/data.js";
let body = document.body;
window.addEventListener("load", () => {
  let param = new URLSearchParams(location.search).get("id");
  let findShoes = shoes.find((item) => item.id == param);
  body.insertAdjacentHTML(
    "beforeend",
    `
        <div class="card m-auto mt-5" style="max-width: 320px" >
      <img
        src=${findShoes.image}
        class="card-img-top"
        alt="Product Image"
      />
      <div class="card-body">
        <h4 class="card-title">${findShoes.title}</h4>
        <p class="card-text text-right">${findShoes.dec}</p>
        <p>brand : ${findShoes.brand}</p>
        <div class="d-flex justify-content-between align-items-center">
          <span class="h5 mb-0">$${findShoes.price}</span>
          <div>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-half text-warning"></i>
            <small class="text-muted">(4.5)</small>
          </div>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-between bg-light">
        <button class="btn btn-outline-warning btn-sm">
          <i class="bi bi-heart"></i>
        </button>
      </div>
    </div>
    `
  );
});
