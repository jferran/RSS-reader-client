import {createContext, useEffect, useState} from 'react'
import { getFeedsSharedByUsers, getMyFeedsService } from '../services/user.services'

const SubscriptionsContext = createContext()

function SubscriptionsWrapper(props){
    const [mySubscriptions, setMySubscriptions] = useState(null)
    const [sharedSubscriptions, setSharedSubscriptions] = useState(null)
    
    const getSubscriptions = async () => {
        try {
            const response = await getMyFeedsService()
            setMySubscriptions(response.data)
            console.log("call getSubscriptions", response.data)
        } catch (error) {
            
        }
    }
    const getSharedSubscriptions = async () => {
        try {
            const response = await getFeedsSharedByUsers()
            setSharedSubscriptions(response.data)
        } catch (error) {
            
        }
    }

    const passedContext = {
        mySubscriptions,
        setMySubscriptions,
        getSubscriptions,
        sharedSubscriptions,
        getSharedSubscriptions
    }

    useEffect(()=>{
        getSubscriptions()
        getSharedSubscriptions()
    },[])
    
    return (
        <SubscriptionsContext.Provider value={passedContext}>
            {props.children}
        </SubscriptionsContext.Provider>
    )
}

export {SubscriptionsContext, SubscriptionsWrapper}