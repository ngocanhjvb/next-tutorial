import React from 'react';
import PropTypes from 'prop-types';
import Layout from "../../components/Layout";
import {getPostById, getPosts} from "../../services/posts";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Post = props => {

    const {post} = props;



    // Khi getStaticProps() chay xong lan dau tien.
    // Cac lan sau thi trang so 6 (vi du) se duoc dua vao danh sach prerendered
    return (
        <Layout>
            <Card className='my-3 shadow'>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                    <Link href='/posts'>
                        <Button variant='dark'>Back</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Layout>
    );
};
// Lay du lieu kieu tinh, nhung du lieu tinh nao thi con phu thuoc vao path params
export async function getStaticPaths() {
    const posts = await getPosts(5);
    const paths = posts.map(post => (
        {
            params:{
                id: `${post.id}`
            }
        }
    ));

    return {
        paths,
         fallback: false // bat ki path nao k returned boi getStaticPaths se toi trang 404
       // fallback: true // path nao k returned ngay lap tuc se show trang "tam thoi" => doi getStaticProps chay
        // => getStaticProps chay xong => return trang hoan chinh
    };
}


export async function getStaticProps({ params }) {

    const res = await getPostById(params.id);
    return { props: { post:res } }
}


Post.propTypes = {};

export default Post;