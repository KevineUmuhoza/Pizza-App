$('.submit').click(function () {
    var Name = $('#fname').val();
    var Email = $('#email').val();
    var Message = $('message');
    var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
    if (Name == '' || Email == '' || Message == '') {
        alert('Please fill in the missing information!');
    } else {
        alert(' Hello ' + Name + ', we have received your message. Thank you for reaching out to us.');
    }
});




var pizza = function(customerName, pizzaCrust, pizzaSize){
    this.customerName = customerName;
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
    if(pizzaSize === "small"){
        return 3500;
    }
    else if(pizzaSize === "medium"){
        return 5000;
    }
    else{
        return 6000;
    }
}
 pizza.prototype.getPizzaCrustPrice = function(crust){
     if(this.pizzaCrust === "crisped"){
         return 1000;
     }
     else if(this.pizzaCrust === "glutten-free"){
         return 1500;
     }
     else{
         return 2000;
     }
 }

 pizza.prototype.setToppings = function(toppings){
     for(var i=0; i<toppings.length; i++){
         
        if(toppings[i] === "bacon"){
            this.toppings.push(bacon)
        }
        if(toppings[i] === "onions"){
            this.toppings.push(onions)
        }
        if(toppings[i] === "pineaple"){
            this.toppings.push(pineaple)
        }
        if(toppings[i] === "extra-cheese"){
            this.toppings.push(extra-cheese)
        }
        if(toppings[i] === "spinach"){
            this.toppings.push(spinach)
        }
        if(toppings[i] === "black-olives"){
            this.toppings.push(black-olives)
        }
        if(toppings[i] === "sausage"){
            this.toppings.push(sausage)
        }
        if(toppings[i] === "ham"){
            this.toppings.push(ham)
        }
        if(toppings[i] === "pepperoni"){
            this.toppings.push(pepperoni)
        }
        if(toppings[i] === "green-pepper"){
            this.toppings.push(green-pepper)
        }
     }
 }

 var bacon = new topping("bacon", 100);
 var onions = new topping("onions", 150);
 var pineaple = new topping("pineaple", 200);
 var extraCheese = new topping("extra-cheese", 250);
 var spinach = new topping("spinach", 50);
 var blackOlives = new topping("black-olives", 150);
 var sausage = new topping("sausage", 500);
 var ham = new topping("ham", 350);
 var pepperoni = new topping("pepperoni", 200);
 var greenPepper = new topping("green-pepper", 100);

 pizza.prototype.calculateTotalPrice = function(numberOfOrders){
     var total = 0;
     var deliveryPrice = 0;
     var sizePrice = this.getPizzaSizePrice(this.pizzaSize);
     var crustPrice = this.getPizzaCrustPrice(this.pizzaCrust);
     var totalToppings = 0;

     if(this.isDelivered){
         deliveryPrice = this.getDeliveryPrice()
     }
     this.toppings.forEach(function(topping){
         totalToppings += topping.toppingPrice
     });

     total = (deliveryPrice + sizePrice + crustPrice + totalToppings) * numberOfOrders;
      
     return total;
 }

 $("document").ready(function(){
     $("input.delivery-yes").click(function(){
         alert("The delivery charge is" + " " + new pizza().getDeliveryPrice());
         $("#delivery-address").show();
     });

     $("input#delivery-no").click(function(){
        $("#delivery-address").hide();
     });
     
     function resetField(){
         $("#customer-name").val("");
         $("input[type='radio'][name='delivered']").prop("checked", false);
         $("input[type='checkbox'][name='toppings[]']").prop("checked", false);
         $("#delivery-address").val("");
         $("#delivery-address").hide();
         $("#number-of-pizza").val("");
     }

     $("form#order-form").submit(function(event){
        var inputtedCustomerName = $("#customer-name").val();
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
            alert("Thank you for ordering! Your Pizza will be delivered to your location : " + " " + orderedPizza.deliveryAddress);
            
        }

        var numberOfOrders = parseInt($("#number-of-pizza").val());

        var totalPrice = orderedPizza.calculateTotalPrice(numberOfOrders);

        $(".total-price").append("<h4 class='alert alert-info mt-2'>The Total price is: " +totalPrice + "Rwf</h4>")

        $("#checkout").click(function(){
            $("#show-order").show();
            
            $(".customer-name").text(orderedPizza.customerName);
            $(".ordered-pizza-size").text(orderedPizza.pizzaSize);
            $(".ordered-pizza-crust").text(orderedPizza.pizzaCrust);
            $(".delivery-choice").text(orderedPizza.isDelivered);
            $(".number-of-orders").text(numberOfOrders);
            

            orderedPizza.toppings.forEach(function(topping) {
                $("#toppings").append("<li>" +topping.toppingName+ "</li>")
            });


            $(".customer-name").text(0);
            $(".pizza-size-cost").text(orderedPizza.getPizzaSizePrice(selectedPizzaSize));
            $(".pizza-crust-cost").text(orderedPizza.getPizzaCrustPrice(this.pizzaCrust));
               

            if(orderedPizza.isDelivered === true){
                $(".delivery-cost").text(orderedPizza.getDeliveryPrice);
              }else {
                $(".delivery-cost").text(0);
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
 


 