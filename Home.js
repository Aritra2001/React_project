import { Button } from "bootstrap";
import { useState , useEffect
 } from "react";
import BlogList from "./bloglist";
const Home = () => {
    const [blogs, setblogs] = useState(null);
    const [ispending, setIspending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() =>{
        fetch("http://localhost:8000/blogs")
        .then(res =>{
         
         if(!res.ok){
            throw Error("could not fetch the data for that resource");

         }
           return res.json()
        })
       .then(data => {
        setblogs(data);
        setIspending(false);
        setError(null);
       })
       .catch(err =>{
         setIspending(false);
         setError(err.message);
       })
    }, []);
    return ( 
        <div className="home">
         { error && <div>{error}</div>}
            {ispending && <div>Loading...</div>}
           { blogs && <BlogList blogs = {blogs} title = "All Blogs"/> }
            
        </div>
     );
}
 
export default Home;