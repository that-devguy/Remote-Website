let selectService = document.getElementById('select-services');
let designNeedsDiv = document.getElementById('design-needs-group');
let degreeDevelopment = document.getElementById('degree-of-development');
let targetCostDiv = document.getElementById('target-cost-div');
let annualVolDiv = document.getElementById('annual-vol-div');
let launchDiv = document.getElementById('launch-div');
let materialsDiv = document.getElementById('materials-div');
let quantityDiv = document.getElementById('quantity-div');

// dynamically changes inputs based on selected services
selectService.addEventListener('change', function() {
    let selectedOption = this.value;
    if (selectedOption === "design-needs") {
        designNeedsDiv.classList.remove("d-none");
        materialsDiv.classList.add("d-none");
        quantityDiv.classList.add("d-none");
    } else if (selectedOption === "additive-manufacturing") {
        designNeedsDiv.classList.add("d-none");
        targetCostDiv.classList.add("d-none");
        annualVolDiv.classList.add("d-none");
        launchDiv.classList.add("d-none");
        materialsDiv.classList.remove("d-none");
        quantityDiv.classList.remove("d-none");
    } else if ( selectedOption === "both") {
        designNeedsDiv.classList.remove("d-none");
        materialsDiv.classList.remove("d-none");
        quantityDiv.classList.remove("d-none");
    }
})

// dynamically changes the production ready group based on whether or not the user has selected production ready in the degree of development
degreeDevelopment.addEventListener('change', function() {
    let selectedOption = this.value;
    if (selectedOption === "production-ready") {
        targetCostDiv.classList.remove("d-none");
        annualVolDiv.classList.remove("d-none");
        launchDiv.classList.remove("d-none");
    } else {
        targetCostDiv.classList.add("d-none");
        annualVolDiv.classList.add("d-none");
        launchDiv.classList.add("d-none");
    }
})

