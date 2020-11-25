// == React Import
import React, { useState, Link } from 'react';

import BurgerMenuBar from '../../containers/BurgerMenuBar';
import BurgerMenuButton from './BurgerButton';
import Backdrop from './Backdrop';
import OrizonLogo from '../../assets/images/logowhite.png';

const BurgerMenu = ({ logged }) => {
  const [drawerToggle, setDrawerToggle] = useState(false);

  const drawMenu = () => {
    if (!drawerToggle) {
      setDrawerToggle(true);
    }
    else {
      setDrawerToggle(false);
    }
  };

  return (
    <>
      <BurgerMenuButton drawMenu={drawMenu} />
      {drawerToggle
            && (
            <>
              <BurgerMenuBar logged={logged} />
              <Backdrop drawMenu={drawMenu} />
            </>
            )}
    </>
  );
};

export default BurgerMenu;
