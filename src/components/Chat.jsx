/*import { useState } from "react";
import { auth , db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore"
import { useEffect } from "react";
import Message from "./Message";

const Chat = () => {
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        const newQuery = query(collection (db, "messages"), orderBy("timestamp"))

        const unsubscribe = onSnapshot(newQuery, (querySnapshot)=>{
            let currentMessages = [];
            querySnapshot.forEach(item =>{
                currentMessages.push({ content: item.data(), item: item.id })
            })
            setMessages(currentMessages)
        })
        return unsubscribe;
    })

    return ( 
        <section className="chat-content">
            {
                messages && messages.map(item => (
                    <Message 
                        key = { item.id}
                        message = {item.content}    
                    />
                ))
            }
            <h4>This is a Message</h4>
        </section>
     );
  };
  
  export default Chat;
  */

  import { useState, useEffect, useRef } from "react";
  import Message from "./Message";
  import {db} from '../firebase';
  import {query, collection, orderBy, onSnapshot} from 'firebase/firestore';
  import SendMessage from "./SendMessage";
  import { useAuthState } from 'react-firebase-hooks/auth';
  import { auth } from '../firebase';
  
  const Chat = () => {
      const [message, setMessage] = useState([]);
      const scroll = useRef();
      const [user] = useAuthState(auth);
  
      useEffect(() => {
          const q = query(collection(db, 'messages'), orderBy('timestamp'));
          const unsubscribe = onSnapshot(q, (querySnapshot) => {
              let messages = []
              querySnapshot.forEach(doc => {
                  messages.push({...doc.data(), id: doc.id})
              });
              setMessage(messages);
          })
          return () => unsubscribe();
      }, [])
  
      return ( 
          <>
              <section className="chat-content">
                  {
                      message && message.map(item => (
                          <Message
                              key={item.id}
                              message={item}
                          />
                      ))
                  }
              { user && <SendMessage scroll={scroll}/> }
              
              <span ref={scroll}></span>
              </section>
          </>
       );
  }
   
  export default Chat;