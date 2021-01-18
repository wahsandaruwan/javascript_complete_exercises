// ---------------------
// -------Events--------
// ---------------------

/*
    An HTML event can be something the browser does, or something a user does.

    Here are some examples of HTML events:
    1. An HTML web page has finished loading
    2. An HTML input field was changed
    3. An HTML button was clicked

    Often, when events happen, you may want to do something.
    JavaScript lets you execute code when events are detected.
*/

// ---Using Internal Events---
// HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.
// <element event='some JavaScript'>
function btnClick(x){
    alert(x);
}

// ---Using Event Listeners---
/*
    The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.

    You can add many event handlers to one element.

    You can add many event handlers of the same type to one element, i.e two "click" events.

    You can add event listeners to any DOM object not only HTML elements. i.e the window object.

    When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.

    You can easily remove an event listener by using the removeEventListener() method.
*/

// --Intergrated Function--
var button2 = document.getElementById('c-btn').addEventListener('click', function(){
    alert("Button clicked!");
});

// --Named Function--
document.getElementById('c-btn').addEventListener('mouseout', txtChange);

function txtChange(){
    alert("Mouse out!");
    document.getElementById('hdt').textContent = 'Mouse Out!';
}

// --Parameterized Function--
document.getElementById('i-btn').addEventListener('click', function(){
    changeListBack("Hellooo");
});

function changeListBack(x){
    document.getElementById('li-items').style.backgroundColor = '#ebca14';
    document.getElementById('li-items').firstElementChild.textContent = x;
}


/*
    Event propagation is a way of defining the element order when an event occurs. If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?

    In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.

    In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.

    The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.
*/