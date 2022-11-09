//displaying username on top of booking form
if(!localStorage.getItem('storedUserName')){
  document.getElementById(
    'bookHeader'
  ).innerHTML = `Please fill in your details`;
} else {
  let userName = localStorage.getItem('storedUserName');
  document.getElementById('bookHeader').innerHTML = `We need some of your details, ${userName}`;
}


//calculating gear based on user input, and package choices.
document.getElementById('calcBtn').addEventListener('click', function () {
  console.log('btn clicked');

  // Getting user input
  let package = document.getElementById('inputGroupSelect01').value; //package
  let duration = parseInt(document.getElementById('duration').value); //number of days
  let ski = parseInt(document.getElementById('skiGear').value); //number of ski packs
  let snow = parseInt(document.getElementById('snowGear').value); //number of snowboard packs
  let people = ski + snow; //amount of people

  // Economy Calculations
  let ecoPrice = duration * (ski * 90 + snow * 119); //before discount
  let ecoDiscount = (ecoPrice * 0.1).toFixed(2); //discount
  let ecoTotal = ecoPrice - ecoDiscount; //after discount

  // Intermediate Calculations
  let intPrice = duration * (ski * 120 + snow * 145); //before discount
  let intDiscount = (intPrice * 0.1).toFixed(2); //discount
  let intTotal = intPrice - intDiscount; //after discount

  // Performance Calculations
  let perfPrice = duration * (ski * 145 + snow * 170); //before discount
  let perfDiscount = (perfPrice * 0.1).toFixed(2); //discount
  let perfTotal = perfPrice - perfDiscount; //after discount

  //based on user selection of packages, calculating with different prices, and at or above a party of 4, applying discount
  if (package === 'Economy') {
    if (
      (!package && package !== 0) ||
      (!ski && ski !== 0) ||
      (!snow && snow !== 0) ||
      (!duration && duration !== 0)
    ) {
      document.getElementById('results').innerHTML = `
            <h2 class="pt-2 pb-3">Please fill in all fields</h2>
            <p><i id="warning-icon" class="bi bi-exclamation-diamond"></i></p>
        `;
    } else if (people >= 4) {
      document.getElementById('results').innerHTML = `
            <h2 class="pb-3">Overview</h2>
            <p class="text-start">Package chosen: <strong>${package}</strong></p>
            <p class="text-start">Duration of stay: <strong>${duration} weeks</strong></p>
            <p class="text-start">Number of people: <strong>${people}</strong></p>
            <p class="text-start">Ski boots & poles: <strong>${ski}</strong>
            <p class="text-start">Snowboards & boots: <strong>${snow}</strong>
            <p class="text-start"><strong>Discounted price: </strong></p>
            <h2 class="text-start pb-5">£${ecoTotal}</h2>
            <a href="#book" class="btn btn-secondary">Book</a>
        `;
    } else {
      document.getElementById('results').innerHTML = `
            <h2 class="pb-3">Overview</h2>
            <p class="text-start">Package chosen: <strong>${package}</strong></p>
            <p class="text-start">Duration of stay: <strong>${duration} weeks</strong></p>
            <p class="text-start">Number of people: <strong>${people}</strong></p>
            <p class="text-start">Ski boots & poles: <strong>${ski}</strong>
            <p class="text-start">Snowboards & boots: <strong>${snow}</strong>
            <p class="text-start"><strong>Total price: </strong></p>
            <h2 class="text-start pb-5">£${ecoPrice}</h2>
            <a href="#book" class="btn btn-secondary">Book</a>
        `;
    }
  } else if (package === 'Intermediate') {
    if (
      !package ||
      (!ski && ski !== 0) ||
      (!snow && snow !== 0) ||
      (!duration && duration !== 0)
    ) {
      document.getElementById('results').innerHTML = `
            <h2 class="pt-2 pb-3">Please fill in all fields</h2>
            <p><i id="warning-icon" class="bi bi-exclamation-diamond"></i></p>
        `;
    } else if (people >= 4) {
      document.getElementById('results').innerHTML = `
            <h2 class="pb-3">Overview</h2>
            <p class="text-start">Package chosen: <strong>${package}</strong></p>
            <p class="text-start">Duration of stay: <strong>${duration} weeks</strong></p>
            <p class="text-start">Number of people: <strong>${people}</strong></p>
            <p class="text-start">Ski boots & poles: <strong>${ski}</strong>
            <p class="text-start">Snowboards & boots: <strong>${snow}</strong>
            <p class="text-start"><strong>Discounted price: </strong></p>
            <h2 class="text-start pb-5">£${intTotal}</h2>
            <a href="#book" class="btn btn-secondary">Book</a>
        `;
    } else {
      document.getElementById('results').innerHTML = `
            <h2 class="pb-3">Overview</h2>
            <p class="text-start">Package chosen: <strong>${package}</strong></p>
            <p class="text-start">Duration of stay: <strong>${duration} weeks</strong></p>
            <p class="text-start">Number of people: <strong>${people}</strong></p>
            <p class="text-start">Ski boots & poles: <strong>${ski}</strong>
            <p class="text-start">Snowboards & boots: <strong>${snow}</strong>
            <p class="text-start"><strong>Total price: </strong></p>
            <h2 class="text-start pb-5">£${intPrice}</h2>
            <a href="#book" class="btn btn-secondary">Book</a>
        `;
    }
  } else if (package === 'Performance') {
    if (
      !package ||
      (!ski && ski !== 0) ||
      (!snow && snow !== 0) ||
      (!duration && duration !== 0)
    ) {
      document.getElementById('results').innerHTML = `
            <h2 class="pt-2 pb-3">Please fill in all fields</h2>
            <p><i id="warning-icon" class="bi bi-exclamation-diamond"></i></p>
        `;
    } else if (people >= 4) {
      document.getElementById('results').innerHTML = `
            <h2 class="pb-3">Overview</h2>
            <p class="text-start">Package chosen: <strong>${package}</strong></p>
            <p class="text-start">Duration of stay: <strong>${duration} weeks</strong></p>
            <p class="text-start">Number of people: <strong>${people}</strong></p>
            <p class="text-start">Ski boots & poles: <strong>${ski}</strong>
            <p class="text-start">Snowboards & boots: <strong>${snow}</strong>
            <p class="text-start"><strong>Discounted price: </strong></p>
            <h2 class="text-start pb-5">£${perfTotal}</h2>
            <a href="#book" class="btn btn-secondary">Book</a>
        `;
    } else {
      document.getElementById('results').innerHTML = `
            <h2 class="pb-3">Overview</h2>
            <p class="text-start">Package chosen: <strong>${package}</strong></p>
            <p class="text-start">Duration of stay: <strong>${duration} weeks</strong></p>
            <p class="text-start">Number of people: <strong>${people}</strong></p>
            <p class="text-start">Ski boots & poles: <strong>${ski}</strong>
            <p class="text-start">Snowboards & boots: <strong>${snow}</strong>
            <p class="text-start"><strong>Total price: </strong></p>
            <h2 class="text-start pb-5">£${perfPrice}</h2>
            <a href="#book" class="btn btn-secondary">Book</a>
        `;
    }
  } else {
    document.getElementById('results').innerHTML = `
            <h2 class="pt-2 pb-3">Select a package to get started!</h2>
            <p><i id="warning-icon" class="bi bi-bag-plus"></i></p>
            `;
  }
});

//changing content on button event
document
  .getElementById('bookingProcessed')
  .addEventListener('click', function () {
    document.getElementById('booking').innerHTML = `
        <div class="container-fluid text-center pt-5">
            <h2 class="pt-2 pb-3">Thank you!</h2>
            <h3 class="pt-2 pb-3">Your booking has been confirmed!</h3>
            <p><i id="warning-icon" class="bi bi-check2-circle"></i></p>
        </div>
    `;
  });
