import React, { useEffect, useState } from 'react'
import ItemList from './itemList'
import { firebase, db, storage } from '../firebase'
const List = () => {
    const [files, setFiles] = useState([]);
    useEffect(() => {
        setFiles([]);
        var storageRef = storage.ref();
        var listRef = storageRef.child('img-storage');
        listRef.listAll().then((res) => {
            res.items.forEach((itemRef) => {
                let url;
                itemRef.getDownloadURL().then(function(downloadURL) {
                    url = downloadURL;
                });
                itemRef.getMetadata().then((metadata) => {
                    let dt = metadata.timeCreated;
                    setFiles(files => [...files, {name: metadata.name, date: dt.substring(0, 4)+'/'+dt.substring(5, 7)+'/'+dt.substring(8, 10), url: url}]);
                })
            });
        }); 
    }, [])
    return (
        <div style={{ width: '100%', alignItems: 'flex-start', overflowY: 'scroll'}}>
            {
                files.map(item => (<ItemList name={item.name} date={item.date} url={item.url}/>))
            }
        </div>
    )
}

export default List