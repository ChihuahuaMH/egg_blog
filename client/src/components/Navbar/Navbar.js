import { useState, useRef } from 'react';
import { apiShowPost } from "../../api";
import PostForm from "../PostForm/PostForm";

function Navbar({ setPostData }) {
    const ref = useRef(null);
    const [openForm, setOpenForm] = useState(false);

    const handleChange = () => {
        searchPost(ref.current.value);
    };

    const searchPost = (title) => apiShowPost(title)
        .then(res => setPostData(res))
        .catch(err => console.log(err))

    return (
        <div className="relative">
            <nav className="h-18 flex justify-between items-center px-5">
                <div className="text-xl font-bold p-4">CHIHUAHUA's BLOG</div>
                <div className="p-4 flex flex-row">
                    <input type="text" placeholder="Search..." className="outline-0 border-b-2 border-gray-200 mx-10" ref={ref} onInput={handleChange} />
                    <button className="bg-blue-200 hover:bg-blue-400 text-sm font-semibold p-2 rounded" onClick={() => setOpenForm(true)}>ADD POST</button>
                </div>
            </nav>
            {openForm && <PostForm type="ADD POST" setOpenForm={setOpenForm} title="" content="" />}
        </div>


    )
}

export default Navbar;