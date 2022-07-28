import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { apiGetImg } from "../../api";

function PostCard({ title, content, _id, createdAt }) {
    const [postImg, setPostImg] = useState("https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921")
    const date = new Date(createdAt).toLocaleDateString();
    const time = new Date(createdAt).toLocaleTimeString('en', { timeStyle: 'short' });

    useEffect(() => {
        getImg();
    }, []);

    const getImg = () => apiGetImg()
        .then(res => setPostImg(res.data.message))
        .catch(err => console.log(err))

    return (
        <div className="w-96 max-w-xs h-fit rounded shadow my-5">
            <img className="w-full h-52" src={postImg} alt="" />

            <div className="px-6 py-4 h-32">
                <div className="font-bold text-xl mb-2 truncate">{title}</div>
                <div className="line-clamp-3 text-gray-800 text-base text-justify">
                    {content}
                </div>
            </div>

            <div className="px-6 pt-2 pb-2 flex justify-between items-center">
                <div className="text-gray-500 text-xs">{date} {time}</div>
                <button className="border-b-2 border-blue-200 hover:border-blue-400 text-sm font-semibold p-1">
                    <Link to={`/detail/${_id}`}>READ MORE</Link>
                </button>
            </div>
        </div>
    )
}

export default PostCard;