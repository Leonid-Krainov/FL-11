const minimalEmailLength = 6;
const minimalPassLength = 5;
let userEmail = prompt('Please enter email', '');
if (userEmail === '' || userEmail === null) {
  alert('Canceled.');
} else if (userEmail.length < minimalEmailLength) {
  alert('I don’t know any emails having name length less than 6 symbols');
} else if (userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com') {
  let password = prompt('Please enter password', '');
  if (password === '' || password === null) {
    alert('Canceled.');
  } else if (userEmail === 'user@gmail.com' && password === 'UserPass' ||
    userEmail === 'admin@gmail.com' && password === 'AdminPass') {
    let changingPass = confirm('Do you want to change your password?');
    if (changingPass === true) {
      let checkPass = prompt('Please enter password', '');
      if (checkPass === '' || checkPass === null) {
        alert('Canceled.');
      } else if (userEmail === 'user@gmail.com' && checkPass === 'UserPass' ||
        userEmail === 'admin@gmail.com' && checkPass === 'AdminPass') {
        let newPass = prompt('Please enter a new password', '');
        if (newPass === '' || newPass === null) {
          alert('Canceled.');
        } else if (newPass.length < minimalPassLength) {
          alert('It’s too short password. Sorry.');
        } else {
          let confirmNewPass = prompt('Please enter a new password again', '');
          if (confirmNewPass === newPass) {
            alert('You have successfully changed your password.');
          } else {
            alert('You wrote the wrong password.');
          }
        }
      } else {
        alert('Wrong password');
      }
    } else {
      alert('You have failed the change.');
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don’t know you');
}