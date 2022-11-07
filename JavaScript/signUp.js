// getting user input for the sign-up, saving data in local storage
document.querySelector('.btn-signup').addEventListener('click', function () {
  localStorage.setItem(
    'storedUserName',
    document.getElementById('userName').value
  );
  localStorage.setItem(
    'storedUseremail',
    document.getElementById('userEmail').value
  );
  window.location.reload();
});
// if the user's name has been saved in localStorage, displaying it
  if (localStorage.getItem('storedUserName')) {
    let name = localStorage.getItem('storedUserName');
    document.querySelector(
      '.form-container'
    ).innerHTML = `<h2 class="text-center py-5">Welcome ${name}!</h2>`;
  } else {
    document.querySelector('.form-container').display = 'none';
  }