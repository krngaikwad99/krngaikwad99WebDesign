var day;
var meal;
var describe;

switch(new Date().getDay()) {
    case 0:
        day = "Sunday.";
        meal = "Idli Sambar."
        describe = "Sambar is a lentil based soup/stew from south India. Comes with idli which are rice cakes.";
        document.getElementById("sambar").style.display = "block";
        
        break;
    case 1:
        day = "Monday.";
        meal = "Gobi Manchurian.";
        describe ="Gobi Manchurian is a cauliflower based dish with Chinese influences.";
        document.getElementById("manchurian").style.display = "block";

        break;
    case 2:
        day = "Tuesday.";
        meal = "Indian Tacos.";
        describe = "Indian style tacos. What else would you eat on taco tuesday?";
        document.getElementById("taco").style.display = "block";

        break;
    case 3:
        day = "Wednesday. ";
        meal = "Vada Pav.";
        describe = "Small slider-like sandwiches with a potato patty. Comes with onions and some special chutney!";
        document.getElementById("vadapav").style.display = "block";

        break;
    case 4:
        day = "Thursday. ";
        meal = "Tandoori Chicken.";
        describe = "Traditional Indian chicken made straight from a tandoor clay oven! Hot and Fresh!";
        document.getElementById("tandoori").style.display = "block";

        break;
    case 5:
        day = "Friday. ";
        meal = "Fish Curry.";
        describe = "Fresh fish made in spicy indian style curry.";
        document.getElementById("fishcurry").style.display = "block";

        break;
    case  6:
        day = "Saturday. ";
        meal = "Samosa Chaat.";
        describe = "Indian Samosas cut and made into a chaat, with lots of onions, tomatos, chick peas, and chutneys!";
        document.getElementById("samosachaat").style.display = "block";

        break;
    }
     
    document.getElementById("weekday").innerHTML = "Today is " + day;
    document.getElementById("mealofday").innerHTML = "Today's special is " + meal;
    document.getElementById("description").innerHTML = describe;
