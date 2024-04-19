import {useState, useEffect} from 'react';

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    //check if online
    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        });

        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        });
    }, [])

    return onlineStatus;
}

export default useOnlineStatus;

/*
Line of thinking
Contract: Check if Online or Offline and return the onlineSatus(boolean)
No need any argument from the caller as we will get it from the browser online event api
*/