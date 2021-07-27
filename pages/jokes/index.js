import React from 'react';
import PropTypes from 'prop-types';
import Layout from "../../components/Layout";
import {randomJoke} from "../../services/jokes";

const JokeRandom = ({joke}) => {

    return (
        <Layout>
            {joke.value}
        </Layout>
    );
};

// Du lieu phu thuoc vao moi request, nhung ma van tao ra HTML tinh cho front-end, nen van tot cho SEO

export async function getServerSideProps() {
    const joke = await randomJoke();

    // joke = false

    if (!joke)
        return {
            notFound: true // 404 page
        };

    // return {
    // 	redirect: {
    // 		destination: '/posts',
    // 		permanent: false
    // 	}
    // }

    return {
        props:{
            joke
        }
    }

}



export default JokeRandom;