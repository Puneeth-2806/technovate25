function switchForm(formType) {
    const studentLoginForm = document.getElementById('student-login-form');
    const createAccountForm = document.getElementById('create-account-form');
    const toCreateAccountSwitch = document.getElementById('to-create-account');
    const toStudentLoginSwitch = document.getElementById('to-student-login');
  
    if (formType === 'student-login') {
      studentLoginForm.classList.add('active');
      createAccountForm.classList.remove('active');
      toCreateAccountSwitch.classList.add('active');
      toStudentLoginSwitch.classList.remove('active');
    } else {
      studentLoginForm.classList.remove('active');
      createAccountForm.classList.add('active');
      toCreateAccountSwitch.classList.remove('active');
      toStudentLoginSwitch.classList.add('active');
    }
  }// Student login
document.querySelector('#student-login-form button').addEventListener('click', () => {
    // Here you can add validation if needed
    window.location.href = "dashboard.html";  // Redirect to dashboard
  });
  
  // Admin login
  document.querySelector('#admin-login-form button').addEventListener('click', () => {
    // You can also check admin ID/password here
    window.location.href = "dashboard.html";  // Redirect to dashboard
  });
  // Basic switch form logic (if not already in place)
function switchForm(formName) {
  const studentLogin = document.getElementById("student-login-form");
  const createAccount = document.getElementById("create-account-form");
  
  if (formName === "create-account") {
    studentLogin.classList.remove("active");
    createAccount.classList.add("active");
  } else {
    createAccount.classList.remove("active");
    studentLogin.classList.add("active");
  }
}

// Admin login validation (You can replace with Firebase or real auth later)
document.querySelector("#admin-login-form button").addEventListener("click", () => {
  const adminID = document.getElementById("admin-id").value;
  const adminPass = document.getElementById("admin-password").value;

  if (adminID === "admin" && adminPass === "admin123") {
    window.location.href = "admin-dashboard.html";
  } else {
    alert("Invalid Admin Credentials");
  }
});
