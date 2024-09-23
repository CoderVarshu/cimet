import React from 'react'
import ListAvatars from './ListAvatars'
import FormAvatar from './FormAvatar'
import { useState } from 'react'
import { useEffect } from 'react'
import AddAvatar from './AddAvatar'

const AvatarApp = () => {

    const [showForm, setShowForm] = useState(false);
    const [avatarList, setAvatarList] = useState([])

    const lightColors = ['#FFC300', '#DAF7A6', '#F7DC6F', '#AED6F1', '#ABEBC6'];
    const darkColors = ['#581845', '#1F618D', '#196F3D', '#C70039', '#34495E'];



    const handleSubmit = (name) => {
        let randomColor;
        let background;
        let color;
        const isLightBackground = Math.random() < 0.5;
        if (isLightBackground) {
            randomColor = lightColors[Math.floor(Math.random() * lightColors.length)];
            background = randomColor
            color = "#000000";
        } else {
            randomColor = darkColors[Math.floor(Math.random() * darkColors.length)];
            background = randomColor
            color = "#FFFFFF";
        }

        let avatarObj = {
            id: Date.now(),
            name,
            backgroundColor: background,
            textColor: color
        }
        setAvatarList((prev) => [...prev, avatarObj])
        setShowForm(false)
    }

    const handleDelete = (id) => {
        const deleteAvtar = avatarList.filter((avatar) =>
            avatar.id !== id)
        setAvatarList(deleteAvtar)
    }

    const handleCancel = () => {
        setShowForm(!showForm)
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <ListAvatars setShowForm={setShowForm} avatarList={avatarList} handleDelete={handleDelete} />
                <AddAvatar setShowForm={setShowForm} />
            </div>
            <FormAvatar showForm={showForm} handleCancel={handleCancel} handleSubmit={handleSubmit} />
        </>

    )
}

export default AvatarApp