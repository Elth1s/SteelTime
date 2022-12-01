import { ThemeProvider, CssBaseline } from '@mui/material';

import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';

import DefaultLayout from './containers/DefaultLayout';
import BendingOfReinforcement from './pages/BendingOfReinforcement';

import Home from './pages/Home';
import HomeOrder from './pages/Home/order';
import LatheWorks from './pages/LatheWorks';
import MetalCutting from './pages/MetalCutting';
import PlasmaCuttingOfMetal from './pages/PlasmaCuttingOfMetal';
import Production from './pages/Production';
import AnchorBlocksAndFoundationBolts from './pages/Production/AnchorBlocksAndFoundationBolts';
import BuildingMetalStructures from './pages/Production/BuildingMetalStructures';
import Furnace from './pages/Production/Furnace';
import InputGroup from './pages/Production/InputGroup';
import LoftStyleFurnitureAndPartitions from './pages/Production/LoftStyleFurnitureAndPartitions';
import NonStandardMetalStructuresAndEquipment from './pages/Production/NonStandardMetalStructuresAndEquipment';
import ProductionOrder from './pages/Production/order';
import ProtectiveContainerForGenerator from './pages/Production/ProtectiveContainerForGenerator';
import ReinforcementFramesAndEmbeddedProducts from './pages/Production/ReinforcementFramesAndEmbeddedProducts';
import SupportFastenersOfTowerCranes from './pages/Production/SupportFastenersOfTowerCranes';

import DarkTheme from './UISettings/DarkTheme';
import LightTheme from './UISettings/LightTheme';
import { ThemeContext } from './UISettings/ThemeContext';

// import { useTranslation } from 'react-i18next';




const App = () => {
  //   const { t } = useTranslation();

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(localStorage.darkTheme === "true");

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
              <Route path="/order" element={<HomeOrder />} />
              <Route path="/production" element={<Production />} />
              <Route path="/production/order" element={<ProductionOrder />} />
              <Route path="/production/building-metal-structures" element={<BuildingMetalStructures />} />
              <Route path="/production/reinforcement-frames-and-embedded-products" element={<ReinforcementFramesAndEmbeddedProducts />} />
              <Route path="/production/anchor-blocks-and-foundation-bolts" element={<AnchorBlocksAndFoundationBolts />} />
              <Route path="/production/support-fasteners-of-tower-cranes" element={<SupportFastenersOfTowerCranes />} />
              <Route path="/production/input-goup" element={<InputGroup />} />
              <Route path="/production/non-standard-metal-structures-and-equipment" element={<NonStandardMetalStructuresAndEquipment />} />
              <Route path="/production/loft-style-furniture-and-partitions" element={<LoftStyleFurnitureAndPartitions />} />
              <Route path="/production/furnace" element={<Furnace />} />
              <Route path="/production/protective-container-for-generator" element={<ProtectiveContainerForGenerator />} />
              <Route path="/plasma-cutting" element={<PlasmaCuttingOfMetal />} />
              <Route path="/metal-cutting-a-bandsaw" element={<MetalCutting />} />
              <Route path="/bending-of-reinforcement" element={<BendingOfReinforcement />} />
              <Route path="/lathe-works" element={<LatheWorks />} />
            </Route>

            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;