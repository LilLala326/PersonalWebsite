//Event Listener for dark mode button
document.getElementById("modeBttn").addEventListener("click", function() {
    let isDark = document.body.classList.toggle("dark-mode");

    document.getElementById("SJIcon").src = isDark ? "assets/SJ-Icon-Dark.png" : "assets/SJ-Icon-Light.png";
    document.getElementById("modeBttn").src = isDark ? "assets/theme-toggle-Light.png" : "assets/theme-toggle-Dark.png";
    document.getElementById("RITLogo").src = isDark ? "assets/RIT_hor_w.png" : "assets/RIT_hor_k.png";

});