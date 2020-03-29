import React from "react"
import { Button } from "react-bootstrap"

function Counter({
  count = 0,
  increment = () => {},
  incrementAsync = () => {}
}) {
  return (
    <div>
      <h1>count: {count}</h1>
      <Button onClick={() => increment(1)}> Add 1 </Button>{" "}
      <Button onClick={() => incrementAsync(1)}> Add 1 Async </Button>
    </div>
  )
}
export default Counter
