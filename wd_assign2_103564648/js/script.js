//////////////////////////////////////// Object based database \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// I am using a nested object array as a pseudo-database it will store useful information in key : value pairs so it repeatedly use it throughout this website script
// usage : restaurants[0].name == Event Horizon    .name is the key while the value is the actual name it is also has arrays in arrays 'nested' 

const restaurants = [
  {
    id: 'event_horizon',
    name: 'Event Horizon',
    cuisine: 'Outback BBQ',
    dietary: [], 

    budget: 'medium',
    purposes: ['date', 'business', 'family'],
    deposit: 20,

    price_range: '$20-$63 per person',
    description: 'Event Horizon is a bold Outback BBQ venue built around smoky grilled meats, dark slate plating, and a lively city dining room. It suits families who want generous sharing dishes, dates who like a dramatic setting, and business groups after a relaxed but memorable meal. Start with Darkside Burgers for something casual, or order Solar Steaks and Charcoal Chicken if you want the full fire-grilled experience.',
    menu: [
      { meal: 'darkside Burgers', price: 20 },
      { meal: 'Solar Steaks', price: 55 },
      { meal: 'Charcoal Chicken', price: 25 },
      { meal: 'Star Salad', price: 15 },
      { meal: 'Beer', price: 8 } 
    ], 
	location: "Melbourne CBD"
  },

  {
    id: 'cosmic_curry',
    name: 'Cosmic Curry',
    cuisine: 'North Indian',
    dietary: ['vegetarian', 'halal', 'gluten-free'],

    budget: 'medium',
    purposes: ['family', 'business'],
    deposit: 20,

    price_range: '$25-$45 per person',
    description: 'Cosmic Curry is a warm North Indian restaurant with rich sauces, fragrant rice, grilled paneer, and a comfortable group-friendly atmosphere. It suits families, business meals, and diners looking for vegetarian, halal, or gluten-free options. Butter Chicken and Lamb Biryani are strong mains for meat eaters, while Paneer Tikka, Garlic Naan, and Mango Lassi make the meal generous and easy to share.',
    menu: [
      { meal: 'Butter Chicken', price: 24 },
      { meal: 'Lamb Biryani', price: 26 },
      { meal: 'Paneer Tikka', price: 22 },
      { meal: 'Garlic Naan', price: 6 },
      { meal: 'Mango Lassi', price: 7 }
    ], 
	location: "Parramatta"
  }, 
    {
    id: 'stellar_sushi',
    name: 'Stellar Sushi',
    cuisine: 'Traditional Japanese',
    dietary: ['gluten-free', 'dairy-free'],

    budget: 'high',
    purposes: ['date', 'business'],
    deposit: 30,

    price_range: '$40-$80 per person',
    description: 'Stellar Sushi is a refined Japanese restaurant built around fresh fish, careful presentation, and a quiet dining room near Darling Harbour. It is best suited to dates, business dinners, and guests who want a slower, more polished meal. Choose the Omakase Set for the full experience, or order the Sashimi Platter and Dragon Roll if you want to share several clean, seafood-focused dishes.',
    menu: [
      { meal: 'Omakase Set', price: 75 },
      { meal: 'Dragon Roll', price: 28 },
      { meal: 'Sashimi Platter', price: 55 },
      { meal: 'Miso Soup', price: 7 },
      { meal: 'Green Tea', price: 5 }
    ], 
	location: "Darling Harbour"
  },  
   {
    id: 'quantum_quiche',
    name: 'Quantum Quiche',
    cuisine: 'Modern French',
    dietary: ['vegetarian'],

    budget: 'medium',
    purposes: ['date', 'business'],
    deposit: 25,

    price_range: '$35-$60 per person',
    description: 'Quantum Quiche is a calm Modern French bistro with low lighting, polished service, and a quieter pace than the casual venues. It suits dates and business meals where conversation matters as much as the food. The Duck Confit is the main dish to choose for a special meal, while the Vegetable Quiche and Creme Brulee make it welcoming for vegetarian diners and dessert lovers.',
    menu: [
      { meal: 'Duck Confit', price: 42 },
      { meal: 'Croque Madame', price: 24 },
      { meal: 'Vegetable Quiche', price: 22 },
      { meal: 'Creme Brulee', price: 16 },
      { meal: 'French Wine', price: 14 }
    ], 
	location: "Surry Hills"
  }, 
  {
    id: 'nebula_noodles',
    name: 'Nebula Noodles',
    cuisine: 'Pan-Asian',
    dietary: ['vegetarian', 'vegan', 'dairy-free'],

    budget: 'low',
    purposes: ['family'],
    deposit: 20,

    price_range: '$20-$35 per person',
    description: 'Nebula Noodles is a lively Pan-Asian noodle bar with warm broth, fast service, and a relaxed communal feel. It suits families and casual groups who want filling food without a formal dining room. The Black Sesame Ramen is a strong choice for rich flavour, while Vegan Dan Dan Noodles and Spring Rolls give vegetarian and vegan diners plenty to enjoy.',
    menu: [
      { meal: 'Black Sesame Ramen', price: 22 },
      { meal: 'Vegan Dan Dan Noodles', price: 20 },
      { meal: 'Prawn Laksa', price: 24 },
      { meal: 'Spring Rolls', price: 12 },
      { meal: 'Iced Tea', price: 6 }
    ], 
	location: "South Brisbane"
  },
  {
    id: 'pulsar_pizza',
    name: 'Pulsar Pizza',
    cuisine: 'Neapolitan Italian',
    dietary: ['vegetarian'],

    budget: 'low',
    purposes: ['family', 'date'],
    deposit: 15,

    price_range: '$18-$40 per person',
    description: 'Pulsar Pizza is a relaxed Neapolitan Italian spot centred on a wood-fired oven, crisp crusts, and simple ingredients. It works well for family dinners, group catch-ups, and easy date nights where the food can be shared. Order the Margherita for a classic choice, the Diavola for heat, or the Truffle Funghi when you want something richer.',
    menu: [
      { meal: 'Margherita Pizza', price: 19 },
      { meal: 'Diavola Pizza', price: 23 },
      { meal: 'Truffle Funghi Pizza', price: 26 },
      { meal: 'Garlic Bread', price: 10 },
      { meal: 'Soft Drink', price: 5 }
    ], 
	location: "Fortitude Valley"
  },
  {
    id: 'singularity_seoul',
    name: 'Singularity Seoul',
    cuisine: 'Korean BBQ',
    dietary: ['gluten-free', 'dairy-free'],

    budget: 'medium',
    purposes: ['family', 'business'],
    deposit: 25,

    price_range: '$35-$70 per person',
    description: 'Singularity Seoul is a lively Korean BBQ venue in Strathfield built around tabletop grills, sizzling marinades, and sharing-style dining. It suits families who enjoy interactive meals and business groups looking for something social but still polished. Start with Beef Bulgogi or Galbi Short Rib for rich marinated flavour, add Samgyeopsal Pork Belly for the grill, and balance the table with Kimchi and Banchan.',
    menu: [
      { meal: 'Beef Bulgogi', price: 34 },
      { meal: 'Samgyeopsal Pork Belly', price: 36 },
      { meal: 'Galbi Short Rib', price: 44 },
      { meal: 'Kimchi and Banchan', price: 12 },
      { meal: 'Korean Pear Soda', price: 7 }
    ], 
	location: "Strathfield"
  } ];

 //Constants

  const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10,}$/;
  const register_phone_regex = /^[0-9]{8,15}$/;
  const reservation_phone_regex = /^[0-9]{10,15}$/;
  const card_regex = /^[0-9]+$/;
  const userpattern = /^[A-Za-z0-9_]{5,}$/;
  const valid_vouchers = ["BIGSHOT10000", "SWINHD90PLZZ", "JAVASCRIPT26" , "STUDENT-2026"];

// helper functions 

function show_error(input_id, error_id, message) {

 $(error_id).text(message).addClass("visible"); 
 $(input_id).addClass("invalid"); 

}

function find_restaurant(id) {
    for (var i = 0; i < restaurants.length; i++) {
      if (restaurants[i].id == id) return restaurants[i];
    }
    return null;
  }


/////////////////////////////////////////////////////////////////////////////// Registration \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function init () { // very important basically acts as main as it calls all functions


$("#regform").submit(validate_register);/*link function validate() to the submit event
of the form */
$("#regform input[name='dietary']").change(sync_register_dietary);
init_reservation();
init_recommendation(); 
init_bill();

}


function validate_register(event) {
	 
	var email = $("#email").val(); 
	var phone = $("#reg-phone").val();
	var pwd1 = $("#pwd1").val();
	var pwd2 = $("#pwd2").val();
	var uname = $("#uname").val();
	var country = $("#reg-country").val();
	var genm = $("#genm").prop("checked");
	var genf = $("#genf").prop("checked");
	var geno = $("#geno").prop("checked");								
	var result = true;								/* assumes no errors */

  $("#regform .error-msg").text("").removeClass("visible");
  $("#regform input, #regform select, #regform textarea").removeClass("invalid");

  if (uname == "") {
    show_error("#uname", "#err-username", "Username cannot be empty.");
    result = false;
  } else if (!uname.match(userpattern)) {
    show_error("#uname", "#err-username", "Username must be at least 5 characters, using only letters, numbers and underscores.");
    result = false;
  }

  if (email == "") {
    show_error("#email", "#err-email", "Email address cannot be empty.");
    result = false;
  } else if (!email.match(email_regex)) {
    show_error("#email", "#err-email", "Email address is invalid.");
    result = false;
  }

  if (phone == "") {
    show_error("#reg-phone", "#err-phone", "Phone number cannot be empty.");
    result = false;
  } else if (!phone.match(register_phone_regex)) {
    show_error("#reg-phone", "#err-phone", "Phone number must be 8 to 15 digits.");
    result = false;
  }

  if (country == "") {
    show_error("#reg-country", "#err-country", "Country or region must be selected.");
    result = false;
  }

  if (pwd1 == "") {
    show_error("#pwd1", "#err-password", "Password cannot be empty.");
    result = false;
  } else if (!pwd1.match(password_regex)) {
    show_error("#pwd1", "#err-password", "Password must be at least 10 characters including an uppercase letter, a lowercase letter, a number, and a special character.");
    result = false;
  }

  if (pwd2 == "") {
    show_error("#pwd2", "#err-confirm", "Confirm password cannot be empty.");
    result = false;
  } else if (pwd1 != pwd2) {
    show_error("#pwd2", "#err-confirm", "Passwords do not match.");
    result = false;
  }

  if ((!genm) && (!genf) && (!geno)) {
    show_error("#regform input[name='gender']", "#err-gender", "A gender must be selected.");
    result = false;
  }

  if ($("#regform input[name='dietary']:checked").length == 0) {
    show_error("#regform input[name='dietary']", "#err-dietary", "A dietary preference must be selected.");
    result = false;
  }

  if (result) {
    event.preventDefault();
    alert("Account created successfully!");
  }

return result;
}

function sync_register_dietary() {
  if ($(this).val() == "none" && $(this).prop("checked")) {
    $("#regform input[name='dietary']").not(this).prop("checked", false);
  } else if ($(this).prop("checked")) {
    $("#dietary-none").prop("checked", false);
  }
}

/////////////////////////////////////////////////////////////////////// Reservation \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\





function init_reservation (){


if ($("#reservation-form").length == 0) {
    return;
  }

  $("#reservation-form").submit(validate_reservation);
  $("#res-restaurant").change(credential_validation);
  $("#res-method").change(toggle_payment);
  $("#same-email").change(same_as_email);
  $("#res-email").keyup(same_as_email);

  apply_Url_restaurant();
  credential_validation();
  toggle_payment();
}








function validate_reservation() {

  var fullname = $("#res-fullname").val();
  var email = $("#res-email").val();
  var phone = $("#res-phone").val();
  var restaurant = $("#res-restaurant").val();
  var voucher = $("#res-voucher").val();
  var datetime = $("#res-datetime").val();
  var people = $("#res-people").val();
  var method = $("#res-method").val();
  var billingEmail = $("#res-billing-email").val();
  var cardType = $("#res-card-type").val();
  var cardNumber = $("#res-card-number").val();

  var result = true;

$("#reservation-form .error-msg").text("").removeClass("visible");
$("#reservation-form input, #reservation-form select, #reservation-form textarea").removeClass("invalid");  

if (fullname == "") {

show_error("#res-fullname", "#err-fullname", "Full name cannot be empty")
result = false;

}

if (email == "") {
  
show_error("#res-email", "#err-email", "Email address cannot be empty")
result = false;

} else if (!email.match(email_regex)) {
  show_error("#res-email", "#err-email", "Email address is invalid");
  result = false;
}

if (phone == "") {
  show_error("#res-phone", "#err-phone", "Phone number cannot be empty");
  result = false;
} else if (!phone.match(reservation_phone_regex)) {
  show_error("#res-phone", "#err-phone", "Phone number must be 10 to 15 digits");
  result = false;
}

if (restaurant == "") {
  show_error("#res-restaurant", "#err-restaurant", "A restaurant must be selected");
  result = false;
}

if (datetime == "") {
  show_error("#res-datetime", "#err-datetime", "Reservation date and time cannot be empty.");
  result = false;
} else if (new Date(datetime) < new Date()) { // says if date selected comes out less than current date it is no good
  show_error("#res-datetime", "#err-datetime", "Reservation date and time cannot be in the past");
  result = false;
}

if (people == "" || isNaN(parseInt(people)) || parseInt(people) <= 0) {
  show_error("#res-people", "#err-people", "Number of people must be greater than 0.");
  result = false;
}

if (method == "") { 
  show_error("#res-method", "#err-method", "A deposit method must be selected.");
  result = false;
}

if (billingEmail == "") {
  show_error("#res-billing-email", "#err-billing-email", "Billing email address cannot be empty.");
  result = false;
} else if (!billingEmail.match(email_regex)) {
  show_error("#res-billing-email", "#err-billing-email", "Billing email address must be valid.");
  result = false;
} 

if (method == "online") {
  if (cardType == "") {
    show_error("#res-card-type", "#err-card-type", "Card type must be selected.");
    result = false;
  }

  if (cardNumber == "") {
    show_error("#res-card-number", "#err-card-number", "Credit card number cannot be empty.");
    result = false;
  } else if (!cardNumber.match(card_regex)) {
    show_error("#res-card-number", "#err-card-number", "Credit card number must contain digits only.");
    result = false;
  } else if ((cardType == "visa" || cardType == "mastercard") && cardNumber.length != 16) {
    show_error("#res-card-number", "#err-card-number", "Invalid");
    result = false;
  } else if (cardType == "amex" && cardNumber.length != 15) {
    show_error("#res-card-number", "#err-card-number", "Invalid");
    result = false;
  }
}

if (method == "voucher") {
  if (voucher == "") {
    show_error("#res-voucher", "#err-voucher", "No code detected");
    result = false;
  } else if (!valid_vouchers.includes(voucher)) {
    
  show_error("#res-voucher", "#err-voucher", "Invalid voucher");
  result = false; 

  } }

  return result;
}


function credential_validation() {

  var restaurant = $("#res-restaurant").val();
  var selected_restaurant = find_restaurant(restaurant);

  if (selected_restaurant != null) {
    $("#res-deposit").val("$" + selected_restaurant.deposit);
    $("#deposit-info").text("Deposit updated for selected restaurant.");
  } else {
    $("#res-deposit").val("");
    $("#deposit-info").text("");
  }
}




function toggle_payment() {

  var method = $("#res-method").val();

  if (method == "voucher") {
    $("#voucher-row").prop("hidden", false);
    $("#card-type-row").prop("hidden", true);
    $("#card-number-row").prop("hidden", true);
    $("#res-card-type").val("");
    $("#res-card-number").val("");
  } 
  
  else if (method == "online") {
    $("#voucher-row").prop("hidden", true);
    $("#card-type-row").prop("hidden", false);
    $("#card-number-row").prop("hidden", false);
    $("#res-voucher").val("");
  } 
  
  else {
    $("#voucher-row").prop("hidden", true);
    $("#card-type-row").prop("hidden", true);
    $("#card-number-row").prop("hidden", true);
    $("#res-voucher").val("");
    $("#res-card-type").val("");
    $("#res-card-number").val("");
  }
}



function same_as_email() {

	  if ($("#same-email").prop("checked")) {
    $("#res-billing-email").val($("#res-email").val());
  }
}



function apply_Url_restaurant() {
  var params = new URLSearchParams(window.location.search);
  var r = params.get("r");

  if (!r) {
    return;
  }

  r = r.replace(/-/g, "_");

  var select = $("#res-restaurant");

  if (select.length) {
    select.val(r);
    credential_validation();
  }
}

/////////////////////////////////////////////////////////////////////// Recommendation \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


function init_recommendation (){

 if ($("#rec-form").length == 0) {
    return;
  }

  $("#rec-form").submit(validate_recommendation);
  $("#rec-form input[name='dietary']").change(sync_rec_dietary);

}
function validate_recommendation (event) {

 event.preventDefault();

  var dietary = get_rec_dietary_preferences();
  var budget = $("#rec-budget").val();
  var purpose = $("#rec-purpose").val();

  if (dietary.length == 0 || budget == "" || purpose == "") {
    $("#rec-error").text("Please complete all recommendation fields.");
    $("#rec-error").addClass("visible");
    return false;
  }

  $("#rec-error").text("");
  $("#rec-error").removeClass("visible");

  recommendations(dietary, budget, purpose);
  return false;

}

function get_rec_dietary_preferences() {
  var dietary = [];

  $("#rec-form input[name='dietary']:checked").each(function() {
    dietary.push($(this).val());
  });

  return dietary;
}

function sync_rec_dietary() {
  if ($(this).val() == "none" && $(this).prop("checked")) {
    $("#rec-form input[name='dietary']").not(this).prop("checked", false);
  } else if ($(this).prop("checked")) {
    $("#rec-dietary-none").prop("checked", false);
  }
}

function recommendations(dietary, budget, purpose) { // very similar to the track album project done in COS10009

 var matches = [];


  var index = 0
  while ( index < restaurants.length) {
    var restaurant = restaurants[index];
    var score = 0;

    if (dietary.includes("none") || dietary_matches(restaurant, dietary)) {
      score += 1;

      if (restaurant.budget == budget) {
        score += 1;
      }

      if (restaurant.purposes.includes(purpose)) {
        score += 1;
      }

      restaurant.score = score;
      matches.push(restaurant);
    }

  index += 1
}

  matches.sort(function(a, b) {
    return b.score - a.score;
  });

  recommendation_display(matches);




}

function dietary_matches(restaurant, dietary) {
  var index = 0;

  while (index < dietary.length) {
    if (!restaurant.dietary.includes(dietary[index])) {
      return false;
    }

    index += 1;
  }

  return true;
}


function recommendation_display(matches) {

 var output = "";

  if (matches.length == 0) {
    $("#result-cards").html("<p class='no-result'>No matching restaurants found.</p>");
    $("#rec-results").prop("hidden", false);
    return;
  }

  var index = 0

  while ( index < matches.length && index < 3) {
    output += "<article class='card rec-card' data-id='" + matches[index].id + "'>";
    output += "<h3>" + matches[index].name + "</h3>";
    output += "<p>" + "Cuisine: " + matches[index].cuisine + "</p>";
    output += "<p>" + "Location: " + matches[index].location + "</p>";
    output += "<p>" + "Price Range: " + matches[index].price_range + "</p>";
    output += "<p>" + "Description: " + matches[index].description + "</p>";
    output += "</article>";

	index += 1
  }

  $("#result-cards").html(output);
  $("#rec-results").prop("hidden", false);

  $(".rec-card").click(function() {
    $(".rec-card").removeClass("selected");
    $(this).addClass("selected");

    var selectedId = $(this).attr("data-id");
    recommendation_link(selectedId);

  });

  recommendation_link(matches[0].id);



}

function recommendation_link(id) {

	$("#reserve-link").attr("href", "reservation.html?r=" + id);
} 

/////////////////////////////////////////////////////////////////////// Bill calculator\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function init_bill() {
  if ($("#calc-restaurant").length == 0) {
    return;
  }

  $("#calc-restaurant").change(render_menu_items);
  $("#num-guests").keyup(update_bill_total);
  $("#num-guests").change(update_bill_total);

  render_menu_items();
  update_bill_total();
}

function render_menu_items() {
  var restaurant_id = $("#calc-restaurant").val();
  var selected_restaurant = find_restaurant(restaurant_id);
  var output = ""; 
  var index_menu = 0;

  if (selected_restaurant == null) {
    $("#menu-section").prop("hidden", true);
    $("#calc-placeholder").show();
    $("#menu-items").html("");
    update_bill_total();
    return;
  }

  $("#menu-section").prop("hidden", false);
  $("#calc-placeholder").hide();
  $("#menu-title").text("Select Dishes - " + selected_restaurant.name);

 while (index_menu < selected_restaurant.menu.length) {

  output += "<label class='menu-item'>";
  output += selected_restaurant.menu[index_menu].meal;
  output += "<span>$" + selected_restaurant.menu[index_menu].price + "</span>";
  output += "<input type='number' class='bill-item' value='0' min='0' data-price='" + selected_restaurant.menu[index_menu].price + "' />";
  output += "</label>";

  index_menu += 1;
}

$("#menu-items").html(output);
$(".bill-item").keyup(update_bill_total);
$(".bill-item").change(update_bill_total);

  update_bill_total();
}

function update_bill_total() {
  var restaurant_id = $("#calc-restaurant").val();
  var selected_restaurant = find_restaurant(restaurant_id);

  var subtotal = 0;
  var guests = parseInt($("#num-guests").val());

  $(".bill-item").each(function() {
  var quantity = parseInt($(this).val());
  var price = parseFloat($(this).attr("data-price"));

  if (!isNaN(quantity) && quantity > 0) {
    subtotal += quantity * price;
  }
});

  if (isNaN(guests) || guests <= 0) {
    guests = 1;
  }

  var perPerson = subtotal / guests;
  var deposit = 0;

  if (selected_restaurant != null) {
    deposit = selected_restaurant.deposit;
  }

  var total = subtotal + deposit; // hard math

  $("#sum-dishes").text("$" + subtotal.toFixed(2)); // keeps it to two decimals
  $("#sum-guests").text(guests);

  $("#sum-per-person").text("$" + perPerson.toFixed(2));
  $("#sum-deposit").text("$" + deposit.toFixed(2));
  $("#sum-total").text("$" + total.toFixed(2));

}


$(document).ready(init);
