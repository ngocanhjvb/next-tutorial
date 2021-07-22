import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import Layout from "../../components/Layout";

const Posts = props => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPosts(json));
    });


    return (
        <Layout>
            {
                posts.map(post =>(
                    <div key={post.id}>{post.title}</div>
                ))
            }
        </Layout>
    );
};

Posts.propTypes = {

};

export default Posts;
