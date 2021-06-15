import {useState} from 'react'
import {useHistory} from 'react-router-dom';

const Create = () => {
    const [title, settitle] = useState("");
    const [body, setbody] = useState("");
    const [author, setauthor] = useState("yoshi");
    const [isPending, setisPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e)=>{

        e.preventDefault();
        setisPending(true)
        const blog = {title , body , author};

        fetch('http://localhost:9090/blogs/', {
        method: 'POST',
        headers: {"Content-Type": "application/json"} ,
        body: JSON.stringify(blog)
        }).then(() =>{
            console.log("new blog added");
            setisPending(false);
        })

        history.push('/');
    }

    return ( 
    <div className="create">
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog Title:</label>
            <input 
            type="text"
            required
            value={title}
            onChange={(e)=>settitle(e.target.value)} 
            />
            <label>Blog body:</label>
            <textarea 
            required
            value={body}
            onChange={(e) => setbody(e.target.value)}
            ></textarea>
            <label>Blog Author:</label>
            <select
             value={author}
             onChange={(e) => setauthor(e.target.value)}
            >
                <option value="yoshi" key="yoshi">yoshi</option>
                <option value="mario" key="mario">mario</option>
                <option value="luigi" key="luigi">luigi</option>
            </select>
            {!isPending && <button>Add Blog</button>}
            {isPending && <button disabled>Adding Blog...</button>}
        </form>
        <p>{title}</p>
        <p>{author}</p>
        <p>{body}</p>
    </div>
     );
}
 
export default Create;