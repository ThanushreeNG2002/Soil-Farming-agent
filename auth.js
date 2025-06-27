
function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Registered successfully");
    })
    .catch(error => {
      alert(error.message);
    });
}
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      alert("Login successful!");

      // Redirect to admin or user page
      if (email === "mshrav1331@gmail.com") {
        window.location.href = "admin.html";
      } else {
        window.location.href = "user.html";
      }
    })
    .catch(error => {
      console.error("Login error:", error);
      alert(error.message);
    });
}

