import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import Head from "next/head";

const User = () => {
    const router = useRouter();
    const { user_name } = router.query

    return (
        <>
            <Head>
                <title>My title</title>
            </Head>
            User Admin is: {user_name}
        </>
    );
};

User.propTypes = {

};

export default User;
