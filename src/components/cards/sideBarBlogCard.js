import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
const SiderBarBlockCard = () => {
    return (
        <div className="pt-3 border-top side_barCard">
            <Link to="/">
                <div className="card_body d-flex align_items_center gap-2">
                    <img src="https://preview.colorlib.com/theme/magazine/img/e2.jpg.webp" alt="img" />
                    <div className="card_details">
                        <div className="title">
                            <h5>Help Finding Information
                                Online is so easy</h5>

                        </div>
                        <div className="about_blog d-flex gap-4">
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
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default SiderBarBlockCard;