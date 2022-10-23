import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
// import { ToastContainer } from 'react-toastify';

import DefaultLayout from './containers/DefaultLayout';

import Home from './pages/Home';

import DarkTheme from './UISettings/DarkTheme';
import LightTheme from './UISettings/LightTheme';

// import { useTranslation } from 'react-i18next';


const App = () => {
  //   const { t } = useTranslation();

  const darkThemeLS = localStorage.darkTheme == "true";

  return (
    <>
      {/* <ThemeProvider theme={darkThemeLS ? DarkTheme : LightTheme}> */}
      <ThemeProvider theme={DarkTheme}>
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
    </>
  );
}

export default App;