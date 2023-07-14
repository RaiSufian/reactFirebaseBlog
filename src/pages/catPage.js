import { useParams } from "react-router-dom";
import BlogSideBar from "../components/sections/blogSideBar";
import CatCard from "../components/cards/catCard";
const CatPage = () => {

    const params = useParams();
    const { name } = params;
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
                        <div className="col-8">
                            <div className="cat_blogs">
                                <div className="row">
                                    <div className="col-6">
                                        <CatCard />
                                    </div>
                                    <div className="col-6">
                                        <CatCard />
                                    </div>
                                    <div className="col-6">
                                        <CatCard />
                                    </div>
                                    <div className="col-6">
                                        <CatCard />
                                    </div>
                                    <div className="col-6">
                                        <CatCard />
                                    </div>
                                    <div className="col-6">
                                        <CatCard />
                                    </div>
                                    <div className="col-6">
                                        <CatCard />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="main_sideBar">
                                <BlogSideBar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CatPage;