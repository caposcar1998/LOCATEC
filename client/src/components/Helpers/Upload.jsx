import React, { useState } from 'react'
import AWS from 'aws-sdk'
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const S3_BUCKET ='locatec';
const REGION ='us-east-1';

AWS.config.update({
    accessKeyId: import.meta.env.VITE_APP_ID_AWS,
    secretAccessKey: import.meta.env.VITE_APP_KEY_AWS
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})

function Upload(){

    const [progress , setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = (file) => {

        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
            })
            .send((err) => {
                if (err) console.log(err)
            })
    }

    return (
        <Container>
            <div>Native SDK File Upload Progress is {progress}%</div>
            <Form.Control type="file" placeholder={"Id"} onChange={handleFileInput} />
            <Button variant="success" onClick={() => uploadFile(selectedFile)}>Subir archivo</Button>
        </Container>
        )

}

export default Upload