import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import SiderBarBlockCard from "../cards/sideBarBlogCard";
import { useState, useEffect } from 'react';
import { useFirebase } from "../../firebase";

const BlogSideBar = ({ author }) => {
    const firebase = useFirebase();
    const [blogs, setBlogs] = useState([]);
    const [pblogs, setPblogs] = useState([]);

    const GetAuthorBlogs = async () => {
        try {
            const result = await firebase.getAuthordata(author);
            console.log("blog sider api result ", result);
            const blogList = [];
            result.forEach(doc => {
                const blog = { slug: doc.id, ...doc.data() };
                blogList.push(blog);
            });

            setBlogs(blogList);
        }
        catch (error) {
            console.log("get author data error", error);
        }

    }
    const mostmpappular = async () => {
        try {
            const result = await firebase.getPapulorBlogs();
            const blogList = [];
            result.forEach(doc => {
                const blog = { slug: doc.id, ...doc.data() }
                blogList.push(blog);
            })
            setPblogs(blogList);
        }
        catch (error) {
            console.log("most papulor blogs api error", error)
        }
    }
    useEffect(() => {
        if (author) {
            GetAuthorBlogs();
        }
    }, [author])

    useEffect(() => {
        mostmpappular()
    }, [])

    return (
        <>
            <div className="side_bar">
                <div className="p-3">
                    <div className="sideBar_block py-2 px-3">
                        Editor's block
                    </div>

                    <div className="">
                        <div className="sideBar_card">
                            <div className="sideBar_cardImg">
                                <img className="w-100" src={blogs[2]?.img} />
                                <div className="sideBar_cat">
                                    <button>{blogs[2]?.cat}</button>
                                </div>

                            </div>
                            <div className="sideBar_Link mt-2">
                                <Link to={`/blog/details/${blogs[2]?.slug}`}>
                                    <h3>
                                        {blogs[2]?.title}
                                    </h3>
                                </Link>

                            </div>
                            <div className="about_blog d-flex gap-4">
                                <div className="blog_editor d-flex align-items-center gap-1">
                                    <Icon icon="dashicons:admin-users" />
                                    <span>
                                        {blogs[2]?.author}
                                    </span>
                                </div>
                                <div className="blog_editor d-flex align-items-center gap-1">
                                    <Icon icon="simple-line-icons:calender" />
                                    <span>
                                        {blogs[2]?.date}
                                    </span>
                                </div>
                                <div className="blog_editor d-flex align-items-center gap-1">
                                    <Icon icon="uiw:message" />
                                    <span>
                                        {blogs[2]?.views}
                                    </span>
                                </div>
                            </div>
                            <div className="Sidebar_blogtext mt-2">
                                <p>{blogs[2]?.dis}</p>
                            </div>

                        </div>
                    </div>

                    <div className="sideBar_card">
                        {blogs.map((item, index) => {
                            return (
                                <SiderBarBlockCard data={item} key={item?.id} />
                            )
                        })}


                    </div>
                    <div className="sideBar_block py-2 px-3 mt-4">
                        Most Popular
                    </div>
                    <div className="sideBar_card">
                        {pblogs.map((blog, index) => {
                            return (
                                <SiderBarBlockCard data={blog} key={blog?.id}/>

                            )
                        })}

                    </div>
                    <div className="sideBar_block py-2 px-3 mt-4">
                        Social Networks
                    </div>
                    <div className="socail_links">
                        <ul className="w-100">
                            <li>
                                <Link>
                                    <div className="socail_items">
                                        <Icon icon="ri:facebook-line" />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <div className="socail_items">
                                        <Icon icon="basil:twitter-outline" />

                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <div className="socail_items">
                                        <Icon icon="ri:linkedin-line" />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <div className="socail_items">
                                        <Icon icon="teenyicons:github-outline" />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogSideBar;