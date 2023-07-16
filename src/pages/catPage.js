import { useParams } from "react-router-dom";
import CatCard from "../components/cards/catCard";
import { useState, useEffect } from "react";
import { useFirebase } from "../firebase";
import { startLoading, endLoading } from '../redux/slice/loading';
import { useDispatch } from 'react-redux';
const CatPage = () => {

    const [blogs, setBlogs] = useState([]);

    const firebase = useFirebase();

    const params = useParams();
    const { name } = params;
    const dispatch = useDispatch();

    const getvatData = async () => {
        try {
            const result = await firebase.getCatData2(name);
            const blogList = [];

            result.forEach(doc => {
                const blog = { slug: doc.id, ...doc.data() };
                blogList.push(blog);
            })

            setBlogs(blogList);
            dispatch(endLoading())
        }
        catch (error) {
            console.log("get api for cat data is", error)
        }
    }
    useEffect(() => {
        dispatch(startLoading())
        if (name) {
            getvatData();
        }

    }, [name])

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="catPage_title">
                            <span>
                                {name}
                            </span>

                        </div>
                    </div>
                </div>
                <div className="blog_section">
                    <div className="row w-100">
                        <div className="col-12">
                            <div className="cat_blogs">
                                <div className="row">
                                    {blogs.map((blog) => {
                                        return (
                                            <div className="col-4" key={blog?.slug}>
                                                <CatCard blog={blog}/>
                                            </div>
                                        )
                                    })}



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CatPage;