let selectService = document.getElementById('select-services');
let designNeedsDiv = document.getElementById('design-needs-group');
let degreeDevelopment = document.getElementById('degree-of-development');
let targetCostDiv = document.getElementById('target-cost-div');
let annualVolDiv = document.getElementById('annual-vol-div');
let launchDiv = document.getElementById('launch-div');
let materialsDiv = document.getElementById('materials-div');
let quantityDiv = document.getElementById('quantity-div');
let email = document.getElementById('email');
let fullName = document.getElementById('full-name');
let phoneNumber = document.getElementById('phone');
let company = document.getElementById('company');
let targetCost = document.getElementById('target-cost');
let estimatedAnnualVolume = document.getElementById('estimated-annual-volume');
let launchDate = document.getElementById('launch-date');
let material = document.getElementById('material');
let quantityPerPart = document.getElementById('quantity-per-part');
let projectFiles = document.getElementById('file-upload');
let additionalInformation = document.getElementById('additional-info');


// dynamically changes inputs based on selected services
selectService.addEventListener('change', function() {

    let selectedOption = this.value;
    if (selectedOption === "design-needs") {
        designNeedsDiv.classList.remove("d-none");
        materialsDiv.classList.add("d-none");
        quantityDiv.classList.add("d-none");
    } else if (selectedOption === "rapid-prototyping") {
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

    // resets all the dynamic input fields
    degreeDevelopment.selectedIndex = 0;
    targetCost.value = "";
    estimatedAnnualVolume.value = "";
    launchDate.value = "";
    material.value.selectedIndex = 0;
    quantityPerPart.value = "";

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

    // resets all the dynamic input fields
    targetCost.value = "";
    estimatedAnnualVolume.value = "";
    launchDate.value = "";
    material.value.selectedIndex = 0;
    quantityPerPart.value = "";

})

function sendQuote() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : email.value,
        Subject : `Quote request from ${fullName.value}`,
        Body : `Name: ${fullName.value}
        Email: ${email.value}
        Phone #: ${phoneNumber.value}
        Company: ${company.value}
        Service Needed: ${selectService.value}
        Degree of Development: ${degreeDevelopment.value}
        Target Cost: ${targetCost.value}
        Estimated Annual Volume: ${estimatedAnnualVolume.value}
        Launch Date: ${launchDate.value}
        Material: ${material.value}
        Quantity per Part: ${quantityPerPart.value}
        Project Files: ${projectFiles.value}
        Additional Information: ${additionalInformation.value}
        `
    }).then(
    message => alert("Quote request successfully sent!")
    );
}