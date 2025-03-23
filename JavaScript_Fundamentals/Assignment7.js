function setCookie(name, value, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for(let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length);
        }
    }
    return "";
}

function deleteCookie(name) {
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
}

// script
window.onload = function() {
    // color input
    let myColor = prompt("Please enter a hexadecimal color code (must be 6 characters, including 0 thru 9 and A thru F):", "FFFFFF");
    if (!myColor || !/^[0-9A-Fa-f]{6}$/.test(myColor)) {
        myColor = "FFFFFF";
    }

    // age input
    let myAge = prompt("Please enter your age:", "25");

    // cookie string
    const cookieValue = "YColor=" + myColor + " age=" + myAge;

    // cookie deletion/creation
    const fullCookieString = "testCookie=" + cookieValue;
    if (confirm("A cookie will be set. Delete cookie?")) {
        deleteCookie("testCookie");
        alert("Here is the cookie that was deleted: " + fullCookieString);
    } else {
        setCookie("testCookie", cookieValue, 3650);
        alert("Here is the cookie that was set on your system: " + fullCookieString);
    }

    // get cookie
    const cookieContent = getCookie("testCookie");

    // get color from cookie
    let pos = "#" + myColor; // Use input color directly
    alert("Your background color will be: " + pos);

    // get age from cookie
    const ageMatch = cookieContent.match(/age=(\d+)/);
    const PersonAge = ageMatch ? ageMatch[1] : myAge;
    alert("Your age is: " + PersonAge);

    // set background-color
    document.body.style.backgroundColor = pos;

    // update page
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        Your background color is: ${pos}<br />
        Your age is: ${PersonAge}<br />
        Cookie contents: ${fullCookieString}
    `;
}