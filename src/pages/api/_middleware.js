// An API root level middleware

import { NextResponse } from "next/server"


const middleware = (req, res) => {
    console.log('/api root middleware invoked');
    return NextResponse.next();
};

export default middleware;