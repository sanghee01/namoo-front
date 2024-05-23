import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import styled from "styled-components";
import axios from "axios";
import { warningAlert } from "../../components/Alert";

const CheckDisease: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [diseaseResult, setDiseaseResult] = useState<string | null>(null); // 질병 결과 상태 추가

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
    setDiseaseResult(null); // 파일을 새로 드롭할 때마다 결과 초기화
  }, []);

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post("http://127.0.0.1:5001/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      // 서버로부터 받은 응답에 따라 diseaseResult 상태 업데이트

      const resultLabel = response.data.disease_label;
      if (resultLabel === 0) {
        setDiseaseResult("정상");
      } else if (resultLabel === 1) {
        setDiseaseResult("균핵병");
      } else {
        setDiseaseResult("노균병"); // 실제 조건에 맞는 값을 설정하세요
      }
    } catch (error) {

      console.error("Error uploading file", error);
      await warningAlert("서버 점검 중입니다");

    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
    },
  });

  return (
    <DiseaseBackGround>
      <Header>
        <Link to="/home">
          <MdArrowBackIos size="30" />
        </Link>
        <HeaderText>질병 확인</HeaderText>
      </Header>
      <Container>
        <Text>※작물 사진이 아니면 올바른 정보가 제공되지 않을 수 있습니다</Text>
        <DropzoneContainer {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>파일을 여기에 드롭하세요...</p>
          ) : (
            <p>
              {preview ? (
                <PreviewImage src={preview} alt="Preview" />
              ) : (
                <Upload src="assets/images/upload.png" alt="Upload" />
              )}
            </p>
          )}
        </DropzoneContainer>
        <UploadButton onClick={handleUpload}>보내기</UploadButton>
        {diseaseResult && <ResultText>{diseaseResult}</ResultText>}
      </Container>

    </DiseaseBackGround>
  );
};

export default CheckDisease;

export const DiseaseBackGround = styled.div`
  background-repeat: no-repeat;
  background-color: #fffaed;
  background-size: 550px 700px;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 25px;
  height: 10%;

  svg:hover {
    cursor: pointer;
  }
`;

const HeaderText = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const Text = styled.span`
  font-size : 12px;
  font - weight: bold;
`;

const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const DropzoneContainer = styled.div`
  width: 80%;
  height: 200px;
  border-radius: 20px;
  border: 2px dashed #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 20px;
  overflow: hidden; /* 박스 밖으로 넘치는 부분 숨기기 */
  position: relative; /* 절대 위치 지정 기준 */
`;

const Upload = styled.img`
  height: 150px;
  width: 150px;
`;
const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* 이미지가 박스에 비율을 맞춰 조정 */
  position: absolute; /* 박스 내에서 절대 위치 지정 */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 이미지가 박스의 중앙에 위치하도록 조정 */
`;

const UploadButton = styled.button`
  padding: 10px 20px;
  background-color: #c59978;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #ae8870;
  }
`;

const ResultText = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: #2e2e2e;
  font-weight: bold;
`;
