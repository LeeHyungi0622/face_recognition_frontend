import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
    return (
        isSignedIn ? (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>로그아웃</p>
            </nav>
        ) : (
            <>
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>로그인</p>
                    <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>회원가입</p>
                </nav>
            </>
        )
    );
}

export default Navigation;