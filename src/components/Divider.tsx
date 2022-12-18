import React from 'react';

const Divider = ({ classList }) => {
  return (
    <div
      className={
        'divider bg-blue-600 min-w-[80%] mt-[-0.5rem] m-auto h-2 border-solid border-[1px] border-white xl:mt-4 xl:mb-4 ' +
        classList
      }
    ></div>
  );
};

export default Divider;
