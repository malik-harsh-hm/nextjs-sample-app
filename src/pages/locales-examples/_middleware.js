import { NextResponse } from "next/server"


const middleware = (req, res) => {
    console.log('/pages/locales-examples middleware invoked');
    return NextResponse.next();
};

export default middleware;