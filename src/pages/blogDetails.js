import { Link } from "react-router-dom";
import BlogSideBar from "../components/sections/blogSideBar";
import { Icon } from '@iconify/react';
import { useParams } from "react-router-dom";
import { useFirebase } from "../firebase";
import { useEffect, useState } from "react";
import { startLoading, endLoading } from "../redux/slice/loading";
import { useDispatch } from "react-redux";
const BlogDetails = () => {

    const params = useParams();
    const firebase = useFirebase();
    const { id } = params;
    const [data, setDate] = useState(null);
    const dispatch = useDispatch();

    const getDetails = async () => {
        try {
            const result = await firebase.getBlogData(id);
            setDate(result.data());
            dispatch(endLoading());
        }
        catch (error) {
            console.log("active blog error", error);
        }
    }
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        dispatch(startLoading());
        getDetails();
    }, [id])
    useEffect(() => {
        if (data) {
            firebase.updateBlogsViews(id, data.views);
        }
    }, [data])
    return (
        <>
            <div className="container py-4">
                <div className="blog_section">
                    <div className="blog_details p-3">
                        <div className="blog_mainImg">
                            <img src={data?.img} alt="main_img" />
                        </div>
                        <div className="about_blog p-3">
                            <Link to="/">
                                <button className="cat_link">
                                    {data?.cat}
                                </button>
                            </Link>
                        </div>
                        <div className="blog_title px-3">
                            <h2>{data?.title}
                            </h2>
                        </div>
                        <div className="about_blog d-flex gap-4 px-3">
                            <div className="blog_editor d-flex align-items-center gap-1">
                                <Icon icon="dashicons:admin-users" />
                                <span>
                                    {data?.author}
                                </span>
                            </div>
                            <div className="blog_editor d-flex align-items-center gap-1">
                                <Icon icon="simple-line-icons:calender" />
                                <span>
                                    {data?.date}
                                </span>
                            </div>
                            <div className="blog_editor d-flex align-items-center gap-1">
                                <Icon icon="ep:view" />
                                <span>
                                    {data?.views}
                                </span>
                            </div>
                        </div>
                        <div className="blog_content p-3 text-justify">
                            <p className="text-justify first_para">
                                {data?.dis}
                            </p>
                        </div>

                        <div className="post_msg p-4">
                            <div>
                                <h6>Post Comment</h6>
                                <form className="py-3">
                                    <div className="row mt-4">
                                        <div className="col-6">
                                            <input type="text" class="form-control rounded-0" placeholder="Enter Name" />
                                        </div>
                                        <div className="col-6">
                                            <input type="email" class="form-control rounded-0" placeholder="Enter Your Email" />
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-12">
                                            <input type="text" class="form-control rounded-0" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-12">
                                            <textarea class="form-control custom_textarea" placeholder="Leave a comment here" rows="6" ></textarea>

                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <input type="submit" className="custom_submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="main_sideBar">
                        <BlogSideBar author={data?.author} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogDetails;