// Navbar shadow on scroll
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".custom-nav");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
    } else {
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";
    }

});

// Daily Challenge Button
const challengeBtn = document.querySelector(".challenge button");

if (challengeBtn) {

    challengeBtn.addEventListener("click", () => {

        alert("🚀 Daily Challenge feature will be available in the next module!");

    });

}