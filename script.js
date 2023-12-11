const navbar = document.querySelector(".navbar")

window.onscroll =scrollFunction

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add("navscroll")
    } else {
        navbar.classList.remove("navscroll")
    }
}
