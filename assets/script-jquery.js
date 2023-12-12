$(document).ready(function() { 
    // Links to external developer tools 
    $(".tool-1-url").click(function () { window.open("https://code.visualstudio.com", "_blank");});
    $(".tool-2-url").click(function () { window.open("https://git-scm.com", "_blank");});
    $(".tool-3-url").click(function () { window.open("https://www.mysql.com", "_blank");});
    $(".tool-4-url").click(function () { window.open("https://developer.chrome.com/docs/extensions/reference/debugger", "_blank");});
    $(".tool-5-url").click(function () { window.open("https://github.com/", "_blank");});

    // Links to coding software
    $("#coding-sof-1").click(function () { window.open("https://code.visualstudio.com", "_blank");});
    $("#coding-sof-2").click(function () { window.open("http://www.sublimetext.com", "_blank");});
    $("#coding-sof-3").click(function () { window.open("https://github.com/atom/atom", "_blank");});
    $("#coding-sof-4").click(function () { window.open("https://netbeans.apache.org", "_blank");});

    // Links to connect account
    $("#connect-link-1").click(function () { window.open("https://x.com/stanfyhack", "_blank");});
    $("#connect-link-2").click(function () { window.open("mailto:standfirmbiokoro@gmail.com?&subject=Mail from Safiny web&body=I would like to connect! I may need some assistance.", "_blank");});
    $("#connect-link-3").click(function () { window.open("https://www.linkedin.com/in/standfirm-biokoro-9ba992294", "_blank");});
    $("#connect-link-4").click(function () { window.open("https://www.github.com/stanfy79", "_blank");});

    // To open the menu and close when clicked outside
    $('#menu-close').click(() => {
        $('#menu-container').addClass('hide-menu').removeClass('show-menu');
    });
    $('#menu-icon').click(() => {
        $('#menu-container').addClass('show-menu').removeClass('hide-menu');
    });

    // Expand and minimize the about context in mobile mode
    $('#about-context').click(() => { $("#about-p").toggle(200);});
});
