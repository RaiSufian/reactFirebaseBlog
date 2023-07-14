import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import SiderBarBlockCard from "../cards/sideBarBlogCard";
const BlogSideBar = () => {
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
                                <img className="" src="https://preview.colorlib.com/theme/magazine/img/e1.jpg.webp" />
                                <div className="sideBar_cat">
                                    <button>Travel</button>
                                </div>

                            </div>
                            <div className="sideBar_Link mt-2">
                                <Link to="/">
                                    <h3>
                                        A Discount Toner Cartridge Is
                                        Better Than Ever.
                                    </h3>
                                </Link>

                            </div>
                            <div className="about_blog d-flex gap-4">
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
                            <div className="Sidebar_blogtext mt-2">
                                <p>Lorem ipsum dolor sit amet, consecteturadip isicing elit, sed do eiusmod tempor incididunt ed do eius.</p>
                            </div>

                        </div>
                    </div>
                    <div className="sideBar_card">
                        <SiderBarBlockCard />
                        <SiderBarBlockCard />
                        <SiderBarBlockCard />
                        <SiderBarBlockCard />
                    </div>
                    <div className="sideBar_block py-2 px-3 mt-4">
                        Most Popular
                    </div>
                    <div className="sideBar_card">
                        <SiderBarBlockCard />
                        <SiderBarBlockCard />
                        <SiderBarBlockCard />
                        <SiderBarBlockCard />
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