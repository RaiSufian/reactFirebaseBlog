import BlogCard from "../cards/blogCard";
import { useFirebase } from "../../firebase";
import { useEffect, useState } from "react";

const CateBlogs = ({ title }) => {

    const firebase = useFirebase();
    const [blogs, setBlogs] = useState([]);

    const getCatdata = async () => {
        try {
            const result = await firebase.getCatData(title);
          
            const blogList = [];
            result.forEach(doc => {
                const blog = { slug: doc.id, ...doc.data() };
                blogList.push(blog);
            });
            setBlogs(blogList);
        }
        catch (error) {
            console.log("get catgory blogs error", error);
        }
    }
    useEffect(() => {
        getCatdata();
    }, []);
 
    return (
        <>
            <div className="blog_heading">
                <h2>{title}</h2>
            </div>
            <div className="container">
                <div className="blog_Cards">
                    {blogs.map((item, index) => {
                        return (
                            <div className="blog_card" key={item.id}>
                                <BlogCard data={item} />
                            </div>
                        )
                    })}


                </div>
            </div>
        </>

    )
}
export default CateBlogs;