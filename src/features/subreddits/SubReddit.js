import { useDispatch } from "react-redux";

import { getNewPosts } from "../posts/postsSlice";
import redditLogo from '../../assets/reddit-4.svg'

export const SubReddit = ({subReddit}) => {
  const dispatch = useDispatch()
  const handleSubChange = () => {
    dispatch(getNewPosts(subReddit.display_name))
  }
  return (
    <button onClick={handleSubChange} id="sub" className=" btn d-flex flex-row p-1 rounded">
      <img id="logo" className="rounded-4" src={subReddit.icon_img || redditLogo} alt={`${subReddit.display_name} logo`}/>
      <p className="mx-2">{subReddit.display_name}</p>
    </button>
  )
}
