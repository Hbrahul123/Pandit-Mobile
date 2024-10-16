// JavaScript for Product Click Redirection
document.addEventListener('DOMContentLoaded', function () {

    // Add event listener to each product card
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function () {
            const productKey = this.getAttribute("data-product");

            // Redirect based on the product clicked
            switch (productKey) {
                case "Smartphones":
                    window.location.href = "smartphones.html";  // Redirect to the smartphones page
                    break;
                case "Headsets":
                    window.location.href = "headsets.html";     // Redirect to the headsets page
                    break;
                case "Smart Watches":
                    window.location.href = "smartwatches.html"; // Redirect to the smartwatches page
                    break;
                case "Home Speakers":
                    window.location.href = "speakers.html";    // Redirect to the home speakers page
                    break;
                default:
                    alert("Product page not found!");
            }
        });
    });

});
