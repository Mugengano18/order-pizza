// business logic
function order() {
    this.size = [];
    this.crust = [];
    this.topping = [];
    this.number=[];
    this.price=[];
}







//user interface logic
$(document).ready(function () {
    $("#orderm").click(function () {
        $(".pizzaf").append('<div class="pizzaf">'+
        '<div class="form-group">'+
            '<label for="size">Choose any size:</label>'+
            '<select class="form-control" id="select1" width=20>'+
                '<option>Small</option>'+
                '<option>Medium</option>'+
                '<option>Large</option>'+
            '</select>'+
        '</div>'+
        '<div class="form-group">'+
            '<label for="sel2">choose the crust:</label>'+
            '<select class="form-control" id="select2">'+
                '<option>New Greek Style</option>'+
                '<option>Grilled</option>'+
                '<option>Deep Dish</option>'+
                '<option>Stuffed</option>'+
                '<option>Cast Iron</option>'+
                '<option>Flatbread</option>'+
            '</select>'+
        '</div>'+
        '<div class="form-group">'+
            '<label for="sel3">choose the topping:</label>'+
            '<select class="form-control" id="select3">'+
                '<option>Sausage, caramelized onions, and fennel</option>'+
                '<option>Pepperoni, tomatoes, mushrooms, and onion</option>'+
                '<option>Pepperoni, sausage, green pepper, onion, and mushroom</option>'+
                '<option>Grilled chicken, avocado, and cherry tomatoes</option>'+
                '<option>Roasted Brussels sprouts and bacon or pancetta</option>'+
                '<option>Sardines, red onions, and black olives</option>'+
                '<option>Pesto with white beans, tomato, arugula, and Parmesan cheese</option>'+
                '<option>Goat cheese with arugula and red onion</option>'+
                '<option>Fried eggplant slices and black olives</option>'+
            '</select>'+
        '</div><br>'+
        '<div class="form-group">'+
            '<label for="pizza">state the number of pizza you want:</label>'+
            '<input type="number" min="1" width="3">'+ 
        '</div>'+
    '</div>')
    })
    $("#give").click(function () {
        $("#number").toggle();
    })
    $("#pick").click(function () {
        $("#minute").toggle();
    })
    // $("#check").submit(function(event){
    //     event.preventDefault();


    $("#check").click(function () {
        $(".result").show(function () {
            $(".pizzaf").each(function () {
                var inputsize = $(this).find("#select1").val();
                console.log(inputsize);
                var inputcrust = $(this).find("#select2").val();
                console.log(inputcrust);
                var inputtopping = $(this).find("#select3").val();
                console.log(inputtopping);
                var inputnbr=$(this).find("#numb").val();

                var newOrder = new order(inputsize, inputcrust, inputtopping,inputnbr);
                newOrder.size.push(inputsize);
                newOrder.crust.push(inputcrust);
                newOrder.topping.push(inputtopping);
                newOrder.price.push(total(inputsize, inputcrust, inputtopping,inputnbr)),
                console.log(newOrder);
                $(".size").text(" " + inputsize);
                $(".crust").text(" " + inputcrust);
                $(".topping").text(" " + inputtopping);

                var sprice, cprize, tprice, totalPrice;
                function total(inputsize, inputcrust, inputtopping,inputnbr) {
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
                            cprize = 500;
                            if (inputtopping === "Sausage, caramelized onions, and fennel") {
                                tprice = 600;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                                tprice = 800;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                                tprice = 1000;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                                tprice = 900;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Sardines, red onions, and black olives") {
                                tprice = 800;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                                tprice = 900;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Goat cheese with arugula and red onion") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Fried eggplant slices and black olives") {
                                tprice = 1300;
                                totalPrice = sprice + cprize + tprice;
                            }


                        }
                        else if (inputcrust === "Grilled") {
                            cprize = 500;
                            if (inputtopping === "Sausage, caramelized onions, and fennel") {
                                tprice = 600;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                                tprice = 800;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                                tprice = 1000;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                                tprice = 900;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Sardines, red onions, and black olives") {
                                tprice = 800;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                                tprice = 900;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Goat cheese with arugula and red onion") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Fried eggplant slices and black olives") {
                                tprice = 1300;
                                totalPrice = sprice + cprize + tprice;
                            }

                        }
                        else if (inputcrust === "Deep Dish") {
                            cprize = 500;
                            if (inputtopping === "Sausage, caramelized onions, and fennel") {
                                tprice = 600;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                                tprice = 800;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                                tprice = 1000;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                                tprice = 900;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Sardines, red onions, and black olives") {
                                tprice = 800;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                                tprice = 900;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Goat cheese with arugula and red onion") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Fried eggplant slices and black olives") {
                                tprice = 1300;
                                totalPrice = sprice + cprize + tprice;
                            }

                        }
                        else if (inputcrust === "Stuffed") {
                            cprize = 400;
                            if (inputtopping === "Sausage, caramelized onions, and fennel") {
                                tprice = 600;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                                tprice = 800;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                                tprice = 1000;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                                tprice = 900;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Sardines, red onions, and black olives") {
                                tprice = 800;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                                tprice = 900;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Goat cheese with arugula and red onion") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Fried eggplant slices and black olives") {
                                tprice = 1300;
                                totalPrice = sprice + cprize + tprice;
                            }

                        }
                        else if (inputcrust === "Cast Iron") {
                            cprize = 500;
                            if (inputtopping === "Sausage, caramelized onions, and fennel") {
                                tprice = 600;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                                tprice = 800;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                                tprice = 1000;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                                tprice = 900;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Sardines, red onions, and black olives") {
                                tprice = 800;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                                tprice = 900;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Goat cheese with arugula and red onion") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Fried eggplant slices and black olives") {
                                tprice = 1300;
                                totalPrice = sprice + cprize + tprice;
                            }

                        }
                        else if (inputcrust === "Flatbread") {
                            cprize = 600;
                            if (inputtopping === "Sausage, caramelized onions, and fennel") {
                                tprice = 600;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                                tprice = 800;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                                tprice = 1000;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                                tprice = 900;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Sardines, red onions, and black olives") {
                                tprice = 800;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                                tprice = 900;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Goat cheese with arugula and red onion") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Fried eggplant slices and black olives") {
                                tprice = 1300;
                                totalPrice = sprice + cprize + tprice;
                            }

                        }


                    }
                    if (inputsize === "Large") {
                        sprice = 2000;
                        if (inputcrust === "New Greek Style") {
                            cprize = 1000;
                            if (inputtopping === "Sausage, caramelized onions, and fennel") {
                                tprice = 800;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                                tprice = 1400;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                                tprice = 1300;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Sardines, red onions, and black olives") {
                                tprice = 1000;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                                tprice = 1000;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Goat cheese with arugula and red onion") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Fried eggplant slices and black olives") {
                                tprice = 900;
                                totalPrice = sprice + cprize + tprice;
                            }


                        }
                        else if (inputcrust === "Grilled") {
                            cprize = 800;
                            if (inputtopping === "Sausage, caramelized onions, and fennel") {
                                tprice = 800;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                                tprice = 1400;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                                tprice = 1300;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Sardines, red onions, and black olives") {
                                tprice = 1000;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                                tprice = 1000;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Goat cheese with arugula and red onion") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Fried eggplant slices and black olives") {
                                tprice = 900;
                                totalPrice = sprice + cprize + tprice;
                            }

                        }
                        else if (inputcrust === "Deep Dish") {
                            cprize = 800;
                            if (inputtopping === "Sausage, caramelized onions, and fennel") {
                                tprice = 800;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                                tprice = 1400;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                                tprice = 1300;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Sardines, red onions, and black olives") {
                                tprice = 1000;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                                tprice = 1000;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Goat cheese with arugula and red onion") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Fried eggplant slices and black olives") {
                                tprice = 900;
                                totalPrice = sprice + cprize + tprice;
                            }

                        }
                        else if (inputcrust === "Stuffed") {
                            cprize = 900;
                            if (inputtopping === "Sausage, caramelized onions, and fennel") {
                                tprice = 800;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                                tprice = 1400;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                                tprice = 1300;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Sardines, red onions, and black olives") {
                                tprice = 1000;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                                tprice = 1000;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Goat cheese with arugula and red onion") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Fried eggplant slices and black olives") {
                                tprice = 900;
                                totalPrice = sprice + cprize + tprice;
                            }

                        }
                        else if (inputcrust === "Cast Iron") {
                            cprize = 1000;
                            if (inputtopping === "Sausage, caramelized onions, and fennel") {
                                tprice = 800;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                                tprice = 1400;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                                tprice = 1300;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Sardines, red onions, and black olives") {
                                tprice = 1000;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                                tprice = 1000;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Goat cheese with arugula and red onion") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Fried eggplant slices and black olives") {
                                tprice = 900;
                                totalPrice = sprice + cprize + tprice;
                            }

                        }
                        else if (inputcrust === "Flatbread") {
                            cprize = 800;
                            if (inputtopping === "Sausage, caramelized onions, and fennel") {
                                tprice = 800;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, tomatoes, mushrooms, and onion") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pepperoni, sausage, green pepper, onion, and mushroom") {
                                tprice = 1400;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Grilled chicken, avocado, and cherry tomatoes") {
                                tprice = 1300;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Roasted Brussels sprouts and bacon or pancetta") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Sardines, red onions, and black olives") {
                                tprice = 1000;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Pesto with white beans, tomato, arugula, and Parmesan cheese") {
                                tprice = 1000;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Goat cheese with arugula and red onion") {
                                tprice = 1200;
                                totalPrice = sprice + cprize + tprice;
                            }
                            else if (inputtopping === "Fried eggplant slices and black olives") {
                                tprice = 900;
                                totalPrice = sprice + cprize + tprice;
                            }

                        }
                    }
                    return (totalPrice*inputnbr);
                }
                $("#total").text(" " + total(inputsize, inputcrust, inputtopping,inputnbr) + "rwf")
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
    $("#order").click(function () {
        alert("thank you for ordering!!! we will get back at you in no time!");
    })
})

