import { Link } from "react-router-dom"
const BlogCard = ({ data }) => {
 

        return (
            <div className="blog_cat">
                <div className="blog_img">
                    <img src={ data?.img} className="w-100" />
                </div>
                <div className="blog_details">
                    <Link to={`/blog/details/${ data?.slug}`}>
                        <h6>{ data?.title}</h6>
                    </Link>
                </div>
            </div>
        )
    

}
export default BlogCard;