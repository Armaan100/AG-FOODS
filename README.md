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
-