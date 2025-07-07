const params = URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

let selectedProduct = products.find(p => p.id == id);

const detailContainer = document.getElementById("product-detail")

if(selectedProduct){

     detailContainer.innerHTML = `
    <img src="${selectedProduct.image}" alt="${selectedProduct.name}" />
    <h2>${selectedProduct.name}</h2>
    <p>₹${selectedProduct.price}</p>
    <p>${selectedProduct.description}</p>
    <button>Add to Cart</button>
  `;

}else {
  detailContainer.innerHTML = "<p>Product not found</p>";
}