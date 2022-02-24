
import React, { Fragment } from 'react';
import { useRouter } from "next/router";


export default function ClientSidePage({ data }) {
    const router = useRouter();

    return (<Fragment>
        <h1>Client Side Page</h1>
        <p>{`client side content in ${router.locale}`}</p>
    </Fragment>);
}
