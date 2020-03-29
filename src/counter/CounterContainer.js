import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Counter from "./Counter"

function CounterContainer() {
  const { count } = useSelector(state => state)
  const { increment, incrementAsync } = useDispatch().count

  return (
    <Counter
      count={count}
      increment={increment}
      incrementAsync={incrementAsync}
    />
  )
}

export default CounterContainer
