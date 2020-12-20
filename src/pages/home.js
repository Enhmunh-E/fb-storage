import React, { useState } from 'react'
import AddButton from '../components/addButton'
import List from '../components/list'

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', height: '700px', width: '450px', overflow: 'hidden', backgroundColor: 'rgb(239,240,242)' }}>
            <h3>
                File Storage
            </h3>
            <AddButton />
            <List />
        </div>
    )
}

export default Home