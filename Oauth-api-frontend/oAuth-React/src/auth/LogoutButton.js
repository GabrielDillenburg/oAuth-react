import React from 'react';

const LogoutButton = () => {
    const logout = async () => {
        const domain = "dev-pevkoyc6.us.auth0.com";
        const clientID = "CB6ORrvBO2zbzxR8QJ7sfO8S15ofQkEc";
        const returnTo = "`https://localhost:3000";

        const response = await fetch(
        `https://${domain}/logout?client_id=${clientID}&return_to=${returnTo}`,
        { redirect: "manual"}
        );

        window.location.replace(response.url);
    };

    return (
        <button className="Login-button" onClick={()=> logout()}>
            Log out
        </button>
    );
};

export default LogoutButton;