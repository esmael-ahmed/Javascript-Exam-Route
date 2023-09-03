

// let mealName = $("#searchByName").val();
// let mealFLetter = $("#searchByFL").val();
let mealName = document.getElementById("searchByName");
let mealFLetter = document.getElementById("searchByFL");

async function searchByName(name) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    let finalResult = await response.json();
    return finalResult;
}

async function searchByFirstLetter(letter) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    let finalResult = await response.json();
    return finalResult;
}


function display(data){
    let box = ``;
    for (let i = 0; i < data.length; i++) {
        box += `<div class="col-md-3">
        <div class="card my-3 position-relative">
            <div class="overlay position-absolute d-flex justify-content-center align-items-center">
                <h2 class="text-center">${data[i].strMeal}</h2>
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
};


async function startSearchByName(searchMethod) {
    let searchedMealsN = await searchByName(searchMethod);
    console.log(searchedMealsN.meals);
    display(searchedMealsN.meals);
}

async function startSearchByFLitter(searchMethod) {
    let searchedMealsF = await searchByFirstLetter(searchMethod);
    console.log(searchedMealsF.meals);
    display(searchedMealsF.meals);
}



mealName.addEventListener('input', function() {
    startSearchByName(mealName.value);
});
mealFLetter.addEventListener('input', function() {
    startSearchByFLitter(mealFLetter.value);
});