import React, { useContext, useEffect, useState } from 'react';

import { AppRouter } from './routers/AppRouter';

const AppConstantsDefault = {
  setTheme: null,
  currentTheme: "light",
  version: "0.0.1", //Para cada commit, o terceiro número sobe 1,
  header: {
    currentTitle: "Inicio",
  },
  user: {
    name: "",
  },
};

export const AppContext = React.createContext(AppConstantsDefault);

function AppContainer(props) {
  useEffect(() => {
    document.title = 'mui'
  }, []);
  
  return (
    <>
      <AppRouter />     
    </>
  );
}

export default function App(props) {
  const appConstants = useContext(AppContext);

  return (
      <AppContext.Provider value={appConstants}>
        <AppContainer />
      </AppContext.Provider>
  );
}