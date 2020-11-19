import React from 'react';

import './styles.scss';

const Backdrop = ({ drawMenu }) => (
    <div className="backdrop" onClick={drawMenu} />
);

export default Backdrop;
