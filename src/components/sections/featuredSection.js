import BlogCard from "../cards/blogCard";
import { Link } from 'react-router-dom';
import { useFirebase } from "../../firebase";
import { useEffect, useState } from "react";
const FeaturedBlogs = () => {

    const firebase = useFirebase();
    const [blogs, setBlogs] = useState([]);

    const getDate = async () => {
        firebase.getFeaturedData().then((resp) => {
           
            const blogList = [];
            resp.forEach(doc => {
                const blog = { id: doc.id, ...doc.data() };
                blogList.push(blog);

            });
            setBlogs(blogList);
        })
    }

    useEffect(() => {
        getDate();
    }, [])


    return (
        <section className="py-4">
            <div className="container">
                <div className="blog_heading">
                    <h2 className="">   Featured Blog</h2>
                </div>
                <div className="d-flex gap-2">
                    <div className="flex-1">
                        <BlogCard data={blogs[1]} />
                        <BlogCard data={blogs[2]} />

                    </div>
                    <div className="flex-2">
                        <div className="feature_slider">
                            <Link to="/blog/details/:id">

                                <div className="feature_slider_card">
                                    <div className="slider_img">
                                        <img src={blogs[0]?.img} />
                                    </div>
                                    <div className="featured_slider_title">
                                        <Link className="" to={`/blog/details/${blogs[0]?.slug}`}>
                                            <h2 className="">{blogs[1]?.title}</h2>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1">
                        <BlogCard data={blogs[3]} />
                        <BlogCard data={blogs[4]} />
                    </div>
                </div>
            </div>



        </section>
    )
}
export default FeaturedBlogs;