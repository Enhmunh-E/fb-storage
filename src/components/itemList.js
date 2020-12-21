import React from 'react'
import { firebase, db, storage } from '../firebase'
import fileIcon from './../file.png'

const ItemList = ({ name = 'name', date = '2020/20/20', url='' }) => {
    const del = () => {
        var storageRef = storage.ref();
        var deleteRef = storageRef.child(`img-storage/${name}`);
        deleteRef.delete().then(function() {
            console.log('File Deleted Successfully!!!');
        }).catch(function(error) {
            console.log('Uh-oh, an error occurred!')
        });
        window.location.reload();
    } 
    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '50px', padding: '10px', margin: '30px', backgroundColor: 'white', borderRadius: '5px', justifyContent: 'space-between' }}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div onClick={() => window.location.href = url} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={fileIcon} height={'30px'} width={'30px'} />
                </div>
                <div onClick={() => window.location.href = url} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginLeft: '10px' }}>
                    <div style={{ color: 'rgba(0,0,0,.72)', fontSize: '16px' }}> {name} </div>
                    <div style={{ color: 'rgba(0,0,0,.54)', fontSize: '14px' }}> {date} </div>
                </div>
            </div>
            <div onClick={del} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                X
            </div>
        </div>
    )
}

export default ItemList