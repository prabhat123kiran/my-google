import React from 'react'
import FacebookLogin from 'react-facebook-login';


const responseFacebook = (response) => {
    console.log(response);
}

const componentClicked = (d) => {
    console.debug("componentClicked", d)
}

export default function FacebookSignIn() {
    return (
        <div>
            <FacebookLogin
                appId="1818326288545689"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook} />,
        </div>
    )
}
