import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
const SiderBarBlockCard = ({data}) => {
    return (
        <div className="pt-3 border-top side_barCard">
            <Link to={`/blog/details/${data?.slug}`}>
                <div className="card_body d-flex align_items_center gap-2">
                    <img src={data?.img} alt="img" className="side_card_img"/>
                    <div className="card_details">
                        <div className="title">
                            <h5>{data?.title}</h5>

                        </div>
                        <div className="about_blog d-flex gap-4">
                            <div className="blog_editor d-flex align-items-center gap-1">
                                <Icon icon="simple-line-icons:calender" />
                                <span>
                                  {data?.date}
                                </span>
                            </div>
                            <div className="blog_editor d-flex align-items-center gap-1">
                                <Icon icon="uiw:message" />
                                <span>
                                    {data?.author}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default SiderBarBlockCard;