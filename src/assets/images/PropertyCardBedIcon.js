import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PropertyCardBedIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      stroke="#6B6B6B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.911}
      d="M13.42 5.323V9.343H1.36v-4.02h4.02"
    />
    <Path
      stroke="#6B6B6B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.911}
      d="M1.36 1.302v9.38m12.06-2.01v2.01m-.67-6.7h-6.7a.67.67 0 0 0-.67.67v2.01h8.04v-2.01a.67.67 0 0 0-.67-.67Z"
    />
  </Svg>
)
export default PropertyCardBedIcon
