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
    document.getElementById('projectCon').classList.remove('bg-dark');
    document.getElementById('projectCon').classList.remove('text-light');
    document.getElementById('projectCon').classList.add('bg-light');
    document.getElementById('projectCon').classList.add('text-dark');
    
    document.getElementById('projectTitleStick').classList.remove('bg-dark');
    document.getElementById('projectTitleStick').classList.remove('text-light');
    document.getElementById('projectTitleStick').classList.add('bg-light');
    document.getElementById('projectTitleStick').classList.add('text-dark');

    document.getElementById('projectTitleStick1').classList.remove('bg-dark');
    document.getElementById('projectTitleStick1').classList.remove('text-light');
    document.getElementById('projectTitleStick1').classList.add('bg-light');
    document.getElementById('projectTitleStick1').classList.add('text-dark');

    document.getElementById('projectTitleStick2').classList.remove('bg-dark');
    document.getElementById('projectTitleStick2').classList.remove('text-light');
    document.getElementById('projectTitleStick2').classList.add('bg-light');
    document.getElementById('projectTitleStick2').classList.add('text-dark');

    document.getElementById('projectTitleStick3').classList.remove('bg-dark');
    document.getElementById('projectTitleStick3').classList.remove('text-light');
    document.getElementById('projectTitleStick3').classList.add('bg-light');
    document.getElementById('projectTitleStick3').classList.add('text-dark');

    document.getElementById('projectTitleStick4').classList.remove('bg-dark');
    document.getElementById('projectTitleStick4').classList.remove('text-light');
    document.getElementById('projectTitleStick4').classList.add('bg-light');
    document.getElementById('projectTitleStick4').classList.add('text-dark');

    document.getElementById('footer').classList.remove('bg-dark');
    document.getElementById('footer').classList.remove('text-light');
    document.getElementById('footer').classList.add('bg-light');
    document.getElementById('footer').classList.add('text-dark');
} else {
    body.classList.add("dark");
    modeText.innerText = "Light Mode";
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    document.getElementById('projectCon').classList.remove('bg-light');
    document.getElementById('projectCon').classList.remove('text-dark');
    document.getElementById('projectCon').classList.add('bg-dark');
    document.getElementById('projectCon').classList.add('text-light');

    document.getElementById('projectTitleStick').classList.add('bg-dark');
    document.getElementById('projectTitleStick').classList.add('text-light');
    document.getElementById('projectTitleStick').classList.remove('bg-light');
    document.getElementById('projectTitleStick').classList.remove('text-dark');

    document.getElementById('projectTitleStick1').classList.add('bg-dark');
    document.getElementById('projectTitleStick1').classList.add('text-light');
    document.getElementById('projectTitleStick1').classList.remove('bg-light');
    document.getElementById('projectTitleStick1').classList.remove('text-dark');

    document.getElementById('projectTitleStick2').classList.add('bg-dark');
    document.getElementById('projectTitleStick2').classList.add('text-light');
    document.getElementById('projectTitleStick2').classList.remove('bg-light');
    document.getElementById('projectTitleStick2').classList.remove('text-dark');

    document.getElementById('projectTitleStick3').classList.add('bg-dark');
    document.getElementById('projectTitleStick3').classList.add('text-light');
    document.getElementById('projectTitleStick3').classList.remove('bg-light');
    document.getElementById('projectTitleStick3').classList.remove('text-dark');

    document.getElementById('projectTitleStick4').classList.add('bg-dark');
    document.getElementById('projectTitleStick4').classList.add('text-light');
    document.getElementById('projectTitleStick4').classList.remove('bg-light');
    document.getElementById('projectTitleStick4').classList.remove('text-dark');

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
        document.getElementById('projectCon').classList.remove('bg-light');
    document.getElementById('projectCon').classList.remove('text-dark');
    document.getElementById('projectCon').classList.add('bg-dark');
    document.getElementById('projectCon').classList.add('text-light');

    document.getElementById('projectTitleStick').classList.remove('bg-light');
    document.getElementById('projectTitleStick').classList.remove('text-dark');
    document.getElementById('projectTitleStick').classList.add('bg-dark');
    document.getElementById('projectTitleStick').classList.add('text-light');

    document.getElementById('projectTitleStick1').classList.remove('bg-light');
    document.getElementById('projectTitleStick1').classList.remove('text-dark');
    document.getElementById('projectTitleStick1').classList.add('bg-dark');
    document.getElementById('projectTitleStick1').classList.add('text-light');

    document.getElementById('projectTitleStick2').classList.remove('bg-light');
    document.getElementById('projectTitleStick2').classList.remove('text-dark');
    document.getElementById('projectTitleStick2').classList.add('bg-dark');
    document.getElementById('projectTitleStick2').classList.add('text-light');

    document.getElementById('projectTitleStick3').classList.remove('bg-light');
    document.getElementById('projectTitleStick3').classList.remove('text-dark');
    document.getElementById('projectTitleStick3').classList.add('bg-dark');
    document.getElementById('projectTitleStick3').classList.add('text-light');

    document.getElementById('projectTitleStick4').classList.remove('bg-light');
    document.getElementById('projectTitleStick4').classList.remove('text-dark');
    document.getElementById('projectTitleStick4').classList.add('bg-dark');
    document.getElementById('projectTitleStick4').classList.add('text-light');

    document.getElementById('footer').classList.remove('bg-light');
    document.getElementById('footer').classList.remove('text-dark');
    document.getElementById('footer').classList.add('bg-dark');
    document.getElementById('footer').classList.add('text-light');
    
        localStorage.setItem("mode", "dark");
    } else {
        modeText.innerText = "Dark Mode";
        document.documentElement.setAttribute('data-bs-theme', 'light');
        document.getElementById('projectCon').classList.remove('bg-dark');
        document.getElementById('projectCon').classList.remove('text-light');
        document.getElementById('projectCon').classList.add('bg-light');
        document.getElementById('projectCon').classList.add('text-dark');
        
        document.getElementById('projectTitleStick').classList.remove('bg-dark');
        document.getElementById('projectTitleStick').classList.remove('text-light');
        document.getElementById('projectTitleStick').classList.add('bg-light');
        document.getElementById('projectTitleStick').classList.add('text-dark');

        document.getElementById('projectTitleStick1').classList.remove('bg-dark');
        document.getElementById('projectTitleStick1').classList.remove('text-light');
        document.getElementById('projectTitleStick1').classList.add('bg-light');
        document.getElementById('projectTitleStick1').classList.add('text-dark');

        document.getElementById('projectTitleStick2').classList.remove('bg-dark');
        document.getElementById('projectTitleStick2').classList.remove('text-light');
        document.getElementById('projectTitleStick2').classList.add('bg-light');
        document.getElementById('projectTitleStick2').classList.add('text-dark');

        document.getElementById('projectTitleStick3').classList.remove('bg-dark');
        document.getElementById('projectTitleStick3').classList.remove('text-light');
        document.getElementById('projectTitleStick3').classList.add('bg-light');
        document.getElementById('projectTitleStick3').classList.add('text-dark');

        document.getElementById('projectTitleStick4').classList.remove('bg-dark');
        document.getElementById('projectTitleStick4').classList.remove('text-light');
        document.getElementById('projectTitleStick4').classList.add('bg-light');
        document.getElementById('projectTitleStick4').classList.add('text-dark');

        document.getElementById('footer').classList.remove('bg-dark');
        document.getElementById('footer').classList.remove('text-light');
        document.getElementById('footer').classList.add('bg-light');
        document.getElementById('footer').classList.add('text-dark');
        localStorage.setItem("mode", "light");
    }
});
