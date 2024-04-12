//import React from "react";
//import ReactDOM from "react-dom/client";

//REACT ELEMENTS <-> kinda equivalent to DOM Elements(the h1's, head, body and all)
//React.createElement() -> is an Object -> and when we render it into the DOM, it becomes an HTML Element
//i.e., REACT.createElement() => a React Element <-> JS Object => HTML Element (render)

/*
const heading = React.createElement(  //creates a JS-OBJECT heading
    "h1",
    { id: "heading" }, 
    "This is h1"
); 
*/

//root.render(heading);
//root.render() which is in REACTDOM, it does is that it converts the OBJECT into HTML element and pushes it into the browser
//And by pushing it means that it REPLACES and not appends the HTML elements in the root.

//JSX --> is not HTML in JS, rather it is HTML/XML like Syntax
//JSX -> (transpiled before it reaches the JS Engine) - Parcel - Babbel
//JSX => REACT.createElement=> a React Element <-> JS Object => HTML Element (render)
//Therefore, console.log(heading) and console.log(jsxHeadding) giving same thing yo
//REACT ELEMENT
//const jsxHeading = <h1 className="head">Hi!JSX here man</h1>;

/*
//REACT COMPONENT --> everything in react from buttons, cards, footer, etc is a react component
//Two ways of Creating React Components --> i)CLASS BASED COMPONENTS and ii)FUNCTIONAL COMPONENT
//REACT FUNCTIONAL COMPONENT -> just a normal JS function which returns some JSX/ returns a React Element
const HeadingComponent = () => (
    <div id="container">
        <h1>Hi React Functional Component</h1>
    </div>
    
);
*/

/*
the above code is same as:

const HeadingComponent = () => {
    return <h1>Hi React Functional Component</h1>
};
&
const HeadingComponent = () => <h1>Hi React Functional Component</h1>;

cuz,
const fn1 = () => {
    return true;
}

const fn2 = () => true;

fn1 and fn2 are exactly the same thing
*/

/*
const data=api.getData(); //Suppose we are getting data from an api and the api sends malicious data and this gets executed over {data}
//So, the malicious code runs in the browser causing an attack as malicious JS Code is being run so, the attacker can access cookies, info 
//about comp and all. This typ of attack is known as Cross Site Scripting
//BUT but but when running such malicious scripts in jsx then jsx is so powerful that it escapes the malicious codes, it prevents such malicious
//injections, jsx sanitizes first and then sends to browser and all. So, feel free to use APIs man.

const HeadingComponent = () => (
    <div id="container">
        <h1>
            {data}
            {title}
        </h1>
        <h1>Hi React Functional Component</h1>
    </div>
    
);
*/

/*
const elem = <span>React Element ne</span>

const title =(
    <h1 className="head" tabIndex="5">
        Hi Hi
    </h1>
);

const CompWaFunNe = () => <h2>It's a functional Component. Calling it two times</h2>


//Component Composition
const HeadingComponent = () => (
    <div id="container">
        <h1>
            {title}
        </h1>
        <h1>Hi React Functional Component</h1>
        <CompWaFunNe/>
        <CompWaFunNe></CompWaFunNe>
        {CompWaFunNe()}
    </div>
    
);
*/

/*
// console.log(heading);
// console.log(jsxHeading);

//root.render(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
*/


{/* <RestaurantCard resName="Armaan Foods" resCuisine="Gahori" />
        <RestaurantCard resName="KFC" resCuisine="Fast Foods" />
        <RestaurantCard resName="Kukura" resCuisine="Chicken Dishes" />
        <RestaurantCard resName="Konnichiwa Taberu" resCuisine="Japanese, Indian" />
        <RestaurantCard resName="Come Vamos" resCuisine="Spanish, Chinese" /> */}