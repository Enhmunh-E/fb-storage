import React, { useState } from 'react'
import { firebase, db, storage } from '../firebase'
const AddButton = () => {
    const [upl, setUpl] = useState(false);
    const [perc, setPerc] = useState(0);
    const uploadImageToStorage = (file) => {
        setUpl(true);
        var storageRef = storage.ref();
        var uploadTask = storageRef.child(`img-storage/${file.name}`).put(file);
        uploadTask.on('state_changed', (snapshot) => {
            var progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setPerc(progress);
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED:
                console.log('Upload is paused');
                break;
            case firebase.storage.TaskState.RUNNING:
                console.log('Upload is running');
                break;
            }
        }, function(error) {
        }, function() {
            console.log('upload done');
            setTimeout(() => {
                setUpl(false);   
                window.location.reload();
            }, 1000);
        });
    }
    return (
        <>
        <div style={{ backgroundColor: 'rgb(77,121,213)', width: '60%', borderRadius: '30px', height: '50px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ fontSize: '24px', color: 'white', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                Upload File
            </div>
            <input type='file' className='file_upload' accept='image/*' onChange={(e) => uploadImageToStorage(e.target.files[0])}/>
        </div>
        <div style={{border: '1px solid black', width: '80%', borderRadius: '5px', height: '25px', display:`${upl ? 'block': 'none'}`,  margin: '10px 0px'}}>
            <div style={{borderRadius: '5px', width:`${perc}%`, height: '25px', backgroundColor: 'cyan', textAlign: 'center'}}>
                {perc+'%'}
            </div>
        </div>
        </>
    )
}

export default AddButton