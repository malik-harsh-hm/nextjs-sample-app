import { signIn } from "next-auth/react"

export default function AccessDenied() {
    return (
        <>
            <h1>You need to be logged in to view this page</h1>
            <p>
                <a onClick={() => signIn()}>Login to View this page</a>
            </p>
        </>
    )
}
