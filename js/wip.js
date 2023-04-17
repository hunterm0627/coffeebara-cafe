//Initialize cart count to 0
let cartCount = 0;

// This function shows the modal

function showCartModal() {
    $('#cartModal').modal('show');
}

// Select elements

const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');

// Function to add item to cart

function addToCart(item) {
    const itemID = item.getAttribute('data-id');
    const itemName = item.getAttribute('data-name');
    const itemPrice = parseFloat(item.getAttribute('data-price'));
// parseFloat turns string into number for JavaScript

// Create new cart item element

    const li = document.createElement('li');
    li.className = `list-group-item`;
    li.innerHTML = `
    <span>${itemName}</span>
    <span class="float-right">$${itemPrice.toFixed(2)}</span>
    `;
// Append cart item to cart items list

    cartItems.appendChild(li);

// Update cart total

    let total = parseFloat(cartTotal.textContent.substring(1));
    total += itemPrice;
    cartTotal.textContent = `${total.toFixed(2)}`;
    
    //Increment cart count

    cartCount++;
    document.getElementById('cartItemCount').textContent = cartCount;

    // Logs out what item was added to the console
    
    console.log(`${itemName} added to cart.`);


    // Call the function to show the modal

    showCartModal();
}