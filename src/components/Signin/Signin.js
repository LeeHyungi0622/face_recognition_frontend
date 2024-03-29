import React from "react";


class Signin extends React.Component {

    constructor(props){
        super(props);
        this.state={
            signInEmail: '',
            signInPassword: ''
        }
    }
    
    onEmailChange = (event) => {
        this.setState({
            signInEmail: event.target.value
        })
    }

    onPasswordChange = (event) => {
        this.setState({
            signInPassword: event.target.value
        })
    }

    onSubmitSignIn = () => {
        // post method
        // back-end로 데이터를 보낼때, javascript object를 직접적으로 보낼 수 없다.
        // javascript object를 JSON.stringify로 변환해서 보내줘야 한다.
        fetch('https://glacial-atoll-71260.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
            <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">이미지 얼굴검출 페이지</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">이메일</label>
                        <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">비밀번호</label>
                        <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input 
                        onClick={this.onSubmitSignIn}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="로그인"/>
                    </div>
                    <div className="lh-copy mt3">
                    <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">회원가입</p>
                    </div>
                </div>
                </main>
                </article>
        )
    }
}

export default Signin;