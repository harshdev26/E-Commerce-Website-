let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart-container");


if(cart.length === 0){
    cartContainer.innerHTML = "<p>Your Cart is empty.</p>";
} else{
    
    
    cart.forEach(function(product){
       let item = document.createElement("div");  
       item.className = "cart-item";
       

       item.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="100" />
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <p>${product.description}</p>
      <hr/>            
       `;
       cartContainer.appendChild(item);
    });
}



