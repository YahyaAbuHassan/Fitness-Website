import React, { useState, useEffect, useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const Arrow = ({ children, disabled, onClick, className }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export function LeftArrow() {
  const { initComplete, isFirstItemVisible, scrollPrev } =
    useContext(VisibilityContext);

  return (
    <Arrow
      disabled={!initComplete || (initComplete && isFirstItemVisible)}
      onClick={() => scrollPrev()}
      className="left-arrow"
    >
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Arrow>
  );
}

export function RightArrow() {
  const { initComplete, isLastItemVisible, scrollNext } =
    useContext(VisibilityContext);

  return (
    <Arrow
      disabled={!initComplete || (initComplete && isLastItemVisible)}
      onClick={() => scrollNext()}
      className="right-arrow"
    >
      <img src={RightArrowIcon} alt="right-arrow" />
    </Arrow>
  );
}
