import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

// DaumPostcodeData 인터페이스 정의
interface DaumPostcodeData {
    address: string;
    addressType: string;
    bname: string;
    buildingName: string;
    zonecode: string;
    // 필요한 다른 필드들을 추가해주세요. onSelectAddress 제거
}

interface Props {
    onSelectAddress: (address: string, zonecode: string) => void; // 변경된 부분
}

const Postcode: React.FC<Props> = ({ onSelectAddress }) => {
    // Daum postcode 라이브러리 스크립트 URL
    const scriptUrl = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    const open = useDaumPostcodePopup(scriptUrl);

    const handleComplete = (data: DaumPostcodeData) => {
        if (!data) {
            console.error('Daum Postcode data is not provided');
            return;
        }

        let fullAddress = data.address;
        const zonecode = data.zonecode; // 우편번호 추출
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }

        onSelectAddress(fullAddress, zonecode);  // 부모 컴포넌트로 주소 정보 전달
    };

    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    // 인라인 스타일 정의
    const buttonStyle = {
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "15px",
        cursor: "pointer",
    };

    return (
        <div>
            <button type='button' onClick={handleClick} style={buttonStyle}>
                주소 찾기
            </button>
        </div>
    );
};

export default Postcode;
