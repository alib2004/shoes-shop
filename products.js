import { shoes } from "https://alib2004.github.io/shoes-shop/data/data.js";
let $ = document;
let products = $.querySelector(".products-div");
shoes.map((item) => {
  products.insertAdjacentHTML(
    "beforeend",
    `
            <div class="col">
          <div class="card h-100 shadow-sm">
            <img
              src=${item.image}
              class="card-img-top"
              alt="Product 1"
            />
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">
                A brief description of Product 1 and its features.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <span class="h5 mb-0">$${item.price}</span>
                  
                <a class="btn btn-outline-primary" href="./prodItem/proditem.html?id=${item.id}"><i class="bi bi-cart-plus"></i>Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
        `
  );
});
