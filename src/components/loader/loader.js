import Lottie from "lottie-react";
import loadingAnimation from '../json/loadingAnimation.json';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect, useState } from "react";
const Loader = () => {
    const loader = useSelector((state) => state.loader.loading);
   
    useEffect(() => {
        console.log("loading result is", loader);
 
    }, [loader])
    return (
        <>
            <div className={`loader_section  ${loader ? "" : "hidden"}`} >
                <div className="w-20">
                    <Lottie animationData={loadingAnimation} loop={true} />
                </div>
            </div>
        </>
    )
}
export default Loader;