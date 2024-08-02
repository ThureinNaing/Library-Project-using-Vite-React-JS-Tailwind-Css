import { createContext, useReducer } from "react";

//themeContext
const ThemeContext = createContext();

//themeContextProvider component

//create the ThemeReducer function outside of the component
let ThemeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.payload }; //{theme : 'dark'}
    default:
      return state; //{theme : "light"}
  }
};

const ThemeContextProvider = ({ children }) => {
  //useReducer state
  let [state, dispatch] = useReducer(ThemeReducer, {
    theme: "light",
  });

  //change theme Function
  let changeTheme = (theme) => {
    //action -> type + payload -> {type,payload }
    dispatch({
      type: "CHANGE_THEME",
      payload: theme,
    });
  };

  const isDark = state.theme === "dark";

  return (
    <ThemeContext.Provider value={{ ...state, isDark, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeContextProvider };
