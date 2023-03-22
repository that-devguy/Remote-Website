let selectService = document.getElementById('select-services');
let designNeedsDiv = document.getElementById('design-needs-group');
let degreeDevelopment = document.getElementById('degree-of-development');
let targetCostDiv = document.getElementById('target-cost-div');
let annualVolDiv = document.getElementById('annual-vol-div');
let launchDiv = document.getElementById('launch-div');

selectService.addEventListener('change', function() {
    let selectedOption = this.value;
    if (selectedOption === "design-needs") {
        designNeedsDiv.classList.remove("d-none");
    } else if (selectedOption === "additive-manufacturing") {
        designNeedsDiv.classList.add("d-none");
        targetCostDiv.classList.add("d-none");
        annualVolDiv.classList.add("d-none");
        launchDiv.classList.add("d-none");
    } else if ( selectedOption === "both") {
        designNeedsDiv.classList.remove("d-none");
    }
})

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
