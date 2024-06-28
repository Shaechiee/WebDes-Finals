$(document).ready(function() {
    displayCheckoutDetails();

    $("#payment-form").submit(function(event) { // Change the form id to match the form id in the HTML
        event.preventDefault();
        window.location.href = "success.html";
    });
});

function displayCheckoutDetails() {
    var cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    var checkoutDetailsContainer = $("#checkout-details");

    if (cart.length === 0) {
        checkoutDetailsContainer.html("<p>Your cart is empty.</p>");
        return;
    }

    var total = 0;
    var checkoutHTML = "<ul>";
    cart.forEach(function(item) {
        checkoutHTML += `<li>${item.product} - $${item.price} (Quantity: ${item.quantity})</li>`;
        total += item.price * item.quantity;
    });
    checkoutHTML += `</ul><p>Total: $${total.toFixed(2)}</p>`;

    checkoutDetailsContainer.html(checkoutHTML);
}