import { ThemeProvider, CssBaseline } from '@mui/material';

import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';

import DefaultLayout from './containers/DefaultLayout';

import Home from './pages/Home';

import DarkTheme from './UISettings/DarkTheme';
import LightTheme from './UISettings/LightTheme';
import { ThemeContext } from './UISettings/ThemeContext';

// import { useTranslation } from 'react-i18next';




const App = () => {
  //   const { t } = useTranslation();

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(localStorage.darkTheme == "true");

  useEffect(() => {

  }, []);

  return (
    <>
      <ThemeContext.Provider value={{ darkTheme: isDarkTheme, setDarkTheme: setIsDarkTheme }}>
        <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
          <CssBaseline />
          {/* <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" /> */}
          <Routes>

            <Route path="/" element={<Home />} />
            <Route element={<DefaultLayout />}>
            </Route>

            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;