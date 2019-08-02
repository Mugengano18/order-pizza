// business logic
function order(size, crust, topping) {
    this.size =size;
    this.crust =crust;
    this.topping =topping;
 }
var s = ["small", "Medium", "large"];
var c = ["New england style", "grilled", "deep dish", "stuffed", "cast iron", "flat bread"];
var t = ["Sausage, caramelized onions, and fennel", "Pepperoni, tomatoes, mushrooms, and onion", "Pepperoni, sausage, green pepper, onion, and mushroom", "Grilled chicken, avocado, and cherry tomatoes", "Roasted Brussels sprouts and bacon or pancetta", "Sardines, red onions, and black olives", "Pesto with white beans, tomato, arugula, and Parmesan cheese", "Goat cheese with arugula and red onion", "Fried eggplant slices and black olives"]


var sprice, cprize, tprice,totalPrice;
function totalprice(size, crust, top) {
    if (size === s[0]) {
        sprice = 1000;
        if (crust === c[0]) {
            cprize = 300
            if (top === t[0]) {
                tprice = 500
            }
            else if (top === t[1]) {
                tprice = 600;
            }
            else if (top === t[2]) {
                tprice = 800;
            }
            else if (top === t[3]) {
                tprice = 800;
            }
            else if (top === t[4]) {
                tprice = 800;
            }
            else if (top === t[5]) {
                tprice = 800;
            }
            else if (top === t[6]) {
                tprice = 800;
            }
            else if (top === t[7]) {
                tprice = 800;
            }
            else if (top === t[8]) {
                tprice = 800;
            }
            else if (top === t[9]) {
                tprice = 800;
            }

        }
        else if (crust === c[1]) {
            cprize = 400;
            if (top === t[0]) {
                tprice = 500
            }
            else if (top === t[1]) {
                tprice = 600;
            }
            else if (top === t[2]) {
                tprice = 800;
            }
            else if (top === t[3]) {
                tprice = 800;
            }
            else if (top === t[4]) {
                tprice = 800;
            }
            else if (top === t[5]) {
                tprice = 800;
            }
            else if (top === t[6]) {
                tprice = 800;
            }
            else if (top === t[7]) {
                tprice = 800;
            }
            else if (top === t[8]) {
                tprice = 800;
            }
            else if (top === t[9]) {
                tprice = 800;
            }
        }
        else if (crust === c[2]) {
            cprize = 400;
            if (top === t[0]) {
                tprice = 500
            }
            else if (top === t[1]) {
                tprice = 600;
            }
            else if (top === t[2]) {
                tprice = 800;
            }
            else if (top === t[3]) {
                tprice = 800;
            }
            else if (top === t[4]) {
                tprice = 800;
            }
            else if (top === t[5]) {
                tprice = 800;
            }
            else if (top === t[6]) {
                tprice = 800;
            }
            else if (top === t[7]) {
                tprice = 800;
            }
            else if (top === t[8]) {
                tprice = 800;
            }
            else if (top === t[9]) {
                tprice = 800;
            }
        }
        else if (crust === c[3]) {
            cprize = 300;
            if (top === t[0]) {
                tprice = 500
            }
            else if (top === t[1]) {
                tprice = 600;
            }
            else if (top === t[2]) {
                tprice = 800;
            }
            else if (top === t[3]) {
                tprice = 800;
            }
            else if (top === t[4]) {
                tprice = 800;
            }
            else if (top === t[5]) {
                tprice = 800;
            }
            else if (top === t[6]) {
                tprice = 800;
            }
            else if (top === t[7]) {
                tprice = 800;
            }
            else if (top === t[8]) {
                tprice = 800;
            }
            else if (top === t[9]) {
                tprice = 800;
            }
        }
        else if (crust === c[4]) {
            cprize = 500;
            if (top === t[0]) {
                tprice = 500
            }
            else if (top === t[1]) {
                tprice = 600;
            }
            else if (top === t[2]) {
                tprice = 800;
            }
            else if (top === t[3]) {
                tprice = 800;
            }
            else if (top === t[4]) {
                tprice = 800;
            }
            else if (top === t[5]) {
                tprice = 800;
            }
            else if (top === t[6]) {
                tprice = 800;
            }
            else if (top === t[7]) {
                tprice = 800;
            }
            else if (top === t[8]) {
                tprice = 800;
            }
            else if (top === t[9]) {
                tprice = 800;
            }
        }
        else if (crust === c[5]) {
            cprize = 300;
            if (top === t[0]) {
                tprice = 500
            }
            else if (top === t[1]) {
                tprice = 600;
            }
            else if (top === t[2]) {
                tprice = 800;
            }
            else if (top === t[3]) {
                tprice = 800;
            }
            else if (top === t[4]) {
                tprice = 800;
            }
            else if (top === t[5]) {
                tprice = 800;
            }
            else if (top === t[6]) {
                tprice = 800;
            }
            else if (top === t[7]) {
                tprice = 800;
            }
            else if (top === t[8]) {
                tprice = 800;
            }
            else if (top === t[9]) {
                tprice = 800;
            }
        }


    }
    if (size === s[1]) {
        sprice = 1500;
        if (crust === c[0]) {
            cprize = 300
            if (top === t[0]) {
                tprice = 500
            }
            else if (top === t[1]) {
                tprice = 600;
            }
            else if (top === t[2]) {
                tprice = 800;
            }
            else if (top === t[3]) {
                tprice = 800;
            }
            else if (top === t[4]) {
                tprice = 800;
            }
            else if (top === t[5]) {
                tprice = 800;
            }
            else if (top === t[6]) {
                tprice = 800;
            }
            else if (top === t[7]) {
                tprice = 800;
            }
            else if (top === t[8]) {
                tprice = 800;
            }
            else if (top === t[9]) {
                tprice = 800;
            }

        }
        else if (crust === c[1]) {
            cprize = 400;
            if (top === t[0]) {
                tprice = 500
            }
            else if (top === t[1]) {
                tprice = 600;
            }
            else if (top === t[2]) {
                tprice = 800;
            }
            else if (top === t[3]) {
                tprice = 800;
            }
            else if (top === t[4]) {
                tprice = 800;
            }
            else if (top === t[5]) {
                tprice = 800;
            }
            else if (top === t[6]) {
                tprice = 800;
            }
            else if (top === t[7]) {
                tprice = 800;
            }
            else if (top === t[8]) {
                tprice = 800;
            }
            else if (top === t[9]) {
                tprice = 800;
            }
        }
        else if (crust === c[2]) {
            cprize = 400;
            if (top === t[0]) {
                tprice = 500
            }
            else if (top === t[1]) {
                tprice = 600;
            }
            else if (top === t[2]) {
                tprice = 800;
            }
            else if (top === t[3]) {
                tprice = 800;
            }
            else if (top === t[4]) {
                tprice = 800;
            }
            else if (top === t[5]) {
                tprice = 800;
            }
            else if (top === t[6]) {
                tprice = 800;
            }
            else if (top === t[7]) {
                tprice = 800;
            }
            else if (top === t[8]) {
                tprice = 800;
            }
            else if (top === t[9]) {
                tprice = 800;
            }
        }
        else if (crust === c[3]) {
            cprize = 300;
            if (top === t[0]) {
                tprice = 500
            }
            else if (top === t[1]) {
                tprice = 600;
            }
            else if (top === t[2]) {
                tprice = 800;
            }
            else if (top === t[3]) {
                tprice = 800;
            }
            else if (top === t[4]) {
                tprice = 800;
            }
            else if (top === t[5]) {
                tprice = 800;
            }
            else if (top === t[6]) {
                tprice = 800;
            }
            else if (top === t[7]) {
                tprice = 800;
            }
            else if (top === t[8]) {
                tprice = 800;
            }
            else if (top === t[9]) {
                tprice = 800;
            }
        }
        else if (crust === c[4]) {
            cprize = 500;
            if (top === t[0]) {
                tprice = 500
            }
            else if (top === t[1]) {
                tprice = 600;
            }
            else if (top === t[2]) {
                tprice = 800;
            }
            else if (top === t[3]) {
                tprice = 800;
            }
            else if (top === t[4]) {
                tprice = 800;
            }
            else if (top === t[5]) {
                tprice = 800;
            }
            else if (top === t[6]) {
                tprice = 800;
            }
            else if (top === t[7]) {
                tprice = 800;
            }
            else if (top === t[8]) {
                tprice = 800;
            }
            else if (top === t[9]) {
                tprice = 800;
            }
        }
        else if (crust === c[5]) {
            cprize = 300;
            if (top === t[0]) {
                tprice = 500
            }
            else if (top === t[1]) {
                tprice = 600;
            }
            else if (top === t[2]) {
                tprice = 800;
            }
            else if (top === t[3]) {
                tprice = 800;
            }
            else if (top === t[4]) {
                tprice = 800;
            }
            else if (top === t[5]) {
                tprice = 800;
            }
            else if (top === t[6]) {
                tprice = 800;
            }
            else if (top === t[7]) {
                tprice = 800;
            }
            else if (top === t[8]) {
                tprice = 800;
            }
            else if (top === t[9]) {
                tprice = 800;
            }
        }


    }
    if (size === s[2]) {
        sprice = 2000;
        if (crust === c[0]) {
            cprize = 300
            if (top === t[0]) {
                tprice = 500
            }
            else if (top === t[1]) {
                tprice = 600;
            }
            else if (top === t[2]) {
                tprice = 800;
            }
            else if (top === t[3]) {
                tprice = 800;
            }
            else if (top === t[4]) {
                tprice = 800;
            }
            else if (top === t[5]) {
                tprice = 800;
            }
            else if (top === t[6]) {
                tprice = 800;
            }
            else if (top === t[7]) {
                tprice = 800;
            }
            else if (top === t[8]) {
                tprice = 800;
            }
            else if (top === t[9]) {
                tprice = 800;
            }

        }
        else if (crust === c[1]) {
            cprize = 400;
            if (top === t[0]) {
                tprice = 500
            }
            else if (top === t[1]) {
                tprice = 600;
            }
            else if (top === t[2]) {
                tprice = 800;
            }
            else if (top === t[3]) {
                tprice = 800;
            }
            else if (top === t[4]) {
                tprice = 800;
            }
            else if (top === t[5]) {
                tprice = 800;
            }
            else if (top === t[6]) {
                tprice = 800;
            }
            else if (top === t[7]) {
                tprice = 800;
            }
            else if (top === t[8]) {
                tprice = 800;
            }
            else if (top === t[9]) {
                tprice = 800;
            }
        }
        else if (crust === c[2]) {
            cprize = 400;
            if (top === t[0]) {
                tprice = 500
            }
            else if (top === t[1]) {
                tprice = 600;
            }
            else if (top === t[2]) {
                tprice = 800;
            }
            else if (top === t[3]) {
                tprice = 800;
            }
            else if (top === t[4]) {
                tprice = 800;
            }
            else if (top === t[5]) {
                tprice = 800;
            }
            else if (top === t[6]) {
                tprice = 800;
            }
            else if (top === t[7]) {
                tprice = 800;
            }
            else if (top === t[8]) {
                tprice = 800;
            }
            else if (top === t[9]) {
                tprice = 800;
            }
        }
        else if (crust === c[3]) {
            cprize = 300;
            if (top === t[0]) {
                tprice = 500
            }
            else if (top === t[1]) {
                tprice = 600;
            }
            else if (top === t[2]) {
                tprice = 800;
            }
            else if (top === t[3]) {
                tprice = 800;
            }
            else if (top === t[4]) {
                tprice = 800;
            }
            else if (top === t[5]) {
                tprice = 800;
            }
            else if (top === t[6]) {
                tprice = 800;
            }
            else if (top === t[7]) {
                tprice = 800;
            }
            else if (top === t[8]) {
                tprice = 800;
            }
            else if (top === t[9]) {
                tprice = 800;
            }
        }
        else if (crust === c[4]) {
            cprize = 500;
            if (top === t[0]) {
                tprice = 500
            }
            else if (top === t[1]) {
                tprice = 600;
            }
            else if (top === t[2]) {
                tprice = 800;
            }
            else if (top === t[3]) {
                tprice = 800;
            }
            else if (top === t[4]) {
                tprice = 800;
            }
            else if (top === t[5]) {
                tprice = 800;
            }
            else if (top === t[6]) {
                tprice = 800;
            }
            else if (top === t[7]) {
                tprice = 800;
            }
            else if (top === t[8]) {
                tprice = 800;
            }
            else if (top === t[9]) {
                tprice = 800;
            }
        }
        else if (crust === c[5]) {
            cprize = 300;
            if (top === t[0]) {
                tprice = 500
            }
            else if (top === t[1]) {
                tprice = 600;
            }
            else if (top === t[2]) {
                tprice = 800;
            }
            else if (top === t[3]) {
                tprice = 800;
            }
            else if (top === t[4]) {
                tprice = 800;
            }
            else if (top === t[5]) {
                tprice = 800;
            }
            else if (top === t[6]) {
                tprice = 800;
            }
            else if (top === t[7]) {
                tprice = 800;
            }
            else if (top === t[8]) {
                tprice = 800;
            }
            else if (top === t[9]) {
                tprice = 800;
            }
        }


    }
    totalPrice=sprice+cprize+tprice;
    return  totalPrice;
}
console.log(totalprice("small","grilled","Sausage, caramelized onions, and fennel"))















//user interface logic
$(document).ready(function () {
    $("#orderm").click(function () {
        $(".pizzaf").append('<div class="form-group">' +
            '<label for="size">Choose any size:</label>' +
            '<select class="form-control" id="select1">' +
            '<option>Small</option>' +
            '<option>Medium</option>' +
            '<option>Large</option>' +
            '</select>' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="sel2">choose the crust:</label>' +
            '<select class="form-control" id="select2">' +
            '<option>New England Greek Style</option>' +
            '<option>Grilled</option>' +
            '<option>Deep Dish</option>' +
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
    $("#check").click(function () {
        var inputsize = $("#select1").val();
        console.log(inputsize);
        var inputcrust = $("#select2").val();
        console.log(inputcrust);
        var inputtopping = $("#select3").val();
        console.log(inputtopping);
        var newOrder = new order(inputsize, inputcrust, inputtopping);


    })
    $("#send").click(function () {
        alert("thank you!!!you'll get the pizza in no time")
    })
    $("#submit").click(function () {
        alert("Thank you!!!")
    })
})

