import GoogleLogin from 'react-google-login';
import { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';



// const clientId = "253570984734-9llp81k77s6es41763l4u77eon0093e6.apps.googleusercontent.com"

function GoogleSignIn() {
    // const [loginData, setLoginData] = useState(
    //     localStorage.getItem('loginData')
    //         ? JSON.parse(localStorage.getItem('loginData'))
    //         : null
    // );

    const handleFailure = (result) => {
        alert("loginFailed", result);
    };

    const handleLogin =
        // async
        (googleData) => {
            console.debug("handleLogin", googleData)
            // const res = await fetch('/api/google-login', {
            //     method: 'POST',
            //     body: JSON.stringify({
            //         token: googleData.tokenId,
            //     }),
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // });

            // const data = await res.json();
            // setLoginData(data);
            // localStorage.setItem('loginData', JSON.stringify(data));
        };
    // const handleLogout = () => {
    //     localStorage.removeItem('loginData');
    //     setLoginData(null);
    // };

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });
    return (
        <div className="App">
            <header className="App-header">
                <h1>React Google Login App</h1>
                <div>
                    {/* {loginData ? (
                        <div>
                            <h3>You logged in as {loginData.email}</h3>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    ) : ( */}
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        // clientId={clientId}
                        buttonText="Log in with Google"
                        onSuccess={handleLogin}
                        onFailure={handleFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    ></GoogleLogin>
                    {/* )} */}
                </div>
            </header >
        </div >
    );
}

export default GoogleSignIn;