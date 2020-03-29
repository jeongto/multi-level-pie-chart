import React from "react"
import { Button } from "react-bootstrap"

function Home() {
  return (
    <>
      <p>home</p>
      <Button variant="link" href="/example/count">
        Go to rematch example
      </Button>
      <Button variant="link" href="/example/api">
        Go to api example
      </Button>
    </>
  )
}
export default Home
