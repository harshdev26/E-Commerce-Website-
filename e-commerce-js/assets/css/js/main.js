const container = document.getElementById("product-container");

products.forEach(function(product){
   let card = document.createElement("div");
   card.className = "product-card"
   
   card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3> 
    <p>${product.price}</p>
    <p>${product.description}</p>
    <button>View details</button>`
       
   card.addEventListener("click", function(){
   window.location.href = `product.html?id=${product.id}`;
  });

document.getElementById("product-container").appendChild(card);
}); 




