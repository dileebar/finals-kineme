// Cocktail Generator Script
document.getElementById("cocktail-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const spirit = document.getElementById("spirit").value;
    const mixer = document.getElementById("mixer").value;
    
    const cocktailResult = document.getElementById("cocktail-result");
    
    // Simple logic to generate a cocktail based on spirit and mixer
    if (spirit === "rum" && mixer === "soda") {
        cocktailResult.innerHTML = "<h3>Try a Rum & Soda!</h3><p>Just mix rum and soda for a refreshing cocktail.</p>";
    } else if (spirit === "gin" && mixer === "tonic") {
        cocktailResult.innerHTML = "<h3>Gin & Tonic</h3><p>The classic combination. Refreshing and simple!</p>";
    } else if (spirit === "vodka" && mixer === "juice") {
        cocktailResult.innerHTML = "<h3>Vodka Cranberry</h3><p>Mix vodka with cranberry juice for a simple yet tasty drink.</p>";
    } else {
        cocktailResult.innerHTML = "<h3>Sorry, no cocktail found with these ingredients.</h3>";
    }
});
