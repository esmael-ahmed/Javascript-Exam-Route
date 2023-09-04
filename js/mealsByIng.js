

const urlParams = new URLSearchParams(window.location.search);
const ingName = urlParams.get('name');
console.log(ingName);

async function getMealsByIng(name) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`);
    let finalResult = await response.json();
    $(document).ready(function () {
        $(".sk-folding-cube").fadeOut(50, function () {
            $("#loading").fadeOut(50, function () {
                $("body").css("overflow", "auto");
            })
        })
        
    })
    return finalResult;
};

function display(data){
    let box = ``;
    for (let i = 0; i < data.length; i++) {
        box += `<div class="col-md-3">
        <div class="card my-3 position-relative">
            <div class="overlay position-absolute d-flex justify-content-center align-items-center">
                <h3 class="text-center">${data[i].strMeal}</h3>
            </div>
            <img src="${data[i].strMealThumb}" class="card-img-top" alt="...">
        </div>
    </div>`
}
    $("#demo").html(box);
    $(".card").on("click", function(e) {
        const nodeList = document.querySelectorAll(".card")
        const nodeArray = Array.from(nodeList)
        const cardIndex = nodeArray.indexOf(this);
        const mealId = data[cardIndex].idMeal;
        navigateToMealDetails(mealId);
      });
    
};

function navigateToMealDetails(mealId) {
    // Replace the URL with the appropriate URL of your area.html page
    const areaUrl = `mealDetails.html?id=${mealId}`;
    window.location.href = areaUrl;
  }

async function startApp(name) {
    let mealsIng = await getMealsByIng(name);
    display(mealsIng.meals);
    console.log(mealsIng.meals);
    
}
startApp(ingName);