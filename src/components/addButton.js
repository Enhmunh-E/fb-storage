import React, { useState } from 'react'
import { firebase, db, storage } from '../firebase'
const AddButton = ({ files, setFiles }) => {
    const [selectedFile, setSelectedFile] = useState('');
    const selectFile = (file) => {
        console.log(file)
        setSelectedFile(file);
        uploadImageToStorage(file);
    }
    const uploadImageToStorage = (file) => {
        var storageRef = storage.ref();
        var uploadTask = storageRef.child(`img-storage/${file.name}`).put(file);
        uploadTask.on('state_changed', function(snapshot){
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                var ItemRef = storageRef.child(`img-storage/${file.name}`);
                ItemRef.getMetadata().then((metadata) => {
                    let dt =  metadata.timeCreated;
                    setFiles(files => [...files, {name: metadata.name, date: dt.substring(0, 4)+'/'+dt.substring(5, 7)+'/'+dt.substring(8, 10), url: downloadURL}]);
                })
            });
        });
    }
    return (
        <div style={{ backgroundColor: 'rgb(77,121,213)', width: '60%', borderRadius: '30px', height: '50px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ fontSize: '24px', color: 'white', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                Upload File
            </div>
            <input type='file' className='file_upload' accept='image/*' onChange={(e) => selectFile(e.target.files[0])}/>
        </div>
    )
}

export default AddButton