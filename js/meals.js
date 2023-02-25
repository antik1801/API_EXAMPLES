const loadMeals = searchText =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`; 
    fetch(url)
    .then(response => response.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals =>{
    // console.log(meals)
    // step1: container element
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = ``;
    if(meals){
    for (const meal of meals) {
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
        <img src="${meal.strMealThumb ? meal.strMealThumb : '../assets/food.webp'}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Details
</button>

        </div>
      </div>
        `
        mealsContainer.appendChild(mealDiv);

    }
    }
    else{
        mealsContainer.innerHTML = `
        <h1>Data not found</h1>
        `
    }
}

document.getElementById('search-input').addEventListener('keyup',(e)=>{
    loadMeals(e.target.value);
})


const loadMealDetails = idMeal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayMealDetails(data.meals[0]))

}

const displayMealDetails = meal =>{
    console.log(meal);
    document.getElementById('exampleModalLabel').innerText = meal.strMeal;
    const mealDetailsBody = document.getElementById('mealDetailsBody');
    mealDetailsBody.classList.add('row','row-col-sm-1','row-col-md-2','align-items-center')
    mealDetailsBody.innerHTML=`
    <div class="col">
    <p>Price: <span class="fw-bold fs-2"> ${meal.idMeal} </span></p>
    <p>Review: <span class="fw-bold fs-3">${meal.strCategory}</span> </p>
    <p>Instructions: <span class="fw-bold fs-3">${meal.strMeasure3}</span></p>
    <p>Star tags: <span class="fs-4">${meal.strTags}</span></p>
    <p>Wight: <span class="fw-bold fs-3">${meal.strMeasure1}</span></p>
    </div>
    <div class="col p-2 ">
    <img class="img-fluid" src="${meal.strMealThumb}">
    </div>
    `

}

loadMeals('fish');