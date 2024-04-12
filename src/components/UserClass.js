//We have render() method which returns some pieces of JSX
//React.Component is a class that is given by React, that is a class present in react
//and UserClass is inheriting some properties from it
//and React.Component will come from React library

import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
       
        //this state variable is a big object that contains all the state variables
        this.state = {
            count: 0,
        }
    }

    componentDidMount(){
      console.log("Component has Mounted!")
    }

    render() {

    const {name, location, contact} = this.props;
    const {count} = this.state;  //destructuring the state object

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>    
        {/* OR this.state.count <-> {count} */}
        <button
        onClick={() => {
            //NEVER UPDATE STATE VARIABLES DIRECTLY
            //So, NEVER --> this.state.count = this.state.count + 1;  It will not update the state variable
            
            //React gives access to an imp function called this.setState
            //In this this.setState function, we will pass an object containing the updated values our our state variables
            this.setState({
                count: this.state.count + 1,
            })
        }}
        >
            Click Count
        </button>
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
        <h3>Contact: {contact}</h3>
      </div>
    );
    }
}

export default UserClass;




//Mounting a functional Component <--> Invoking a functional Component on to the web~

//state was created whenever a class instance was created
//(Mountin <--> Loading <--> Invoking) a functional Component ==> rendering the component
//Loading a class based component <--> Creating an instance of that class, and whenever we create it, 
//the constructor is called and this is the best place to receive props and create state variables