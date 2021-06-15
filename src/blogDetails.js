import { useParams } from "react-router";
import useFetch from "./useFetch";
import {useHistory} from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams()
    const {data , isPending , error} = useFetch('http://localhost:9090/blogs/'+id);
    const history = useHistory();
    
const handleClick = () => {
    fetch('http://localhost:9090/blogs/'+data.id, {
        method: 'DELETE'
        }).then(() =>{
            history.push('/');
        })
}
    return ( 
    <div className="blog-details">
        {isPending && <div>Loading...</div>}
        {error && <div>{ error }</div>}
        {data && (
            <article>
                <h2>{data.title}</h2>
                <p>Written By {data.author}</p>
                <div>{data.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        )}
    </div>
     );
}
 
export default BlogDetails;