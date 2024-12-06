import * as React from "react"
import Svg, { Path } from "react-native-svg"
const RightArrowIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M.901 1.805c.005.005.015.01.02.015l7.767 5.71-7.767 5.716a.485.485 0 1 0 .576.782l8.305-6.106a.49.49 0 0 0 0-.787L1.497 1.033a.485.485 0 0 0-.684.088.485.485 0 0 0 .088.684Z"
    />
  </Svg>
)
export default RightArrowIcon
