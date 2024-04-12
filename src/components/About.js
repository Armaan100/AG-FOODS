import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
    return(
        <div className="">
            <h1>About</h1>
            <h2>AG Foods built by me!</h2>
            <User name={"AG(Function)"} location={"Margherita"} contact={"8181818181"}/>
            <UserClass name={"AG(Class)"} location={"Tinsukia"} contact={"8453391908"}/>
        </div>
    )
}

export default About;