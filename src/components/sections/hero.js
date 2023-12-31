import { Link } from 'react-router-dom';
import { useFirebase } from '../../firebase';
import { useState, useEffect } from 'react';
import { startLoading, endLoading } from '../../redux/slice/loading';
import { useDispatch } from 'react-redux';
const HeroSection = () => {
    const firebase = useFirebase();
    const [blogs, setBlogs] = useState([]);
    const dispatch = useDispatch();
    const getData = async () => {
        try {
            const querySnapshot = await firebase.getHeroData();
            const blogList = [];

            querySnapshot.forEach(doc => {
                const blog = { slug: doc.id, ...doc.data() };
                blogList.push(blog);
            });
            setBlogs(blogList);
            dispatch(endLoading());
        }
        catch (error) {
            console.log("hero blogs api error are", error);
        }
    }
    useEffect(() => {
        dispatch(startLoading());
        getData();
    }, [])
    const getImges = () => {

    }
    useEffect(() => {
        getImges();
    }, [blogs])
    return (
        <section>
            <div className="container py-3">
                <div className="d-flex gap-4">
                    <div className="flex-2">
                        <Link to={`/blog/details/${blogs[0]?.slug}`}>
                            <div className="feature_1 position-relative">
                                <img src={blogs[0]?.img} className="w-100 object-fit-cover h-100" onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "/assets/placeholder.gif";
                                }} />
                                <div className="blog_text p-5">
                                    <p>{blogs[0]?.title}</p>
                                </div>
                            </div>
                        </Link>

                    </div>
                    <div className="flex-1 ">
                        <div className="d-flex w-100 flex-column gap-3">
                            <Link to={`/blog/details/${blogs[1]?.slug}`}>
                                <div className="feature_2 position-relative">
                                    <img src={blogs[1]?.img} className="w-100 object-fit-cover h-100" onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "/assets/placeholder.gif";
                                    }} />
                                    <div className="blog_text p-3">
                                        <p>{blogs[1]?.title}</p>
                                    </div>

                                </div>
                            </Link>
                            <Link to={`/blog/details/${blogs[2]?.slug}`} >
                                <div className="feature_2 position-relative">
                                    <img src={blogs[2]?.img} className="w-100 object-fit-cover h-100" onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "/assets/placeholder.gif";
                                    }} />
                                    <div className="blog_text p-3">
                                        <p>{blogs[2]?.title}</p>
                                    </div>

                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}
export default HeroSection;