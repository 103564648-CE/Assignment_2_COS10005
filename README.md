============================================================
Dark Matter Dining - Restaurant Discovery & Reservation Site
COS10005 Web Development, Assignment 2, Semester 1 2026
Author: Cameron Evans - 103564648
============================================================


1. WEBSITE STRUCTURE
--------------------

assignment2/
  index.html          - Home page. Introduces the platform, its
                         purpose, target users, and services.
  restaurants.html    - Lists seven restaurants grouped by city, each
                         with cuisine, menu, prices, deposit and image.
  recommend.html      - Recommendation form. Suggests restaurants
                         based on the user's answers (uses JavaScript).
  register.html       - Account sign-up form with JavaScript validation
                         (front-end only, no account is actually saved).
  reservation.html    - Booking form with deposit and payment logic.
  bill.html           - Optional bonus page: estimated bill calculator.
  css/
    style.css         - All site styling (one external stylesheet,
                         linked on every page).
  js/
    script.js         - All site JavaScript (validation, recommendation
                         logic, bill calculator).
    jquery.min.js     - jQuery library (used to make the JavaScript
                         shorter and easier to read/use).
  images/             - Hero image and one photo per restaurant.
  Readme.txt          - This file.

A navigation bar appears at the top of every page so the user can
reach any page from anywhere. The link for the current page is
highlighted using the "active" class. All pages use HTML5 semantic
elements (header, nav, section, footer). 




2. JAVASCRIPT VALIDATION LOGIC
-------------------------------------------------
as soon as the page finishes loading, an
init() function runs and connects each form to its checking function.
Each form is checked before it is allowed to submit. If anything is
wrong, a red error message appears next to the field and submission
is blocked until every error is fixed.

REGISTRATION FORM (register.html)
  - The username must be filled in, at least 5 characters, and contain
    only letters, numbers and underscores.
  - Email: must be filled in and look somewhat like a real email address.
  - Phone: must be filled in and be 8 to 15 digits (only integers allowed).
  - Country: must be selected.
  - Password: must be at least 10 characters and include an uppercase
    letter, a lowercase letter, a number and a special character.
  - Confirm Password: must match the password exactly.
  - Gender: one option must be selected.
  - Dietary preferences: at least one box must be ticked. Ticking
    "No preference" clears the other boxes, and ticking any other box
    clears "No preference".

RESERVATION FORM (reservation.html)
  - Full name, email, phone, restaurant, date/time and number of
    people must all be filled in.
  - Email: must be in a valid format.
  - Phone: must be 10 to 15 digits.
  - Date and time: cannot be in the past.
  - Number of people: must be greater than 0.
  - Deposit amount fills in automatically when a restaurant is chosen.
  - Deposit method must be selected:
      * Voucher  > a voucher code box appears. The code is checked
                    against a small list of valid demo codes.
      * Online   > card type and card number boxes appear. The card
                    number must be digits only: 16 digits for
                    Visa/Mastercard, 15 digits for American Express
                    (format check only - no real payment is processed).
  - Billing email must be valid. Ticking "Same as email address"
    copies the email entered above into the billing email box.
  - If the user arrives from the Home, Restaurants or Recommendation
    page, the chosen restaurant is pre-filled using the web address
    (for example reservation.html?r=event_horizon).

RECOMMENDATION FORM (recommend.html)
  - The user picks dietary preferences, a budget range and a dining
    purpose. All three must be answered.
  - Each restaurant is given a score: +1 if it suits the dietary
    choice, +1 if its budget matches, and +1 if it suits the purpose.
  - Restaurants that do not meet the dietary choice are removed.
  - Remaining restaurants are sorted by score and the top three are
    shown as clickable cards.
  - Clicking a card and then "Reserve This Restaurant" sends that
    restaurant to the reservation page.

BILL CALCULATOR (bill.html - bonus page)
  - Choosing a restaurant shows its menu dishes.
  - Entering a quantity for each dish updates the subtotal instantly.
  - The number of guests is used to show an estimated cost per person.
  - The restaurants deposit is added to give the estimated total.


3. KNOWN ISSUES / LIMITATIONS
-----------------------------

- There is no actual database or server, so the
  registration form does not actually create or store an account.
- Credit card checking is format-only (it counts the digits). No real
  card validation or payment happens. 
- Voucher codes are written in the actual JavaScript (unacceptable in a real website)
- The bill calculator gives an estimate only and does not include any
  drinks specials, service charges or taxes.


4. REFERENCES
-------------

all images/logos were created by ChatGPT to avoid copyright

- Images used on the site:
    images/main.png
    images/event_horizon.png
    images/nebula_noodles.png
    images/pulsar_pizza.png
    images/quantum_quiche.png
    images/stellar_sushi.png
    images/cosmic_curry.png 
    images/singularity_seoul.png

 
5. ACCESSIBILITY 
--------------------
I added some accessibility features. This site uses semantic HTML elements, labelled navigation 
areas and descriptive image alternative text to make the pages easier to
understand with most assistive technology. 

The Form error messages use role="alert" so validation feedback can be announced by screen
readers, I made sure the colour contrast was checked for important text such as
error messages and the calculator placeholder text as not to cause eye strain.

Notes: I added a glow effect to my title and the header navigation uses clippath to create a trapazoid look for the nav links
