import React, { useState } from 'react'
import { uploadFile } from 'react-s3';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const S3_BUCKET ='locatec';
const REGION ='us-east-1';
const ACCESS_KEY =import.meta.env.VITE_APP_ID_AWS;
const SECRET_ACCESS_KEY =import.meta.env.VITE_APP_KEY_AWS;

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}


function Upload({setUploadFile, setUrlFile}){
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(res => {
                console.log(res)
                setUrlFile(res["location"])
                setUploadFile(true)
            })
            .catch(err => console.error(err))
    }


    return (
        <>
            <Form.Control type="file" placeholder={"File"} onChange={handleFileInput} />
            <Button variant="success" onClick={() => handleUpload(selectedFile)}>Subir archivo</Button>
        </>
        )

}

export default Upload