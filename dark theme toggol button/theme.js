function swapTheme() {
    let theme = document.getElementById('app')
    let btn_Theme = document.getElementById('swap')
    if (theme.className == "day") {
        theme.className = "night";
    }
    else {
        theme.className = "day";
    }
    if (btn_Theme.className == 'button_day') {
        btn_Theme.className = "button_night";
    }
    else {
        btn_theme.className="button_day";
    }
}