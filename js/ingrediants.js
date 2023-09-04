
async function getAllIngrediants() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    let finalResult = await response.json();
    $(document).ready(function () {
        $(".sk-folding-cube").fadeOut(50, function () {
            $("#loading").fadeOut(50, function () {
                $("body").css("overflow", "auto");
            })
        })
        
    })
    return finalResult;
}

function display(data){
    let box = ``;
    for (let i = 0; i < 20; i++) {
        box += `<div class="col-md-3">
        <div class="card my-3 text-center overflow-hidden">
            <i class="fa-solid fa-drumstick-bite fs-1"></i>
            <h3>${data[i].strIngredient}</h3>
            <p>${data[i].strDescription}</p>
        </div>
    </div>`
}
    $("#demo").html(box);
    $(".card").on("click", function(e) {
        const nodeList = document.querySelectorAll(".card")
        const nodeArray = Array.from(nodeList)
        const cardIndex = nodeArray.indexOf(this);
        const ingrediantName = data[cardIndex].strIngredient;
        console.log(ingrediantName);
        navigateToMealDetails(ingrediantName);
    });
}

function navigateToMealDetails(ingrediantName) {
    // Replace the URL with the appropriate URL of your area.html page
    const ingUrl = `mealsByIng.html?name=${ingrediantName}`;
    window.location.href = ingUrl;
};

async function startApp() {
    let allIngrediants = await getAllIngrediants();
    display(allIngrediants.meals);
    console.log(allIngrediants.meals);
    
}
startApp();