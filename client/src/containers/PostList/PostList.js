import { useState, useEffect } from 'react';
import { apiShowPost } from "../../api";
import Navbar from "../../components/Navbar/Navbar";
import PostCard from "../../components/PostCard/PostCard";

function PostList() {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        getPostData();
    }, []);

    const getPostData = () => apiShowPost()
        .then(res => setPostData(res))
        .catch(err => console.log(err))

    return (
        <div className="w-full m-0 p-0">
            <Navbar setPostData={setPostData} />
            <div className="h-full container bg-gray-25 flex flex-row flex-wrap justify-around px-10 py-5">
                {
                    postData.length > 0 ?
                        postData.map(data => <PostCard {...data} key={data._id} />) :
                        <p className="text-5xl font-bold mt-32 ">NO RESULTS FOUND</p>
                }
            </div>
        </div>
    );
}

export default PostList;
