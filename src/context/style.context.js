import {createContext, useEffect, useState} from 'react'

const StyleContext = createContext()

function StyleWrapper(props){
    //todos los estados y funciones a utilizar dentro del contexto

    const [darkMode, setDarkMode] = useState(false);

    const handleToggle = () => {
        setDarkMode(!darkMode);
      };
    
    const bgStyle = darkMode ? 'bg-dark' : 'bg-light'
    const textStyle =  darkMode ?  'text-light' : 'text-dark'
    const navBarStyle = darkMode ? 'navbar-dark' : 'navbar-light'
      

    const passedContext = {
        darkMode, handleToggle, bgStyle, textStyle, navBarStyle
    }

    // useEffect(()=>{
    //     handleToggle()
    // },[])
    
    return (
        <StyleContext.Provider value={passedContext}>
            {props.children}
        </StyleContext.Provider>
    )
}

export {StyleContext, StyleWrapper}