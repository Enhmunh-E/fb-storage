import React from 'react'
import { firebase, db, storage } from '../firebase'
const AddButton = () => {
    const uploadImageToStorage = (file) => {
        var storageRef = storage.ref();
        storageRef.child(`img-storage/${file.name}`).put(file);
        // uploadTask.on('state_changed', function(snapshot){
        //     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //     console.log('Upload is ' + progress + '% done');
        //     switch (snapshot.state) {
        //     case firebase.storage.TaskState.PAUSED:
        //         console.log('Upload is paused');
        //         break;
        //     case firebase.storage.TaskState.RUNNING:
        //         console.log('Upload is running');
        //         break;
        //     }
        // }, function(error) {
        // }, function() {
            window.location.reload();
        // });
    }
    return (
        <div style={{ backgroundColor: 'rgb(77,121,213)', width: '60%', borderRadius: '30px', height: '50px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ fontSize: '24px', color: 'white', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                Upload File
            </div>
            <input type='file' className='file_upload' accept='image/*' onChange={(e) => uploadImageToStorage(e.target.files[0])}/>
        </div>
    )
}

export default AddButton