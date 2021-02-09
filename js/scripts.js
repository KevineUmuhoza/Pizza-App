var pizza = function(pizzaName, pizzaCrust, pizzaSize){
    this.pizzaName = pizzaName;
    this.pizzaCrust = pizzaCrust;
    this.pizzaSize = pizzaSize;
    this.toppings = [];
    this.isDelivered = false;
}

var topping = function(toppingName, toppingPrice){
    this.toppingName = toppingName;
    this.toppingPrice = toppingPrice;
}

pizza.prototype.getDeliveryPrice = function(){
    return 1000;
}

pizza.prototype.setDeliveryAddress = function(deliveryAddress){
    this.deliveryAddress = deliveryAddress;
}
pizza.prototype.getPizzaSizePrice = function(pizzaSize){
    if(pizzaSize == "small"){
        return 3500;
    }
    else if(pizzaSize == "medium"){
        return 5000;
    }
    else{
        return 6000;
    }
}
 pizza.prototype.getPizzaCrustPrice = function(crust){
     if(this.pizzaCrust == "crisped"){
         return 1000;
     }
     else if(this.pizzaCrust == "glutten-free"){
         return 1500;
     }
     else{
         return 2000;
     }
 }

 pizza.prototype.setToppings = function(toppings){
     for(var i=0; i<toppings.length; i++){
         
        if(toppings[i] == "bacon"){
            this.toppings.push(bacon)
        }
        if(toppings[i] == "onions"){
            this.toppings.push(onions)
        }
        if(toppings[i] == "pineaple"){
            this.toppings.push(pineaple)
        }
        if(toppings[i] == "extra-cheese"){
            this.toppings.push(extra-cheese)
        }
        if(toppings[i] == "spinach"){
            this.toppings.push(spinach)
        }
        if(toppings[i] == "black-olives"){
            this.toppings.push(black-olives)
        }
        if(toppings[i] == "sausage"){
            this.toppings.push(sausage)
        }
        if(toppings[i] == "ham"){
            this.toppings.push(ham)
        }
        if(toppings[i] == "pepperoni"){
            this.toppings.push(pepperoni)
        }
        if(toppings[i] == "green-pepper"){
            this.toppings.push(green-pepper)
        }
     }
 }

 var bacon = new topping("bacon", 100);
 var onions = new topping("onions", 150);
 var pineaple = new topping("pineaple", 200);
 var extraCheese = new topping("extra-cheese", 25);
 var spinach = new topping("spinach", 50);
 var blackOlives = new topping("black-olives", 150);
 var sausage = new topping("sausage", 500);
 var ham = new topping("ham", 350);
 var pepperoni = new topping("pepperoni", 200);
 var greenPepper = new topping("green-pepper", 100);

 pizza.prototype.calculateTotalPrice = function(numberOfPizza){
     var total = 0;
     var getDeliveryPrice = 0;
     var sizePrice = this.getPizzaSizePrice(this.pizzaSize);
     var crustPrice = this.getPizzaCrustPrice(this.pizzaCrust);
     var totalToppings = 0;

     if(this.isDelivered){
         deliveryPrice = this.getDeliveryPrice()
     }
     this,toppings.forEach(function(topping){
         totalToppings += topping.toppingPrice
     });
     total = (deliveryPrice +sizePrice + crustPrice + totalToppings) * numberOfPizza;
      
     return total;
 }

 $("document").ready(function(){
     $("input.delivery-yes").click(function(){
         alert("Thedelivery charge is" + new pizza().getDeliveryPrice());
         $("#delivery-address").show();
     });

     $("input.delivery-yes").click(function(){
        $("#delivery-address").hide();
     });
     
     function resetField(){
         $("#customer-name").val("");
         $("input[type='radio'][name='delivered']").prop("checked", false);
         $("input[type='checkbox'][name='toppings[]']").prop("checked", false);
         $("#delivery-address").hide();
         $("#number-of-pizza").val("");
     }

     $("form#order-form").submit(function(event){
        var customerName = $("#customer-name").val();
        var selectedPizzaSize = $("#pizza-size").val();
        var selectedPizzaCrust = $("#pizza-crust").val();
        var deliveryChoice = $("input[type='radio'][name='delivered']:checked").val();
        var deliveryAddress = "";
        
        var selectedToppings = [];

        var index = 0;

        $(":checkbox:checked").each(function(){
            selectedToppings[index ++] = $(this).val();


        });
        
        var orderedPizza = new pizza(inputtedCustomerName, selectedPizzaCrust, selectedPizzaSize);

        orderedPizza.setToppings(selectedToppings);

        if(deliveryChoice === "true"){
           
            deliveryAddress = $("#address").val();
            orderedPizza.setDeliveryAddress(deliveryAddress);
            orderedPizza.isDelivered = true;
            alert("Thank you for ordering! Your Pizza will be delivered to your location : "+orderedPizza.deliveryAddress);
            
        }

        var numberOfOrders = parseInt($("#number-of-pizza").val());

        var totalPrice = orderedPizza.calculateTotalPrice(numberOfOrders);

        $(".total-price").append("<h4 class='alert alert-info mt-2'>The Total price is: " +totalPrice + "RWF</h4>")

        $("#checkout").click(function(){
            $("#show-order").show();
            
            $(".customer-name").text(orderedPizza.customerName);
            $(".ordered-pizza-size").text(orderedPizza.pizzaSize);
            $(".ordered-pizza-crust").text(orderedPizza.pizzaCrust);
            $(".delivery-choice").text(orderedPizza.isDelivered);
            $(".number-of-order").text(numberOfOrders);
            

            orderedPizza.toppings.forEach(function(topping) {
                $("#toppings").append("<li>" +topping.toppingName+ "</li>")
            });


            $(".ordered-pizza-name-price").text(0);
            $(".ordered-pizza-size-price").text(orderedPizza.getPizzaSizePrice(selectedPizzaSize));
            $(".ordered-pizza-crust-price").text(orderedPizza.getPizzaCrustPrice(this.pizzaCrust));
               

            if(orderedPizza.isDelivered === true){
                $(".delivery-choice-price").text(orderedPizza.getDeliveryPrice);
              }else {
                $(".delivery-choice-price").text(0);
              }

              orderedPizza.toppings.forEach(function(topping) {
                $("#toppings-price").append("<li>" +topping.toppingPrice+ "</li>")
            });

            $(".total").text(totalPrice)


        });
         
        event.preventDefault();
        resetField();
    });

});
 


 