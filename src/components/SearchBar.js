import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNewPosts } from "../features/posts/postsSlice";

export const Searchbar = () => {
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState("")

  const handleNewSearchTerm = () => {
     dispatch(getNewPosts(searchTerm))
  }
  return (
    <div className="input-group w-75 shadow-lg">
      <input
        type="text"
        className="form-control"
        placeholder="Search for communities"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleNewSearchTerm} className="btn btn-success outline-none" type="submit" id="button-addon1">
        Search
      </button>
  
    </div>
  );
};
