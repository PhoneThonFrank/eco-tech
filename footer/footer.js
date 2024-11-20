const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


if (localStorage.getItem("mode") == "light") {
    body.classList.remove("dark");
    modeText.innerText = "Dark Mode";
    document.documentElement.setAttribute('data-bs-theme', 'light');

    document.getElementById('footer').classList.remove('bg-dark');
    document.getElementById('footer').classList.remove('text-light');
    document.getElementById('footer').classList.add('bg-light');
    document.getElementById('footer').classList.add('text-dark');
} else {
    body.classList.add("dark");
    modeText.innerText = "Light Mode";
    document.documentElement.setAttribute('data-bs-theme', 'dark');

    document.getElementById('footer').classList.add('bg-dark');
    document.getElementById('footer').classList.add('text-light');
    document.getElementById('footer').classList.remove('bg-light');
    document.getElementById('footer').classList.remove('text-dark');
}

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode";
        document.documentElement.setAttribute('data-bs-theme', 'dark');

    document.getElementById('footer').classList.remove('bg-light');
    document.getElementById('footer').classList.remove('text-dark');
    document.getElementById('footer').classList.add('bg-dark');
    document.getElementById('footer').classList.add('text-light');
    
        localStorage.setItem("mode", "dark");
    } else {
        modeText.innerText = "Dark Mode";
        document.documentElement.setAttribute('data-bs-theme', 'light');

        document.getElementById('footer').classList.remove('bg-dark');
        document.getElementById('footer').classList.remove('text-light');
        document.getElementById('footer').classList.add('bg-light');
        document.getElementById('footer').classList.add('text-dark');
        localStorage.setItem("mode", "light");
    }
});


// function clearInput(){
//     document.getElementById('result').innerHTML = 'Your message has been sent.'
// }

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})