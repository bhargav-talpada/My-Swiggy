import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "dummy",
});

export default UserContext;