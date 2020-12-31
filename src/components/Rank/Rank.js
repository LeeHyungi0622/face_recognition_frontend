import React from "react";


const Rank = ({ name, entries }) => {
    return (
        <>
        <div>
            <div className="black f3">
                {`${name}님, 당신이 여지까지 사진에서 얼굴부분을 추출하는데 시도한 횟수는`}
            </div>
            <div className="black f3">
                {`${entries}번 입니다. 이용해주셔서 감사합니다.`}
            </div>
        </div>
        </>
    );
}

export default Rank;