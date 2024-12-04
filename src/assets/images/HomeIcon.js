import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HomeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeWidth={1.368}
      d="M1.545 12.054c0-2.344 0-3.516.532-4.488.532-.971 1.503-1.575 3.447-2.78l2.048-1.272c2.055-1.275 3.082-1.912 4.217-1.912 1.134 0 2.162.637 4.216 1.912l2.049 1.271c1.943 1.206 2.915 1.81 3.446 2.781.532.972.532 2.144.532 4.488v1.558c0 3.996 0 5.994-1.2 7.235-1.2 1.242-3.132 1.242-6.995 1.242H9.74c-3.863 0-5.795 0-6.995-1.242-1.2-1.24-1.2-3.239-1.2-7.235v-1.558Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.368}
      d="M14.861 17.992H8.715"
    />
  </Svg>
)
export default HomeIcon