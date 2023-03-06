import 'styles/RecoveryPassword.scss'

const RecoveryPassword = () => {
    return(
        <div className="PasswordRecovery">
            <div className="PasswordRecovery-container">
                <img src="logo/logo_yard_sale.svg" alt="logo" className="logo" />
                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">
                    Please check your inbox for instructions on how to reset the password
                </p>
                <form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" className="input input-email" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
            </div>
        </div>

    );
}

export default RecoveryPassword;