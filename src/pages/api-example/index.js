import {Fragment} from "react";

export default function ApiExamplePage() {
  return (
    <Fragment>
      <h1>API Example</h1>
      <p>The example below shows response from a protected API endpoint</p>
      <p>
        <em>You must be signed in to see response.</em>
      </p>
      <h2>API Details -</h2>
      <p>/api/hello</p>
      <iframe src="/api/hello" />
    </Fragment>
  )
}