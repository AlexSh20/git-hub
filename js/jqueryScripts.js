function addFoodList() {

    var product = $("#foodItem").val();
    $("<li>" + product + "</li>").appendTo(".food-List");
    $("#foodItem").val('');
}

function addShopsList() {

    $('#addShopHere').load('ajax/shops.html');
    $(".section-shops-button").hide();
}

function hideShopsList() {
    $(".shop-List").slideUp();
    $(".section-shops-button-hide").slideUp();
    $(".section-shops-button-show").show();
}

function showShopsList() {
    $(".section-shops-button-show").hide();
    $(".shop-List").slideDown();
    $(".section-shops-button-hide").slideDown();
}

