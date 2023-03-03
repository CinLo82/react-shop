import '../styles/NotFound.scss';

const NotFound = () => {
    return(
        <div className="login">
            <div className="form-container">
                <img src="logo/notFound.jpg" alt="logo" />
                <h1 className="title">OOPS... Page Not Found</h1>
                <p className="subtitle">The page are looking for no longer exist.</p>
                <a href='/' 
                    className="primary-button login-button ">
                    Go to Homepage
                </a>
            </div>
        </div>
    );
}

export default NotFound;
