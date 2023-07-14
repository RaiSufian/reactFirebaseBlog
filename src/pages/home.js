import HeroSection from "../components/sections/hero";
import FeaturedBlogs from "../components/sections/featuredSection";
import CateBlogs from "../components/sections/categoryBlogs";
const Home = () => {
    return (
        <div className="py-3">
            <HeroSection />
            <FeaturedBlogs />
            < CateBlogs title="pakistan" />
            < CateBlogs title="international" />
            < CateBlogs title="technology" />
            < CateBlogs title="science" />



        </div>
    )
}
export default Home;