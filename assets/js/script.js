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
let footer = document.getElementById('remote-footer');

// adds the footer to the bottom of the page
footer.innerHTML = `<div class="col-12 col-md-8 red-divider-long"></div>
<div class="row mt-5 justify-content-between d-flex">
    <div class="col-md-4 d-flex flex-column justify-content-between">
        <img src="./assets/images/remote-logo-white.png" alt="Remote Logo" class="w-75">
        <div>
            <p class="fst-italic">Transforming your ideas into tangible reality through high-quality design and rapid prototyping.</p>
            <p class="fst-italic">Located in Cleveland, OH</p>
        </div>
    </div>
    <div class="col-6 col-md-3 text-md-end d-flex flex-column justify-content-between">
        <p class="fst-italic">Site Map</p>
        <div>
            <a href="index.html" class="footer-link">Home</a><br>
            <a href="design.html" class="footer-link">Design</a><br>
            <a href="prototyping.html" class="footer-link">Rapid Prototyping</a><br>
            <a href="quote.html" class="footer-link">Request a Quote</a><br></div>
    </div>
    <div class="col-6 col-md-3 text-md-end d-flex flex-column justify-content-between">
        <p class="fst-italic">Legal Info</p>
        <div> 
            <a href="privacy-policy.html" class="footer-link">Privacy Policy</a><br>
            <a href="terms&conditions.html" class="footer-link">Terms & Conditions</a><br>
            <a href="cookies-policy.html" class="footer-link">Cookie Policy</a><br>
            <a href="index.html" class="footer-link">Mutual NDA</a><br>
        </div>
    </div>
</div>
<div class="pt-5 text-center copy-right">
    <p class="mx-auto mb-0"><span id="copyright">©</span>2021-2023 Remote Ltd - Design & Rapid Prototyping</p><br>
    <p id="devguy" class="mx-auto fst-italic">Website built & designed by that_<span class="red">dev</span>guy</p>
</div>`


const navbar = document.getElementById("nav");
const menuItems = document.getElementById("about-link");

menuItems.addEventListener("click", () => {
    navbar.classList.remove("show");
});


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
    } else if (selectedOption === "both") {
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
    if (selectedOption === "detailed") {
        targetCostDiv.classList.remove("d-none");
        annualVolDiv.classList.remove("d-none");
        launchDiv.classList.add("d-none");
    } else if (selectedOption === "final") {
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

targetCost.addEventListener('input', function() {
    if (this.value.length === 0) {
      this.value = '$';
    } else if (this.value.charAt(0) !== '$') {
      this.value = '$' + this.value;
    }
});