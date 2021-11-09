function rand() {
    let urls = ['matias.ma/nsfw', 'checkboxolympics.com', 'longdogechallenge.com']
    window.open('https://' + urls[getRandomInt(urls.length)])
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function sponge() {
    const resHeading = document.getElementById("result");
    let str = document.getElementById("string").value;

    str = str.toLowerCase(); //Converts string to lowercase

    for (let i = 0; i < str.length; i++) { //Spongification
        rand = getRandomInt(2);

        if(rand == 1) {
            subStr = str.substr(i, 1);
            str = str.replace(subStr, subStr.toUpperCase());
        }
    }

    resHeading.innerHTML = "Result: " + str;
    resHeading.style.visibility = "visible";
}