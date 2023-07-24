const Navbar = () => {
  return (
    <div className=" absolute top-12 flex w-full justify-between px-6 text-sm tracking-wider">
      <div className="flex gap-4">
        <a href="#Nature">
          <div className="">Nature</div>
        </a>
        <a href="#Auto">
          <div className="">Auto</div>
        </a>
        <a href="#Family">
          <div className="">Family</div>
        </a>
      </div>
      <div>
        {" "}
        <a href="" className="font-bold underline underline-offset-2">
          <div className="">Order</div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
