const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    if (name === "" || email === "" || phone === "" || address === "") {
        alert("Please fill all fields.");
        return;
    }

    const user = {
        name,
        email,
        phone,
        address
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Login Successful!");

    window.location.href = "index.html";
});