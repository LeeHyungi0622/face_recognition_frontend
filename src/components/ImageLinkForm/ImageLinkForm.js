import React from "react";
import "./ImageLinkForm.css";


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <>
        <div>
            <p className="f3">
                {'업로드한 사진에서 얼굴 부분을 추출해보세요.'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange} />
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonSubmit}>얼굴부분 검출</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default ImageLinkForm;