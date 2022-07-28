import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { apiDeletePost, apiReadPost } from '../../api';
import PostForm from "../../components/PostForm/PostForm";

function PostDetail() {
    const { pid } = useParams();
    const [postData, setPostData] = useState([]);
    const [openForm, setOpenForm] = useState(false);

    useEffect(() => {
        getPostData();
    }, []);

    const getPostData = () => apiReadPost(pid)
        .then(res => setPostData(res))
        .catch(err => console.log(err))

    const delPost = () => {
        if (window.confirm("確定要刪除此篇文章嗎？")) {
            apiDeletePost(pid)
                .then(() => {
                    window.alert("刪除成功！即將跳轉回首頁");
                    window.location.replace("http://localhost:3000/");
                })
                .catch(err => window.alert(`${err}，刪除失敗，請重新再試一次！`));

            return;
        }

        alert("取消刪除");
    }

    return (
        <div className="w-full m-0 p-0">
            <nav className="h-18 flex justify-between items-center px-5">
                <div className="text-xl font-bold p-4">
                    <Link to="/">CHIHUAHUA's BLOG</Link>
                </div>
                <div className="p-4 flex flex-row">
                    <button className="bg-yellow-100 hover:bg-yellow-300 text-sm font-semibold p-2 rounded mx-5" onClick={() => setOpenForm(true)}>EDIT</button>
                    <button className="bg-red-200 hover:bg-red-400 text-sm font-semibold p-2 rounded" onClick={delPost}>DELETE</button>
                </div>
            </nav>

            <div className="h-full bg-gray-25 flex flex-col px-10 py-5">
                <div className="text-4xl font-bold mb-2">
                    {postData.title}
                </div>

                <div className="text-gray-500 text-s">
                    <span className="mr-2">{new Date(postData.createdAt).toLocaleDateString()}</span>
                    <span>{new Date(postData.createdAt).toLocaleTimeString('en', { timeStyle: 'short' })}</span>
                </div>

                <div className="text-lg text-justify my-4">
                    {postData.content?.split("\n").map(content => <p className="leading-10">{content}<br /></p>)}
                </div>

                <hr className="my-10" />
            </div>

            {openForm && <PostForm type="EDIT POST" setOpenForm={setOpenForm} setPostData={setPostData} title={postData.title} content={postData.content} pid={postData._id} />}
        </div>
    )
}

export default PostDetail;