(function () {
    "use strict";


    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined below, if the color passed is not
     * one of the ones defined below, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */

/*Don't change the next two lines!
These lines create two variables for you:
- `colors`: a list of the colors of the rainbow
- `randomColor`: contains a single random color value from the list (this
                 will contain a different color every time the page loads)
    */var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    function analyzeColor(red, orange, yellow, green, blue, indigo, violet){
        var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        if (red === "Red is hot"){
        console.log("Firetrucks are red");
        } else if (orange === "Orange are the same color as oranges"){
        console.log("Good source of vitamin C");
        } else if (yellow === "Bananas are yellow"){
        console.log("Good source of potassium");
        } else if (green === "Money is green"){
        console.log("We like green");
        } else if (blue === "The sky is blue"){
        console.log("Blue is sky");
        } else if (indigo === "Some shade of purple?"){
        console.log("I guess it's purple?");
        } else if (violet === "Another shade of purple???")
        console.log("I guess this is purple too")

    }
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */

    console.log(analyzeColor(randomColor));
    console.log("The random color is " + randomColor);

    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */
        // var randomColor = prompt("what's your favorite color?");
        // switch (randomColor) {
        //     case "Blue":
        //         alert("the sky is blue");
        //         break;
        //     case "red":
        //         alert("firetrucks are red");
        //         break;
        //     case "Yellow":
        //         alert("Bananas are yellow");
        //         break;
        //     case("green"):
        //         alert("Money is green");
        //         break;
        //     case("indigo"):
        //         alert("it's purple right?");
        //         break;
        //     case("violet"):
        //         alert("it's purple too");
        //         break;
        //     default:
        //         alert(randomColor + "All colors should be liked equally.");
        //         break;
        // }
    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

    var useColor = prompt("What is your favorite color?");
    var returnAlert = alert(analyzeColor(userColor));



    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */

        function calculateTotal (total, discount){
            if (discount === "1") {
                return total - (.1 * total);
            }
            if (discount === "2") {
                return total - (.25 * total);
            }
            if (discount === "3") {
                return  total - (.35 * total);
            }
            if (discount === "4") {
                return total - (.5 * total);
            }
            if (discount === "5") {
                return total - (0 * total);
            }
    }
        console.log()

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var getuserBill = prompt('What was your total bill today?');
alert("today you lucky # is: " + luckyNumber);
var userNewBill = calculateTotal(luckyNumber, getuserBill);
alert(userNewBill);

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */

    function numChecker(){
        var numToCheck = parseInt(prompt("what is your #?"), 10);
        while (isNaN(numToCheck)) {
            alert("That ain't no number!");
            var (isNaN(numToCheck) === false) {
                return numToCheck;
            }
        } return numToCheck;
    }

    function oddChecker (num){
        if (num % 2 === 0){
            alert("Your # is even.");
        }else{
            alert("Your # is odd.");
        }
    }

    function add100(num){
        alert("Your # plus 100 is: " + (num + 100));
    }
    function signChecker(num){
        if (num > 0 ){
            alert("You # is a positive.");
        }else if (num < 0){
            alert("Your # is a negative");
        }else{
            alert("Your number is not positive or negative bc it is a zero!.");
        }
    }

    function numTest(){
        let playCheck = confirm("I want to play a number game");
        if (playCheck){
            var number = numChecker();
            oddChecker(num);
            add100(num);
            signChecker(num);
            alert("Thank you come again.");
        }else{
            alert("Okaaayyyy");
            window.close();

        }
    }






















})()
