import { createContext, useContext } from "react";

export const UserContext = createContext(null);

const useUserContext = () => useContext(UserContext);

export default useUserContext;
