import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFirebase } from '../../firebase';
import { useState, useEffect } from 'react';
const Footer = () => {

    const firebase = useFirebase();
    const [user, setuser] = useState(null);
    useEffect(() => {
        setuser(firebase.userLogin);
    }, [firebase.userLogin])
    const RegistorError = () => {
        toast.warn('Soory, Sign Up is not open at that time', {
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
    const UserlogOut = () => {
        firebase.UserSignOut();
        toast.success('Logout successfully', {
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
    return (
        <footer className="main_footer py-2">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-6">
                        <div className="right_footer d-flex align-items-center gap-3 px-3">
                            <div className="footer_logo">
                                <div className="logo_section">
                                    <h1 className="py-3">INGA NEWS</h1>
                                </div>
                            </div>
                            <div className="copy_right">
                                <span>© 3Hot developers have copy rights. 2023</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        {user ?
                            <div className='footer-links float-end px-4 d-flex gap-4 '>
                                <button onClick={() => UserlogOut()}>
                                    LogOut
                                </button>
                                <Link to="/createNew">
                                    Create Blog
                                </Link>
                            </div>
                            :
                            <div className='footer-links float-end px-4 d-flex gap-4 '>
                                <button onClick={() => RegistorError()}>
                                    Registor
                                </button>
                                <Link to="/auth">
                                    Login
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;