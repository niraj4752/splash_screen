import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Utility{
    static sharedInstance= Utility.sharedInstance==null? new Utility(): Utility.sharedInstance;
    async _storeData(key,data,msg){
        if(_DEV_){
            logger('key@',key);
            console.log('key@',key)
        }
        if(_DEV_){
            logger('data@',data);
        } 
        if(_DEV_){
            logger('msg@',msg);
        } 
        
        try{
            await AsyncStorage.setItem(key,JSON.stringify(data));
            return true;
        }catch(error){
            if(_DEV_){
                logger(error);
            }
            return false;
        }
    }
    
    async _retrieveData(key){
        try{
            const value= await AsyncStorage.getItem(key);
            console.log('calling '+value);
            if(value !== null){
                return JSON.parse(value);
            }
        }catch (error){}
    }
    
}


export function logger(message)
{
    if(_DEV_){
        console.log(message);
    }
}