import React from 'react';
import PropTypes from 'prop-types';
import Layout from "../../components/Layout";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import {getPosts} from "../../services/posts";

const Posts = ({posts}) => {

    return (
        <Layout>
            {posts.map(post => (
                <Card key={post.id} className='my-3 shadow'>
                    <Card.Body>
                        <Card.Title>
                            {post.id} -- {post.title}
                        </Card.Title>
                        <Card.Text>{post.body}</Card.Text>
                        <Link href={`/posts/${post.id}`} passHref>
                            <Card.Link>See more</Card.Link>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </Layout>
    );
};


export async function getStaticProps() {
    try {
        const posts = await getPosts(10);

        return {
            props: {
                posts
            }
        }
    } catch (e) {
        console.log(e)
    }
}


Posts.propTypes = {};

export default Posts;