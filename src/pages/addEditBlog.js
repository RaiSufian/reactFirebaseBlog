import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "../firebase";
const AddEditBlog = () => {

    const firebase = useFirebase();
    const FileInput = useRef(null);

    const user = useSelector((state) => state.UserData.user);

    const [image, setimage] = useState(null)



    const fileUpload = () => {
        FileInput.current.click();
    }


    const [blog, setBlog] = useState({
        title: "",
        keys: "",
        dis: "",
        cat: "",
        author: "sufian",
        views: 0,
        fa: 0,

    })


    const setBlogData = (event) => {
        const { name, value } = event.target;
        setBlog({ ...blog, [name]: value });
    }


    const AddBlog = (event) => {
        event.preventDefault();
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const day = new Date().getDate();


        const date = day + " / " + monthNames[month] + " / " + year;

        sendDataFirebase(blog, date, image);

    }
    const sendDataFirebase = async (blog, date1, image) => {
        try {
            const result = await firebase.addBlog(blog, date1, image);
            console.log("response of add blog ", result);
            setimage(null);
            setBlog({
                title: "",
                keys: "",
                dis: "",
                author: "sufian",
                views: 0,
                fa: 0,
            })

        }
        catch (error) {
            console.log("my add blog error is", error);
        }

    }

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return (
        <section className="add_blog">
            <div className="container py-4">
                <div className="blog_heading">
                    <h2>ADD New Blog</h2>
                </div>
                <div className="row py-5 bg-white">
                    <div className="add_profile col-4 py-5">
                        {image ? <img src={URL.createObjectURL(image)} alt="main" /> : <img src="./assets/default.png" alt="main" />}

                        <div className="add_img mt-3">
                            <div className="uploadImg_btn d-flex align-items-center justify-content-center mx-auto" onClick={fileUpload}>
                                Upload Image
                            </div>
                            <input type="file" ref={FileInput} name="main_img" hidden onChange={(e) => setimage(e.target.files[0])} />
                        </div>
                    </div>

                    <div className="main_details col-8">
                        <form className="" onSubmit={AddBlog}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="input_custom">
                                        <label>Title</label>
                                        <input className="form-control" name="title" value={blog.title} onChange={(e) => setBlogData(e)} required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input_custom mt-4">
                                        <label>SEO Keys</label>
                                        <input className="form-control" name="keys" value={blog.keys} onChange={(e) => setBlogData(e)} required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input_custom mt-4">
                                        <label>Category</label>
                                        <select className="form-control" name="cat" value={blog.cat} onChange={(e) => setBlogData(e)} required >
                                            <option name="cat_blog" value="">Select ...</option>
                                            <option name="cat_blog" value="pakistan">Pakistan</option>
                                            <option name="cat_blog" value="international">International</option>
                                            <option name="cat_blog" value="business">Business</option>
                                            <option name="cat_blog" value="sports">Sports</option>
                                            <option name="cat_blog" value="science">Science</option>
                                            <option name="cat_blog" value="technology">Technology</option>
                                            <option name="cat_blog" value="health">Health</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input_custom mt-4">
                                        <label>Featured</label>
                                        <select className="form-control" name="fa" value={blog.fa} onChange={(e) => setBlogData(e)} required>
                                            <option name="cat_blog" value="1">Yes</option>
                                            <option name="cat_blog" value="0">No</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input_custom mt-4">
                                        <label>Discription</label>
                                        <textarea className="form-control" rows="5" name="dis" value={blog.dis} onChange={(e) => setBlogData(e)} required>

                                        </textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input_custom mt-4">
                                        <input className="submit_btns" type="submit" value="Add Blog" />
                                    </div>
                                </div>

                            </div>

                        </form>
                    </div>
                </div>

            </div>

        </section>
    )
}
export default AddEditBlog;