Hello React🛩️

# Parcel
- Dev Build
- Local Build
- HMR=Hot Module Replacement(Automatically reloads)
- File Watching Algorithm - written in C++
- Faster builds as subsequent builds in code - by- Caching->and it is cached in .parcel-cache folder
- Image Optimization 
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers - will tell how to configure to support on older brpwsers
- Diagnostic
- Good Error Handling (as we saw yo)
- HTTPs
- Tree Shaking - will remove unused code
- Different dev and production bundles
 






Two types of Export/Import


-Default Export/Import

export default Component;
import Component from "path";


-Named Export/Import

export const Component;
import {Component} from "path";











# React Hooks
(Normal JS Utility Functions)
-Two most important Hooks:
    -useState() - Superpowerful State Variables in React (To use this we have to first import it from react as named import)
                - It maintains state of components
                -Whenever a state variable updates/changes, react re-renders the component.

                *Whenever a state variable changes, react re-renders the component*

                *React keeps UI layer in-sync with the data layer, makes the dom manipulation faster and efficient*


    -useEffect() - just a function with its own specific purpose
                 - first argument is a callback function, and the second argument is a dependency array
                 - the work of useEffect() is to call the callback function in its first argument after the component is rendered


-HOOK -> just a normal JS function which has its own specific purpose












# Linking in React
In React, we can directly move to a new page by cliking on some link without reloading the whole page which ultimately makes it fast
If using <a> tag then the whole page reloads so we don't use it in react rather we use <Link> component given by react-router-dom
and its syntax is: <Link to="/contact">Contact Us</Link>
What is does is, it does not reloads the whole page, rather it just replaces the components ! 











# 2 types of routing in Web Apps
- Server Side Routing -> We have a index.html, about.html, contact.html and then if click on my anchor tag then it send a network call on about.html and refreshes the whole page

- Client Side Routing -> When we used Link so what happpend is that in our first load every component was loaded so everytime we clicked on the Link so just the component was replaced and no network call was made, however network call is made when we use fetch to call apis and all





# Life Cycle of Class Based Components 
- Mouting or Loading of the component...How?

- Parent Class Based Component(AboutClass) and it renders another Class
  Based Component(UserInfoClass),
   AboutClass has constructor(props){...console.log("Parent Constructor Called)},
  componentDidMount(){...console.log("Parent Did Mount")}, 
  render(){console.log("Parent Render")...<UserInfoClass/>...}
  UserInfoClass has constructor(props){...console.log("Child Constructor Called")}, componentDidMount(){...console.log("Child Did Mount")}, render(){console.log("Child Rendered")...}

-So, output will be in the sequence:
 Parent Constructor Called
 Parent Rendered 
 Child Constructor Called
 Child Rendered
 Child Did Mount
 Parent Did Mount

-Reason: Parent Constructor Called, And When Parent Render is called
         then it calls its Chlid Class and therefore mounting of the parent class is not finished, hence child constructor is
         called, then child render is called => child class is put on the DOM, hence Child Did Mount is called => Rendering is finished of the parent class and is put on the DOM => Parent Did Mount is called.


-Use of ComponentDidMount() ? => To make API calls but why??

-Let's Move on to Functional Based Components:
 To make API calls in Functional Based Comopnents, we use
 UseEffect(()=>{//API Call}, [])  -> the single dependecy array indicated that the API call will be made ONCE

 Why do we use UseEffect() ? 
 Basically, first we load the Comoponent and once the component is loaded
 we fill the Component with the details of the API
 We don't want to wait for the API call to return data and after that render the component.
 React wantd to quickly render it, then make an API call and then fill the data ✅

-Let's move back to ClassBased Components now.
 Similarly, we want to first render the ClassBased Component quickly, then make API call and fill up with the data. And since ComponentDidMount() is called after component is mounted/loaded into the DOM hence we make API Calls in ComponentDid Mount✅




-Now, if a Parent Class has multiple ChildBased Components then...
 Parent(About Us) -> Child1(User1) then Child2(User2)

 Correct Order will be:

 -Parent Component Constructor
 -Parent Comoponet Render
   [-User1 Child Constructor
   -User1 Child Render

   -User2 Child Constructor
   -User2 Child Render]

   -After Reconciliation Algo working, findind out the diffs
   <DOM UPDATED - IN SINGLE BATCH>
   [-User1 Child Component Did Mount
   -user2 Child Component Did Mount]
-Parent Component Did Mount

BUT WHYY in the above order????

-Why react is fast?
-A component in React is Mounted in two phases:
 Phase-1: Render Phase
 Phase-2: Commit Phase

-Render Phase: When our component is mounted then first Constructor is 
               called and then the Render
-Commit Phase: Then, react actually updates the DOM, and after that 
               componentDidMount() is called
               and therefore best place to make an API Call in the 
               componentDidMount()
 

 -Now, let's give the answer to why it happend like this:
 1. Parent Constructor is called, Parent render is called (Phase-1)
 2. User1's and User2's (Render Phase are batched) i.e., first both
     User1's constructor and then render is called and after that 
     User's cconstructor and then render is called
     (OP Optimization of React comes into play damn=>React is fast tbh)
 3. After that User1 and User2's(Commit Phase are batched) i.e, now,
     second phase of User1 and User2 are grouped so, User1's 
     componentDidMount() and then User2's componentDidiMount() is called.
 4. Now, Parent rendering is completed(Render Phase of Parent finished)
 5. Then, Commit Phase of Parent happens and the Parent componentDidMount
    is called now.

    Done 😁


 -Render Phase happens very very fast, 
 -Commit Phase takes time as DOM Manipulation is expensive


-Link for Lifecycle Diagram:<a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">LifeCycle Diagram</a>


-----MOUNTING-------(First Mounting Cycle Happens)

Constructor(dummy)
Render(dummy)
    <HTML (Dummy)>
Component Did Mount
    <API Call>
    <this.setState> -> State variable is Updated -> then and then UPDATING begins



-----UPDATING-----(Second, Updating Cycle Happens)

Render(API data)
    <HTML (New API data)>
Component Did Update



-----UNMOUNTING------
Component Will Unmount



-UNMOUNTING: componentWillUnmount() will be called when the component 
             will be unmounted/disappear/go from the page

-This is how earlier people used to write react codes 







--------------------Disclaimer------------------
Never ever compare React's LifeCycle Components with Functional Components
useEffect() is not based on componentDidMount(), it is a complete another way at behind it


if no dependency array is put in useEffect => then the useEffect の
function will be called after each and every render

...(left to learn in Classy Classy)






















# Single Responsibility Principle
- Any single identity(a function, a class) we have, should have single responsibilty

- Any component should have a single identity

- Modularity for more readablility, more testability and maintainable

- Advantage: Reusable, Maintainable, Testable












# Custom Hooks

- Hooks: Normal JS functions given to us
         
- Custom Hooks: JS functions made by us
                Helps in making code more readable,modular, and testable



















# Chunking / Code Splitting / Dynamic Bundling / Lazr Loading / On Demand Loading
- To break down the app into smaller logical chunks
- A bundle should have enough code for a major feature
- eg., In MakeMyTrip, bundle for Flighs, another bundle 
  HomeStay, another for Hotels, etc., i.e., smaller application inside a big
  application
- Required because it does not put a load on a single 
  bundler and it does not take very a long time for the bundler to get load
- Suppose, in our app we have a grocery business and a grocery page, so, in this case we would use another bundler for grocery part
- It is also called Lazy Loading because, it doesn't load the js file at the first place but eventually does when we click on the grocery then it
  loads the other js file





















  # Higher Order Components
  - A function that takes a component and returns a component
  - At the end of the day, just a normal JS function

  - Acts like an enhancer, i.e., modifies the component and returns it

  - eg., in our app we are going to make promoted card from the our
    exisiting restaurant card ccomponent. Our higher order component will
    take the restaurant card and spit out promoted and not promoted cards
    












  
# Two important layers in React Application
- UI Layer 
- Data Layer

- UI Layer is powered by Data Layer