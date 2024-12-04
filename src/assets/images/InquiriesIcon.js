import * as React from "react"
import Svg, { Path } from "react-native-svg"
const InquiriesIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeWidth={1.368}
      d="M6.357 2.15c0-.813.66-1.473 1.473-1.473h4.912c.814 0 1.473.66 1.473 1.474v.982c0 .814-.66 1.473-1.473 1.473H7.83c-.813 0-1.473-.66-1.473-1.473v-.982Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.368}
      d="M19.127 14.43c0 2.778 0 4.167-.863 5.03-.863.863-2.252.863-5.03.863H7.34c-2.779 0-4.168 0-5.031-.863-.863-.863-.863-2.252-.863-5.03v-2.947m12.77-8.84c2.136.012 3.293.107 4.048.862.863.863.863 2.252.863 5.03V10.5M6.357 2.644c-2.136.011-3.293.106-4.048.861-.755.755-.85 1.912-.861 4.048"
    />
  </Svg>
)
export default InquiriesIcon
