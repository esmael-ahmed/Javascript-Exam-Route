

$(document).ready(function () {
    $(".sk-folding-cube").fadeOut(50, function () {
        $("#loading").fadeOut(50, function () {
            $("body").css("overflow", "auto");
        })
    })
    
})



let sideBarInnerWidth = $(".sideBar-inner").innerWidth();
$("#sideBar").css("left", -sideBarInnerWidth)
$("#close-open").click(function(){
    

    if($("#sideBar").css("left") == "0px")
    {
        $("#sideBar").animate({left:-sideBarInnerWidth}, 700, function(){
            $(".sideBar-linkes").slideUp(300);
        });
        $(".fa-xmark").addClass("d-none");
        $(".fa-bars").removeClass("d-none");
    }
    else
    {
        $("#sideBar").animate({left:'0px'}, 700, function(){
            $(".sideBar-linkes").slideDown(300);
        })
        $(".fa-xmark").removeClass("d-none");
        $(".fa-bars").addClass("d-none");
    }
});

//Home
//get meals from api
async function getAllMeals() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    let finalResult = await response.json();
    return finalResult;
}

function display(data){
    let box = ``;
    // let cards = document.getElementsByClassName("card");
    for (let i = 0; i < data.length; i++) {
        box += `<div class="col-md-3">
        <div class="card my-3 position-relative">
        <div class="overlay position-absolute d-flex justify-content-center align-items-center">
        <h1>${data[i].strMeal}</h1>
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


async function startApp() {
    let mealsData = await getAllMeals();
    display(mealsData.meals);
    
}
startApp();























// let mealsArray = []; // array of all meals
// let mealsPromise = getAllMeals();
// console.log(mealsPromise);
// const promise = mealsPromise;

// promise.then((result) => {
//     let array = result;
//     mealsArray = array.meals;
//     console.log(mealsArray);
// });

// let mealsMap = new Map(Object.entries(mealsArray));
// console.log(mealsMap);

// function displayAllMeals() {
//     let box = ``;
//     for (let i = 0; i < mealsArray.length; i++)
//     {
//         console.log(i);
//     }
// };
// displayAllMeals();

// async function getWeatherData(city) {
//     let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=02b830efb1f242afa4e154348232808&q=${city}&days=3`);
//     let finalResult = await response.json();
//     return finalResult;
// }

// console.log(getWeatherData("cairo"));



