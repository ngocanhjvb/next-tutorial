import React from 'react';
import PropTypes from 'prop-types';
import {useRouter} from "next/router";
import Link from "next/link";
import Something from '../../../../assets/something.jpg'
import Image from 'next/image'

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


            <Image src={Something} alt="Picture of the author" />
            <Link href="/login">Login by Link component</Link>

        </div>
    );
};

Setting.propTypes = {};

export default Setting;
