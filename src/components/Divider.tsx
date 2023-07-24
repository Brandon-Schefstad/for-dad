const Divider = ({ classList }: { classList?: string }) => {
  return (
    <div
      className={
        "divider m-auto mt-[-0.5rem] h-2 min-w-[80%] border-[1px] border-solid border-white bg-blue-600 xl:mb-4 xl:mt-4 " +
        classList
      }
    ></div>
  );
};

export default Divider;
