import { Link } from "react-router-dom";
import BlogSideBar from "../components/sections/blogSideBar";
import { Icon } from '@iconify/react';
import { useParams } from "react-router-dom";
import { useFirebase } from "../firebase";
import { useEffect, useState } from "react";
const BlogDetails = () => {

    const params = useParams();
    const firebase = useFirebase();
    const {id} = params;
    const [data, setDate] = useState(null);

    const getDetails = async () =>{
            try{
                const result = firebase.getBlogData(id);
                console.log("my active blog data is", result);
            }
            catch(error){
                console.log("active blog error", error);
            }
    }
    useEffect(()=>{
        getDetails(); 
    },[])
    return (
        <>
            <div className="container py-4">
                <div className="blog_section">
                    <div className="blog_details p-3">
                        <div className="blog_mainImg">
                            <img src="https://preview.colorlib.com/theme/magazine/img/f1.jpg" alt="main_img" />
                        </div>
                        <div className="about_blog p-3">
                            <Link to="/">
                                <button className="cat_link">
                                    Food Habit
                                </button>
                            </Link>
                        </div>
                        <div className="blog_title px-3">
                            <h2>A Discount Toner Cartridge Is Better Than Ever.
                            </h2>
                        </div>
                        <div className="about_blog d-flex gap-4 px-3">
                            <div className="blog_editor d-flex align-items-center gap-1">
                                <Icon icon="dashicons:admin-users" />
                                <span>
                                    Sufian
                                </span>
                            </div>
                            <div className="blog_editor d-flex align-items-center gap-1">
                                <Icon icon="simple-line-icons:calender" />
                                <span>
                                    7 July 2023
                                </span>
                            </div>
                            <div className="blog_editor d-flex align-items-center gap-1">
                                <Icon icon="uiw:message" />
                                <span>
                                    Sufian
                                </span>
                            </div>
                        </div>
                        <div className="blog_content p-3 text-justify">
                            <p className="text-justify first_para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus.</p>
                            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus.</p>
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
                                            <textarea class="form-control custom_textarea" placeholder="Leave a comment here"  rows="6" ></textarea>

                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <input type="submit" className="custom_submit"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="main_sideBar">
                        <BlogSideBar />
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogDetails;