/** @format */
import logo from "../../../public/Assets/comrex_logo.svg";

function Logo() {
  return (
    <div className="flex gap-5">
      <img src={logo} alt="Logo" height={120} width={120} />
      <input
        type="text"
        placeholder="Serch"
        className="border border-gray-300 shadow-md rounded-lg p-2"
      />
    </div>
  );
}

export default Logo;
