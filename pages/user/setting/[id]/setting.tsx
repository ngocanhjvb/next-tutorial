import React from 'react';
import PropTypes from 'prop-types';
import {useRouter} from "next/router";
import Link from "next/link";
import Image from '../../../../assets/something.jpg'

const Setting = () => {

    const router = useRouter();

    const handleClick = () => {
        router.push('/login')
    }

    const {id} = router.query;

    return (
        <div>
            ID is: {id}
            <button onClick={handleClick}>Login</button>
            <br/>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/something.jpg"/>


            <img src={Image}/>
            <Link href="/login">Login by Link component</Link>

        </div>
    );
};

Setting.propTypes = {};

export default Setting;
