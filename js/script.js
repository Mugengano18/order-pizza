//user interface logic
$(document).ready(function () {
    $("#orderm").click(function () {
        $(".pizzaf").append('<div class="form-group">' +
            '<label for="size">Choose any size:</label>' +
            '<select class="form-control" id="select1">' +
            '<option>Small #600rwf</option>' +
            '<option>Medium #800rwf</option>' +
            '<option>Large #1000rwf</option>' +
            '</select>' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="sel2">choose the crust:</label>' +
            '<select class="form-control" id="select2">' +
            '<option>New England Greek Style #100rwf</option>' +
            '<option>Grilled #300rwf</option>' +
            '<option>Deep Dish #200rwf</option>' +
            '<option>Stuffed</option>' +
            '<option>Cast Iron</option>' +
            '<option>Flatbread</option>' +
            '</select>' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="sel3">choose the topping:</label>' +
            '<select class="form-control" id="select3">' +
            '<option>Sausage, caramelized onions, and fennel</option>' +
            '<option>Pepperoni, tomatoes, mushrooms, and onion</option>' +
            '<option>Pepperoni, sausage, green pepper, onion, and mushroom</option>' +
            '<option>Thousand Island dressing, topped with sauerkraut, corned beef or pastrami, and Swiss cheese</option>' +
            '<option>Grilled chicken, avocado, and cherry tomatoes</option>' +
            '<option>Roasted Brussels sprouts and bacon or pancetta</option>' +
            '<option>Sardines, red onions, and black olives</option>' +
            '<option>Pesto with white beans, tomato, arugula, and Parmesan cheese</option>' +
            '<option>Goat cheese with arugula and red onion</option>' +
            '<option>Fried eggplant slices and black olives</option>' +
            '</select>' +
            '</div>')
    })
    $("#give").click(function () {
        $("#number").toggle();
    })
    $("#pick").click(function () {
        $("#minute").toggle();
    })
})
