import React, { useEffect, useState } from 'react';
import '../styles/Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from '../firebase';
import { collection, doc, onSnapshot, query, serverTimestamp, setDoc } from 'firebase/firestore';

function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const unsub = query(collection(db, 'posts'))
            onSnapshot(unsub, (snapshot) => {
                setPosts(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
        }
        getPosts()
    }, []); 

    const sendPost = async () => {
        e.preventDefault();

        await setDoc(doc(db, 'posts'), ({
            name: 'Esther',
            description: 'Test!',
            message: input,
            photoUrl: '',
            timestamp: serverTimestamp(),
        }));

        setInput('');
    };

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />

                    <form>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type='text' 
                        />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='#e7a33e' />
                    <InputOption Icon={EventNoteIcon} title='Event' color='#c0cbcd' />
                    <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7fc15e' />
                </div>
            </div>

            {posts.map(({ id, data: { name, description, message, photoUrl }}) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </div>
    );
}

export default Feed