import { Icon } from '@iconify/react';
import { Link , useNavigate} from 'react-router-dom';
import { useFirebase } from "../firebase";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../redux/slice/user';
const Auth = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.UserData.user);
 
    const navigation = useNavigate();

    const [useData, setUserData] = useState({
        email: "",
        pass: ""
    })

    const firebase = useFirebase();

    const loginwithEmail = async (e) => {
        e.preventDefault();
        try {
            const result = await firebase.signWithEmail(useData.email, useData.pass);
          
            dispatch(addUser(result.user));
            toast.success('Login successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            navigation("/")

        }
        catch (error) {
            console.log("user login with email error is", error);
            toast.error('Please try again, Something went wrong ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        }
    }
    
    const updateValues = (e) => {
        const { name, value } = e.target;
        setUserData({ ...useData, [name]: value });

    }

    return (
        <div className="login_page">
            <div className="login_div py-3 px-3">
                <div className="logo_section">
                    <h1 className="py-3 text-white">INGA NEWS</h1>
                </div>
                <div className="row">
                    <div className="col-12">
                        <span className="login_text">
                            Login
                        </span>
                    </div>
                </div>
                <form className="mt-3 login_form" onSubmit={loginwithEmail}>
                    <div className="py-2">
                        <label>Email</label>
                        <input type="email" className="form-control mt-1" placeholder="Your Email" name='email' required onChange={(e) => updateValues(e)} />
                    </div>
                    <div className="py-2">
                        <label>Password</label>
                        <input type="password" className="form-control mt-1" placeholder="Your Password" name="pass" required onChange={(e) => updateValues(e)} />
                    </div>
                    <div className="py-2 mt-2 ">

                        <button className='login_btn mx-auto py-2 ' ><span>Login Now</span><Icon icon="ic:round-login" /></button>
                    </div>
                </form>
                {/* <div className='SignUp'>
                        <button onClick={() => creatNewAccount()}>sign Up</button>
                </div> */}
                <div className='text-end py-3'>
                    <Link to="/">
                        Go to home
                    </Link>
                </div>
            </div>
        </div >
    )
}
export default Auth;