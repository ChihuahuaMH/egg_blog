import { useRef } from 'react';
import { apiAddPost, apiEditPost, } from '../../api';

function PostForm({ type, setOpenForm, setPostData, title, content, pid }) {
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    const savePost = () => {
        title = titleRef.current.value;
        content = contentRef.current.value;

        switch (type) {
            case "ADD POST":
                apiAddPost(title, content)
                    .then(() => {
                        setOpenForm(false);
                        window.location.reload();
                    })
                    .catch(err => `${err}，新增失敗，請重新試一次！`)
                break;

            case "EDIT POST":
                apiEditPost(pid, title, content)
                    .then(() => {
                        setOpenForm(false);
                        window.alert("修改成功！");
                        window.location.reload();
                    })
                    .catch((err) => `${err}，修改失敗，請重新試一次！`)
                break;

            default:
                break;
        }
    }

    return (
        <div className="absolute w-full h-screen bg-gray-400 bg-opacity-75 -top-0.5 flex justify-center items-center">
            <div className="w-1/3 max-w-xl h-4/6 bg-white rounded p-6 ">
                <p className="text-3xl font-bold">{type}</p>
                <hr className="mt-4" />

                <form className="mt-4">
                    <p className="text-lg font-semibold my-2 text-gray-800">TITLE</p>
                    <input className="border rounded mb-4 p-2 w-full outline-2 outline-blue-500/50" type="text" defaultValue={title} ref={titleRef} required></input>

                    <p className="text-lg font-semibold my-2 text-gray-800">CONTENT</p>
                    <textarea className="border rounded mb-4 p-2 w-full outline-2 outline-blue-500/50 resize-none" rows="5" defaultValue={content} ref={contentRef} required></textarea>
                </form>

                <div className="w-full mt-4 flex justify-center">
                    <button className="bg-blue-400 hover:bg-blue-500 text-m text-white font-semibold px-4 py-2 mx-4 rounded" onClick={savePost}>SAVE</button>
                    <button className="border-2 border-gray-200 text-m text-blue-400 font-semibold p-2 mx-4 rounded" onClick={() => setOpenForm(false)}>CANCEL</button>
                </div>
            </div>
        </div>
    )
}

export default PostForm;