let date = new Date();
let current_date = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

document.getElementById("date").innerHTML = `<p class="text-white text-center pt-2"> Winter Adventures | ${current_date}`;

// tried to make it work using jQuery, doesn't work

// $('#date').html(
//   `<p class="text-white text-center pt-2"> Winter Adventures | ${current_date}`
// );