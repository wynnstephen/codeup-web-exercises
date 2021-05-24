// // Before coding up an event, let's get some dissection out of the way
//
// //TODO: Event - the type of trigger that will fire off
// //  -> click, dblclick, submit, hover, keyup, keydown, mouseover, mouseout, change, and many more!
// //  -> https://developer.mozilla.org/en-US/docs/Web/Events
//
// getBang();
//
// function getBang() {
//     document.getElementById("Home")
//         .addEventListener("click", appendBang)
// }
//
// function appendBang() {
//     document.getElementById("Home")
//         .appendChild(getImageNode());
//     alert("*GET OFF MY LAWN!!!")
// }
//
// function getImageNode() {
//     let imageNode = document.createElement("img")
//     imageNode.setAttribute("src", "../img/bang.jpg");
//     imageNode.setAttribute("class", "col-12");
//     return imageNode;
// }
//
// //TODO: Listener - what will *happen* when the event fires off
// //  -> Can be whatever you want/need. For example:
// //      -> On click, change the background color
// //      -> On hover, a description pops up
// //      -> On form submission, disable submit button
// //      -> On form submission, display user inputs to the screen in a new element
//
// // changeColor();
// //
// // function changeColor() {
// //     document.getElementById("Make another element")
// //         .addEventListener("click", appendColor)
// // }
// // function appendColor() {
// //     document.getElementById("Make another element")
// //     .appendChild(getColorChange());
// //         alert("Time for a switch up!");
// // }
// // function getColorChange() {
// //     document.body.style.backgroundColor = "red";
// //     return changeColor;
// // }
//
// // TODO: Putting it together
// //  -> In order to add an event listener to a node, we follow a boilerplate process:
// //      -> Pick your element(s) using your desired document method (getElementById, class, selector, selectorAll)
// //      -> chain .addEventListener() on to the selected node(s) -> myNode.addEventListener()
// //      -> pass two arguments to .addEventListener():
// //          -> the type of event (as a string). "click", "hover", etc
// //          -> the listener definition either as an inline function or a passed function definition
// //      -> Wrap all of this in a function and call that function (your event won't fire unless it's actually called to be added, right?)
// // TODO: Your function will end up looking something like this
// changeColor();
//
// function changeColor() {
//     document.getElementById("Make another element")
//         .addEventListener("click", appendColor)
// }
//
// function appendColor() {
//     document.getElementById("Make another element")
//         .appendChild(getColorChange());
//     alert("Time for a switch up!");
// }
//
// function getColorChange() {
//     document.body.style.backgroundColor = "red";
//     return changeColor;
// }
//
// document.addEventListener("click", function () {
//     document.getElementById('sus').innerHTML = "Hello World!"
// });
// /*
//     function addEvent(){
//         var myNode = document.getElementById("myId");
//         myNode.addEventListener("click", getListener);
//     }
//
//     function getListener(){
//         // make changes here
//         // maybe append new element nodes, change style, add/remove text, etc
//     }
// */
// // We have talked about changing content/styles and adding/removing/altering elements in DOM
// // Now, we need to think about WHEN and WHY we should make those changes
// // In dom-events-basics.html, we have a Boostrap navbar.
// // Perhaps the content in the body (below the navbar) should change when a user clicks a sus link
// setSuspectEvent();
//
// function setSuspectEvent() {
//     document.getElementById("Eventful")
//         .addEventListener("click", appendSusNode);
// }
//
// function appendSusNode() {
//     document.getElementById("Eventful")
//         .appendChild(getImageNode());
// }
//
// function getImageNode() {
//
//     let imageNode = document.createElement("img");
//     imageNode.setAttribute("src", "../gif/bob-ross.gif");
//     imageNode.setAttribute("class", "col-12");
//
//     return imageNode;
// }
//
//
// // TODO: comment out the above code and make your own events!
// //  -> Document-specific events: https://developer.mozilla.org/en-US/docs/Web/API/Document#events
// //  -> You must:
// //      -> add at *least* one event and listener
// //      -> when that event is fired, your listener should:
// //          -> add at *least* one element to the page with content and styling
// //  -> It will be helpful to use the bootstrap classes for your layout and styling in this case
// //      -> Keeps you from getting bogged down on styling/layout
// //  -> BONUS: Don't feel stifled by the above lesson examples
// //      -> You can add more than one event to an element
// //      -> You can add an event to many elements at once
// //      -> You can add events to things other than element nodes (window, document, element, form, and more!)
// //          -> Events across object models: https://developer.mozilla.org/en-US/docs/Web/Events
// //
//
// setEvent();
//
// function setEvent() {
//     document.getElementById('ANOTHER ONE')
//         .addEventListener('click', eventEnd);
// }
//
// function eventEnd() {
//     document.getElementById('ANOTHER ONE')
//         .appendChild(buttonStart());
//     alert("LETS PLAY A GAME");
// }
//
// function buttonStart() {
//     var
//         COLS = 26,
//         ROWS = 26,
//         EMPTY = 0,
//         SNAKE = 1,
//         FRUIT = 2,
//         LEFT = 0,
//         UP = 1,
//         RIGHT = 2,
//         DOWN = 3,
//         KEY_LEFT = 37,
//         KEY_UP = 38,
//         KEY_RIGHT = 39,
//         KEY_DOWN = 40,
//         canvas,
//         ctx,
//         keystate,
//         frames,
//         score;
//
//     grid = {
//
//         width: null,
//         height: null,
//         _grid: null,
//
//
//         init: function (d, c, r) {
//             this.width = c;
//             this.height = r;
//
//             this._grid = [];
//             for (var x = 0; x < c; x++) {
//                 this._grid.push([]);
//                 for (var y = 0; y < r; y++) {
//                     this._grid[x].push(d);
//                 }
//             }
//         },
//
//
//         set: function (val, x, y) {
//             this._grid[x][y] = val;
//         },
//
//
//         get: function (x, y) {
//             return this._grid[x][y];
//         }
//     }
//
//
//     snake = {
//
//         direction: null,
//         last: null,
//         _queue: null,
//
//
//         init: function (d, x, y) {
//             this.direction = d;
//
//             this._queue = [];
//             this.insert(x, y);
//         },
//
//
//         insert: function (x, y) {
//
//             this._queue.unshift({x: x, y: y});
//             this.last = this._queue[0];
//         },
//
//
//         remove: function () {
//
//             return this._queue.pop();
//         }
//     };
//
//
//     function setFood() {
//         var empty = [];
//
//         for (var x = 0; x < grid.width; x++) {
//             for (var y = 0; y < grid.height; y++) {
//                 if (grid.get(x, y) === EMPTY) {
//                     empty.push({x: x, y: y});
//                 }
//             }
//         }
//
//         var randpos = empty[Math.round(Math.random() * (empty.length - 1))];
//         grid.set(FRUIT, randpos.x, randpos.y);
//     }
//
//
//     function main() {
//
//         canvas = document.createElement("canvas");
//         canvas.width = COLS * 20;
//         canvas.height = ROWS * 20;
//         ctx = canvas.getContext("2d");
//
//         document.body.appendChild(canvas);
//
//
//         ctx.font = "12px Helvetica";
//
//         frames = 0;
//         keystate = {};
//
//         document.addEventListener("keydown", function (evt) {
//             keystate[evt.keyCode] = true;
//         });
//         document.addEventListener("keyup", function (evt) {
//             delete keystate[evt.keyCode];
//         });
//
//
//         init();
//         loop();
//     }
//
//
//     function init() {
//         score = 0;
//
//         grid.init(EMPTY, COLS, ROWS);
//
//         var sp = {x: Math.floor(COLS / 2), y: ROWS - 1};
//         snake.init(UP, sp.x, sp.y);
//         grid.set(SNAKE, sp.x, sp.y);
//
//         setFood();
//     }
//
//
//     function loop() {
//         update();
//         draw();
//
//         window.requestAnimationFrame(loop, canvas);
//     }
//
//
//     function update() {
//         frames++;
//
//
//         if (keystate[KEY_LEFT] && snake.direction !== RIGHT) {
//             snake.direction = LEFT;
//         }
//         if (keystate[KEY_UP] && snake.direction !== DOWN) {
//             snake.direction = UP;
//         }
//         if (keystate[KEY_RIGHT] && snake.direction !== LEFT) {
//             snake.direction = RIGHT;
//         }
//         if (keystate[KEY_DOWN] && snake.direction !== UP) {
//             snake.direction = DOWN;
//         }
//
//
//         if (frames % 7 === 0) {
//
//             var nx = snake.last.x;
//             var ny = snake.last.y;
//
//
//             switch (snake.direction) {
//                 case LEFT:
//                     nx--;
//                     break;
//                 case UP:
//                     ny--;
//                     break;
//                 case RIGHT:
//                     nx++;
//                     break;
//                 case DOWN:
//                     ny++;
//                     break;
//             }
//
//
//             if (0 > nx || nx > grid.width - 1 ||
//                 0 > ny || ny > grid.height - 1 ||
//                 grid.get(nx, ny) === SNAKE
//             ) {
//                 return init();
//             }
//
//             if (grid.get(nx, ny) === FRUIT) {
//
//                 score++;
//                 setFood();
//             } else {
//
//                 var tail = snake.remove();
//                 grid.set(EMPTY, tail.x, tail.y);
//             }
//
//             grid.set(SNAKE, nx, ny);
//             snake.insert(nx, ny);
//         }
//     }
//
//
//     function draw() {
//
//         var tw = canvas.width / grid.width;
//         var th = canvas.height / grid.height;
//
//         for (var x = 0; x < grid.width; x++) {
//             for (var y = 0; y < grid.height; y++) {
//
//                 switch (grid.get(x, y)) {
//                     case EMPTY:
//                         ctx.fillStyle = "#fff";
//                         break;
//                     case SNAKE:
//                         ctx.fillStyle = "#333";
//                         break;
//                     case FRUIT:
//                         ctx.fillStyle = "#009BFF";
//                         break;
//                 }
//                 ctx.fillRect(x * tw, y * th, tw, th);
//             }
//         }
//
//         ctx.fillStyle = "#000";
//         ctx.fillText("SCORE: " + score, 10, canvas.height - 10);
//     }
//
//
//     main();
// }

for(var i = 0; i > 10; i++) {
    console.log(i);
}










