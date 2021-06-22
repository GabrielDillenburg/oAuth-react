import React from 'react';

const LoginButton = () => {
    const login = async () => {
        const domain = "dev-pevkoyc6.us.auth0.com";
        const audience = "https://challenges-api.com";
        const scope = "read:challenges";
        const clientID = "CB6ORrvBO2zbzxR8QJ7sfO8S15ofQkEc";
        const responseType = "code";
        const redirectUri = "https://localhost:3000/challenges";

        const response = await fetch(
            `https://${domain}/authorize?` +
            `audience=${audience}&` +
            `scope=${scope}&` +
            `response_type=${responseType}&` +
            `client_id=${clientID}&` +
            `redirect_uri=${redirectUri}`, {
                redirect: "manual"
            }
        );
            
        window.location.replace(response.url);
        
    };

    return (
        <button className="Login-button" onClick={() => login()}>
            Log in
        </button>
    );
};

export default LoginButton;
