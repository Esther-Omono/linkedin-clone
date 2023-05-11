import React from 'react';
import '../styles/Sidebar.css';
import { Avatar } from '@mui/material';
import bg from '../assets/water-drops.jpg';

function Sidebar() {
    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img className='sidebar__img' src={bg} alt='' />
                <Avatar className='sidebar__avatar' />
                <h2>Esther Atakere</h2>
                <h4>estheratakere@mail.com</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>2,543</p>
                </div>

                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>2,400</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('redux')}
                {recentItem('firebase')}
                {recentItem('materialui')}
                {recentItem('javascript')}
                {recentItem('nodejs')}
            </div>
        </div>
    );
}

export default Sidebar