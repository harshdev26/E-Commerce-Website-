const params = new URLSearchParams(window.location.search);
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


const cartArray = []
const addCart = document.querySelector("button");

addCart.addEventListener("click", function(){
 
  // get the cart item if it's already present in the array;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
 
  // now i am adding current product to the cart
  cart.push(selectedProduct);

  // saving the updated cart back to the localstorage

   localStorage.setItem("cart", JSON.stringify(cart));

  //  Alert

  alert("Product Added to cart!");

});

