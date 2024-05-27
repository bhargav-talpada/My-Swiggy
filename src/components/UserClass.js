import React from 'react';

class UserClass extends React.Component {

    constructor(props){
        super(props);
        // console.log("Constructor");
        this.state = {
            userInfo:{
                name: "dummuy",
                location: "no",
                email: "bhargav@gmail.com",
                contact: "7203913274",
            }
        }
    }

    async componentDidMount(){
        const gitUser = await fetch("https://api.github.com/users/Bhuro11");
        const json = await gitUser.json();
        this.setState({
            userInfo: json,
        })

        this.timer = setInterval(() => {
            // console.log("Classbased components");    
        }, 1000);
    }
    componentDidUpdate(){
        // console.log("ComponentDidUpdate");
    }
    componentWillUnmount(){
        // console.log("componentwillunmount");
        clearInterval(this.timer);
    }
    render(){
        const { contact, email} = this.props;
        const {name, location} = this.state.userInfo;
        // console.log("Render");
        return(
            <div className="user-card m-4 p-4 w-96 text-xl bg-gray-200">
                <h1>Name : {name}</h1>
                <h3>Location : {location}</h3>
                <h3>Contact : {contact}</h3>
                <h3>Email : {email}</h3>
            </div>
        )
    }
}

export default UserClass;