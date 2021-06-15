import BlogList from './blog list';
import useFetch from './useFetch';

const Home = () => {
    const {data , isPending , error} = useFetch('http://localhost:9090/blogs');
    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>loading...</div>}
            {data &&  <BlogList blogs={data} title="All Blogs!" />}
        </div>
     )
}

export default Home;