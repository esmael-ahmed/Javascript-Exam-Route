
const urlParams = new URLSearchParams(window.location.search);
const mealId = urlParams.get('id');
console.log(mealId);

async function getMealById(id) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
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


function display(data) {
    $("#mealImage").attr("src", data[0].strMealThumb);
    $("#mealName").html(data[0].strMeal);
    $("#mealIns").html(data[0].strInstructions);
    $("#mealArea").html(data[0].strArea);
    $("#mealCategory").html(data[0].strCategory);
    $("#mealTag").html(data[0].strTags);
    $("#mealSource").attr("href", data[0].strSource);
    $("#mealYoutube").attr("href", data[0].strYoutube);
    let box = ``;
    for (let i = 0; i < 20; i++) {
        if (data[0][`strMeasure${i+1}`] == "" || data[0][`strMeasure${i+1}`] == null || data[0][`strIngredient${i+1}`] == "" || data[0][`strIngredient${i+1}`] == null) {
            continue;
        }
        else {
            box += `<span class="badge rounded-pill text-bg-secondary p-2 m-1">${data[0][`strMeasure${i+1}`]}<span>${data[0][`strIngredient${i+1}`]}</span></span>`;
        }
        
        // console.log(`${data[0][`strMeasure${i+1}`]}`);
    }
    
    $("#mealRecipes").html(box);
}

async function startApp(id) {
    let mealData = await getMealById(id);
    display(mealData.meals);
    console.log(mealData.meals);
    
}
startApp(mealId);



