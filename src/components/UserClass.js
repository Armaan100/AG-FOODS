//We have render() method which returns some pieces of JSX
//React.Component is a class that is given by React, that is a class present in react
//and UserClass is inheriting some properties from it
//and React.Component will come from React library

import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
       
        /*
        //this state variable is a big object that contains all the state variables
        this.state = {
            count: 0,
        }
        */

        this.state = {
          UserInfo: {
            name: "",
            location: "",
            avatar_url: ""
          }
        }
    }

    async componentDidMount(){
      //API Call
      const data = await fetch(" https://api.github.com/users/Armaan100");
      const json = await data.json();
      console.log(json);

      this.setState({
        //Can think like this is helping object to update main object this.state??
        UserInfo: json,
      })
    }

    componentDidUpdate(){
      console.log("Component Updated!");
    }

    componentWillUnmount(){
      console.log("Component Unmounted!");
    }

    render() {

    // const {name, location, contact} = this.props;
    //const {count} = this.state;  //destructuring the state object

    const {name, location, avatar_url} = this.state.UserInfo;
    
    return (
      <div className="user-card">
        
        {/* <h1>Count: {count}</h1>    //this.state.count <--> count
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
        </button>  */}
        <img src={avatar_url} alt="User Avatar" />
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
        <h3>Contact: ag@1234</h3>
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



/*

Mounting Phase: (Render Phase + Commit Phase)
In the first phase(Render Phase), the the Instance of UserClass is created and then the 
Constructor is called with the dummy data an the component is rendred with the dummy data into the DOM

Now, in the second phase(Commit Phase) componentDidMount() is called and API call is made

Mounting Phase finished -> when the component is rendered very fast once with the dummy data and then the API call is made i.e., the componetDidMount() is called


Updating Phase:
After API call is made, setState() triggers(then and then Updating Phase Starts) and it updates the state variable and the component is re-rendered once again with the updated data
After this, diff algo and update the DOM with the updated data

Now, the componentDidUpdate() will be called after the component is re-rendered

*/