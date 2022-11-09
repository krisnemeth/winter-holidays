// Using jQuery to select the DOM element, then displaying the date in the footer

function footerDate() {
  let date = new Date();
  let current_date = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

  $('#date')[0].innerHTML =
    `<p class="text-white text-center pt-2"> Winter Adventures | ${current_date}`;
}

footerDate();