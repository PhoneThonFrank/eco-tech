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
} else {
    body.classList.add("dark");
    modeText.innerText = "Light Mode";
    document.documentElement.setAttribute('data-bs-theme', 'dark');
}

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode";
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem("mode", "dark");
    } else {
        modeText.innerText = "Dark Mode";
        document.documentElement.setAttribute('data-bs-theme', 'light');
        localStorage.setItem("mode", "light");
    }
});
