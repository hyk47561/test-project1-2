
// declare array to store the ingredients
let ingredients = [];

// click logo to return to the main page
$("#header-logo").on("click", function () {
    window.location = "index.html";
});

// results page search button
$("#header-search-btn").on("click", function () {
    let search = $("#header-search-bar").val();
    search = search.trim();

    if (typeof (search) === "undefined" || search === "") {

    }
    else {
        let includes = false;
        for (var i = 0; i < ingredients.length; i++) {
            if (search === ingredients[i]) {
                includes = true;
                break;
            }
        }

        if (includes) {

        }
        else {
            ingredients.push(search);

            let btn = $("<button>");

            btn.addClass("ingredient");
            btn.text("X " + search);

            $("#header-search-bar").val("");

            $("#header-ingredients-area").append(btn);
        }
    }
    generateResults();
});

// results page add button
$("#header-add-btn").on("click", function () {
    let search = $("#header-search-bar").val();
    search = search.trim();

    if (typeof (search) === "undefined" || search === "") {

    }
    else {
        let includes = false;
        for (var i = 0; i < ingredients.length; i++) {
            if (search === ingredients[i]) {
                includes = true;
                break;
            }
        }

        if (includes) {

        }
        else {
            ingredients.push(search);

            let btn = $("<button>");

            btn.addClass("ingredient");
            btn.text("X " + search);

            $("#header-search-bar").val("");

            $("#header-ingredients-area").append(btn);
        }
    }
});

$("#header-dropdown-btn").on("click", function () {
    let btn = $(this);
    let content = $("#header-ingredients-area");

    if (btn.text() === "\\/") {
        btn.text("/\\");
        content.css("max-height", content.prop("scrollHeight") + "px");
    }


    else {
        btn.text("\\/");
        content.css("max-height", "0px");
    }
})

$(".search-result").on("click", function () {
    let content = $(this).find(".result-details");

    if (content.css("max-height") === "0px") {
        content.css("max-height", content.prop("scrollHeight") + "px");
    } else {
        content.css("max-height", "0px");
    }
});

// main page search button
$("#main-search-btn").on("click", function () {
    let search = $("#main-search-bar").val();
    search = search.trim();



    if (typeof (search) === "undefined" || search === "") {

    }
    else {
        let includes = false;
        for (var i = 0; i < ingredients.length; i++) {
            if (search === ingredients[i]) {
                includes = true;
                break;
            }
        }

        if (includes) {

        }
        else {
            ingredients.push(search);

            let btn = $("<button>");

            btn.addClass("ingredient");
            btn.text("X " + search);

            $("#main-search-bar").val("");

            $("#ingredients-list-area").append(btn);
        }
    }

    window.localStorage.setItem("cart", JSON.stringify(ingredients));
    window.location = "results.html";
});

// main page add button
$("#main-add-btn").on("click", function () {
    let search = $("#main-search-bar").val();
    search = search.trim();

    if (typeof (search) === "undefined" || search === "") {

    }
    else {
        let includes = false;
        for (var i = 0; i < ingredients.length; i++) {
            if (search === ingredients[i]) {
                includes = true;
                break;
            }
        }

        if (includes) {

        }
        else {
            ingredients.push(search);

            let btn = $("<button>");

            btn.addClass("ingredient");
            btn.text("X " + search);

            $("#main-search-bar").val("");

            $("#ingredients-list-area").append(btn);
        }
    }
});

$("#login-btn").on("click", function() {
    window.location = "account.html";
});

// clicks to remove ingredient from search area
$(document).on("click", ".ingredient", function () {
    ingredients.splice(ingredients.indexOf($(this).text().substr(2)), 1);

    $(this).remove();
});

function populateIngredients() {
    ingredients = JSON.parse(window.localStorage.getItem("cart"));
    let field = $("#header-ingredients-area");
    let btns = [];

    $.each(ingredients, function (index, value) {
        $("#header-ingredients-area").append($("<button>").addClass("ingredient").text("X " + value));
    });
}

// displays the search results
function createRow(img, title, preptime, desc) {
    let searchResult = $("<div>");
    let resultImg = $("<img>");
    let resultPreview = $("<div>");
    let resultTitle = $("<h1>");
    let resultPreptime = $("<h2>");
    let resultDescription = $("<p>");

    searchResult.addClass("search-result");
    resultImg.addClass("result-img");
    resultPreview.addClass("result-preview");
    resultTitle.addClass("result-title");
    resultPreptime.addClass("result-preptime");
    resultDescription.addClass("result-description");

    resultImg.attr("src", img);
    searchResult.append(resultImg);

    resultTitle.text(title);
    resultPreview.append(resultTitle);

    resultPreptime.text(preptime + " minutes");
    resultPreview.append(resultPreptime);

    resultDescription.text(desc);
    resultPreview.append(resultDescription);

    searchResult.append(resultPreview);
    $("#results").append(searchResult);
}

function getIngredients() {
    let ret = "";
    for (var i = 0; i < ingredients.length; i++) {
        ret += " " + ingredients[i];
    }

    ret = ret.trim();
    return ret;
}