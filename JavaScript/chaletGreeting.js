if (localStorage.getItem('storedUserName')) {
    let name = localStorage.getItem("storedUserName");
    document.querySelector(
      ".form-container"
    ).innerHTML = `<h2 class="text-center py-1">Welcome ${name}!</h2>`;
} else {
    document.querySelector(".form-container").display = none;
}