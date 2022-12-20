import { useState } from "react";


export const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState(" ")
  return (
    <div className="input-group w-75 shadow-lg">
      <input
        type="text"
        className="form-control"
        placeholder="Search for communities"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn btn-success outline-none" type="button" id="button-addon1">
        Search
      </button>
  
    </div>
  );
};
