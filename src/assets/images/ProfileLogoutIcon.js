import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ProfileLogoutIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#016D54"
      d="M10 19.764a1 1 0 0 1-1 1H5c-2.757 0-5-2.243-5-5v-10c0-2.757 2.243-5 5-5h4a1 1 0 1 1 0 2H5c-1.654 0-3 1.346-3 3v10c0 1.654 1.346 3 3 3h4a1 1 0 0 1 1 1Zm7.707-9.707-4-4a.999.999 0 1 0-1.414 1.414l2.293 2.293H7a1 1 0 1 0 0 2h7.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414l4-4a.999.999 0 0 0 0-1.414Z"
    />
  </Svg>
)
export default ProfileLogoutIcon