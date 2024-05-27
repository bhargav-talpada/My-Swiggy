import useUserData from "../hooks/useUserData";

const User = (props) => {
    const { contact, email} = props;
    
    const userData = useUserData();
    
    const {name, location} = userData;
    return(
        <div className="user-card m-4 p-4 w-96 text-xl bg-gray-200">
            <h1>Name : {name}</h1>
            <h3>Location : {location}</h3>
            <h3>Contact : {contact}</h3>
            <h3>Email : {email}</h3>
        </div>
    )
}

export default User;