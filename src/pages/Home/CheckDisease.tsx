import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import axios from 'axios';

export interface accept {
  [key: string]: string[];
}

const CheckDisease: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  }, []);

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg'],
      },
  });
  

  return (
    <Container>
      <h2>질병 체크</h2>
      <DropzoneContainer {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here...</p>
        ) : (
          <p>Drag and drop a file or click to upload</p>
        )}
      </DropzoneContainer>
      {preview && <PreviewImage src={preview} alt="Preview" />}
      <UploadButton onClick={handleUpload}>Upload</UploadButton>
    </Container>
  );
};

export default CheckDisease;

const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const DropzoneContainer = styled.div`
  width: 100%;
  height: 200px;
  border: 2px dashed #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 20px;
`;

const PreviewImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const UploadButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
