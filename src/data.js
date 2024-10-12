export const API_KEY = 'AIzaSyAJ4LWU3kRH1kUBBGyeRLvaG5Yb_ZNYFS0'

export const value_converter=(value)=>{
    if (value >= 1000000){
        return Math.floor(value/1000000)+"M";

    }
    else if (value >= 1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}