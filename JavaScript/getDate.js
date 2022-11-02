let date = new Date();
let current_date = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

document.getElementById("date").innerHTML = `<p class="text-white text-center pt-2"> Winter Adventures | ${current_date}`;