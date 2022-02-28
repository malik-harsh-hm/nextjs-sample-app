import {Fragment} from "react";

export default function ApiExamplePage() {
  return (
    <Fragment>
      <h1>API Examples</h1>
      <p>The example below shows response from some API endpoints</p>
      <h2>1. Auth Check API</h2>
      <p>/api/hello/hello</p>
      <iframe src="/api/hello/hello" />
      <h2>2. Response from an API Route Handler Function</h2>
      <p>/api/cms/no-edge/title?&postId=1</p>
      <iframe src="/api/cms/no-edge/title?&postId=1" />
      <h2>3. Response from a Middleware Edge Function</h2>
      <p>/api/cms/edge/title?&postId=1</p>
      <iframe src="/api/cms/edge/title?&postId=1" />
    </Fragment>
  )
}