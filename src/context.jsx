import React, { useContext, useEffect } from "react";

const AppContext = React.createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=a";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/");
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ name: "ali", role: "student" }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
