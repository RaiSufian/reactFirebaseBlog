import { Link } from "react-router-dom";
const CatCard = ({ blog }) => {
    return (
        <Link to={`/blog/details/${blog?.slug}`}>
            <div className="cat_card mb-4">
                <div className="blog_Img">
                    <img src={blog?.img} alt="img" />
                </div>
                <div className="blog_details">
                    <h4>
                        {blog?.title}
                    </h4>
                </div>
            </div>
        </Link>

    )
}
export default CatCard;