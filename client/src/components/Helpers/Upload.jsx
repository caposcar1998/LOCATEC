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

function Upload({setUploadFile, setUrlFile}){

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
                if (err){
                    console.log(err)
                }else{
                    console.log("exito")
                    setUploadFile(true)
                    setUrlFile("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_apps_error.svg/1200px-Nuvola_apps_error.svg.png")
                }
            })
    }

    return (
        <>
            <Form.Control type="file" placeholder={"Id"} onChange={handleFileInput} />
            <Button variant="success" onClick={() => uploadFile(selectedFile)}>Subir archivo</Button>
        </>
        )

}

export default Upload