// business logic
function order() {
    this.size = [];
    this.crust = [];
    this.topping = [];
}
order.prototype.fullOrder = function () {
    return this.size + " " + this.crust + " " + this.topping;
}


// function totalprice(size, crust, top) {

// document.getElementById("total").innerHTML=(totalprice("small","New england style","Sausage, caramelized onions, and fennel")+ "rwf");















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
        $(".result").show(function () {
            $(".pizzaf").each(function () {

                var inputsize = $(this).find("#select1").val();
                console.log(inputsize);
                var inputcrust = $(this).find("#select2").val();
                console.log(inputcrust);
                var inputtopping = $(this).find("#select3").val();
                console.log(inputtopping);
                var newOrder = new order(inputsize, inputcrust, inputtopping);
                newOrder.size.push(inputsize);
                newOrder.crust.push(inputcrust);
                newOrder.topping.push(inputtopping);
                console.log(newOrder);
                $(".size").text(" " + inputsize);
                $(".crust").text(" " + inputcrust);
                $(".topping").text(" " + inputtopping);


                var sprice, cprize, tprice, totalPrice;
                function total(inputsize,inputcrust,inputtopping) {
                if (inputsize === 'Small') {
                    sprice = 1000;
                    // console.log(sprice);
                    if (inputcrust === 'New Greek Style') {
                        cprize = 300
                        if (inputtopping === 'Sausage, caramelized onions, and fennel') {
                            tprice = 500;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                            tprice = 600;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Sardines, red onions, and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Goat cheese with arugula and red onion") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Fried eggplant slices and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }

                    }
                    else if (inputcrust === "grilled") {
                        cprize = 400;
                        if (inputtopping === "Sausage, caramelized onions, and fennel") {
                            tprice = 500;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                            tprice = 600;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Sardines, red onions, and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Goat cheese with arugula and red onion") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Fried eggplant slices and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                    }
                    else if (inputcrust === "Deep Dish") {
                        cprize = 400;
                        if (inputtopping === "Sausage, caramelized onions, and fennel") {
                            tprice = 500;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                            tprice = 600;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Sardines, red onions, and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Goat cheese with arugula and red onion") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Fried eggplant slices and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                    }
                    else if (inputcrust === "Stuffed") {
                        cprize = 300;
                        if (inputtopping === "Sausage, caramelized onions, and fennel") {
                            tprice = 500;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                            tprice = 600;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Sardines, red onions, and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Goat cheese with arugula and red onion") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Fried eggplant slices and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }

                    }
                    else if (inputcrust === "Cast Iron") {
                        cprize = 500;
                        if (inputtopping === "Sausage, caramelized onions, and fennel") {
                            tprice = 500;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                            tprice = 600;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Sardines, red onions, and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Goat cheese with arugula and red onion") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Fried eggplant slices and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }

                    }
                    else if (inputcrust === "Flatbread") {
                        cprize = 300;
                        if (inputtopping === "Sausage, caramelized onions, and fennel") {
                            tprice = 500;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                            tprice = 600;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Sardines, red onions, and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Goat cheese with arugula and red onion") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Fried eggplant slices and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }

                    }


                }
                if (inputsize === "Medium") {
                    sprice = 1500;
                    if (inputcrust === "New Greek Style") {
                        cprize = 300;
                        if (inputtopping === "Sausage, caramelized onions, and fennel") {
                            tprice = 500;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                            tprice = 600;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Sardines, red onions, and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Goat cheese with arugula and red onion") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Fried eggplant slices and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }


                    }
                    else if (inputcrust === "Grilled") {
                        cprize = 400;
                        if (inputtopping === "Sausage, caramelized onions, and fennel") {
                            tprice = 500;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                            tprice = 600;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Sardines, red onions, and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Goat cheese with arugula and red onion") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Fried eggplant slices and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }

                    }
                    else if (inputcrust === "Deep Dish") {
                        cprize = 400;
                        if (inputtopping === "Sausage, caramelized onions, and fennel") {
                            tprice = 500;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                            tprice = 600;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Sardines, red onions, and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Goat cheese with arugula and red onion") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Fried eggplant slices and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }

                    }
                    else if (inputcrust === "Stuffed") {
                        cprize = 300;
                        if (inputtopping === "Sausage, caramelized onions, and fennel") {
                            tprice = 500;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                            tprice = 600;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Sardines, red onions, and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Goat cheese with arugula and red onion") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Fried eggplant slices and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }

                    }
                    else if (inputcrust === "Cast Iron") {
                        cprize = 500;
                        if (inputtopping === "Sausage, caramelized onions, and fennel") {
                            tprice = 500;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                            tprice = 600;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Sardines, red onions, and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Goat cheese with arugula and red onion") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Fried eggplant slices and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }

                    }
                    else if (inputcrust === "Flatbread") {
                        cprize = 300;
                        if (inputtopping === "Sausage, caramelized onions, and fennel") {
                            tprice = 500;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                            tprice = 600;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Sardines, red onions, and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Goat cheese with arugula and red onion") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Fried eggplant slices and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }

                    }


                }
                if (inputsize === "Large") {
                    sprice = 2000;
                    if (inputcrust === "New Greek Style") {
                        cprize = 300;
                        if (inputtopping === "Sausage, caramelized onions, and fennel") {
                            tprice = 500;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                            tprice = 600;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Sardines, red onions, and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Goat cheese with arugula and red onion") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Fried eggplant slices and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }


                    }
                    else if (inputcrust === "Grilled") {
                        cprize = 400;
                        if (inputtopping === "Sausage, caramelized onions, and fennel") {
                            tprice = 500;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                            tprice = 600;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Sardines, red onions, and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Goat cheese with arugula and red onion") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Fried eggplant slices and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }

                    }
                    else if (inputcrust === "Deep Dish") {
                        cprize = 400;
                        if (inputtopping === "Sausage, caramelized onions, and fennel") {
                            tprice = 500;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                            tprice = 600;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Sardines, red onions, and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Goat cheese with arugula and red onion") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Fried eggplant slices and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }

                    }
                    else if (inputcrust === "Stuffed") {
                        cprize = 300;
                        if (inputtopping === "Sausage, caramelized onions, and fennel") {
                            tprice = 500;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                            tprice = 600;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Sardines, red onions, and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Goat cheese with arugula and red onion") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Fried eggplant slices and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }

                    }
                    else if (inputcrust === "Cast Iron") {
                        cprize = 500;
                        if (inputtopping === "Sausage, caramelized onions, and fennel") {
                            tprice = 500;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                            tprice = 600;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Sardines, red onions, and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Goat cheese with arugula and red onion") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Fried eggplant slices and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }

                    }
                    else if (inputcrust === "Flatbread") {
                        cprize = 300;
                        if (inputtopping === "Sausage, caramelized onions, and fennel") {
                            tprice = 500;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                            tprice = 600;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Sardines, red onions, and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Goat cheese with arugula and red onion") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }
                        else if (inputtopping === "Fried eggplant slices and black olives") {
                            tprice = 800;
                            totalPrice = sprice + cprize + tprice;
                        }

                    }
                }
                return totalPrice;
            }
            $("#total").text(" "+ total(inputsize,inputcrust,inputtopping) +"rwf")
            // console.log(total(inputsize,inputcrust,inputtopping));
            })


        });
    })




    $("#send").click(function () {
        alert("thank you!!!you'll get the pizza in no time")
    })
    $("#submit").click(function () {
        alert("Thank you!!!")
    })
})

