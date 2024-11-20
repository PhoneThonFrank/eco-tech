const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text"),
      projectCards = document.querySelectorAll(".projectCard"), // Select all elements with class 'projectCard'
      footer = document.getElementById('footer'); // Select the footer element

if (localStorage.getItem("mode") === "light") {
    body.classList.remove("dark");
    modeText.innerText = "Dark Mode";
    document.documentElement.setAttribute('data-bs-theme', 'light');

    // Apply light theme to project cards
    projectCards.forEach(card => {
        card.classList.remove("bg-dark", "text-light");
        card.classList.add("bg-light", "text-dark");
    });

    // Apply light theme to footer
    footer.classList.remove('bg-dark', 'text-light');
    footer.classList.add('bg-light', 'text-dark');
} else {
    body.classList.add("dark");
    modeText.innerText = "Light Mode";
    document.documentElement.setAttribute('data-bs-theme', 'dark');

    // Apply dark theme to project cards
    projectCards.forEach(card => {
        card.classList.remove("bg-light", "text-dark");
        card.classList.add("bg-dark", "text-light");
    });

    // Apply dark theme to footer
    footer.classList.add('bg-dark', 'text-light');
    footer.classList.remove('bg-light', 'text-dark');
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

        // Apply dark theme to project cards
        projectCards.forEach(card => {
            card.classList.remove("bg-light", "text-dark");
            card.classList.add("bg-dark", "text-light");
        });

        // Apply dark theme to footer
        footer.classList.remove('bg-light', 'text-dark');
        footer.classList.add('bg-dark', 'text-light');
    } else {
        modeText.innerText = "Dark Mode";
        document.documentElement.setAttribute('data-bs-theme', 'light');
        localStorage.setItem("mode", "light");

        // Apply light theme to project cards
        projectCards.forEach(card => {
            card.classList.remove("bg-dark", "text-light");
            card.classList.add("bg-light", "text-dark");
        });

        // Apply light theme to footer
        footer.classList.remove('bg-dark', 'text-light');
        footer.classList.add('bg-light', 'text-dark');
    }
});
