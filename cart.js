$(document).ready(function() {
    $(".add-to-cart").on("click", function() {
        var product = $(this).data("product");
        var price = $(this).data("price");
        addToCart(product, price);
        window.location.href = "cart.html"; 
    });

    displayCart();

    $("#clear-cart").on("click", function() {
        clearCart();
    });

    $("#checkout-button").on("click", function() {
        window.location.href = "checkout.html"; 
    });
});

function addToCart(product, price) {
    
    var cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    
    cart.push({
        product: product,
        price: price,
        quantity: 1 
    });

    
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

function displayCart() {
    var cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    var $cartItems = $("#cart-items");
    var total = 0;

    $cartItems.empty();

    cart.forEach(function(item) {
        var $row = $("<tr>");
        $row.append($("<td>").text(item.product));
        $row.append($("<td>").text(item.quantity));
        $row.append($("<td>").text("$" + item.price.toFixed(2)));
        $row.append($("<td>").text("$" + (item.price * item.quantity).toFixed(2)));
        $row.append($("<td>").html("<a href='#' class='btn btn-danger btn-sm remove-item' data-product='" + item.product + "'>Remove</a>"));
        $cartItems.append($row);

        total += item.price * item.quantity;
    });

    $("#stotal").text("$" + total.toFixed(2));

    sessionStorage.setItem("cart", JSON.stringify(cart));
}
