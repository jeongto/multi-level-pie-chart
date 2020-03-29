import Home from "./components/Home"
import Counter from "./counter"
import ApiExample from "./apiExample"

const routes = [
  { exact: true, path: "/", component: Home },
  { exact: true, path: "/example/count", component: Counter },
  { exact: true, path: "/example/api", component: ApiExample }
]

export default routes
