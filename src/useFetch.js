import {useEffect , useState} from 'react'

const useFetch = (url) => {

const [data, setData] = useState(null);
const [isPending, setisPending] = useState(true);
const [error, setError] = useState(null);

    useEffect(() => {
        const abortConn = new AbortController();
        setTimeout(() => {
            fetch(url , {signal: abortConn.signal}).then(res =>{
                console.log(res);
                if(!res.ok){
                    throw Error("couldn't fetch the data");
                }
                return res.json()
                }).then(data =>{
                    console.log(data);
                    setData(data);
                    setisPending(false);
                    setError(null);
                }).catch((err) => {
                    if(err.name === "AbortError"){
                        console.log("Fetch Aborted!")
                    } else {
                        setError(err.message);
                        setisPending(false);   
                    }
                    })
        }, 1000) 
        return ()=> abortConn.abort();
      },[url])

      return({data , isPending , error});
}
 
export default useFetch;