import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PropertyCardMarkerIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      stroke="#6B6B6B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.911}
      d="M4.438 10.578c1.964-2.021 3.93-3.83 3.93-6.063 0-2.232-1.76-4.041-3.93-4.041S.508 2.284.508 4.515c0 2.232 1.965 4.042 3.93 6.063Z"
    />
    <Path
      stroke="#6B6B6B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.911}
      d="M4.439 5.526a1.123 1.123 0 1 0 0-2.245 1.123 1.123 0 0 0 0 2.245Z"
    />
  </Svg>
)
export default PropertyCardMarkerIcon