import * as React from "react"
import Svg, { Path } from "react-native-svg"
const OwnerProfileStarIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      fill="#016D54"
      d="M7.525.938c.2-.617 1.073-.617 1.273 0l1.317 4.054a.67.67 0 0 0 .637.462h4.262c.648 0 .918.83.394 1.211L11.959 9.17a.67.67 0 0 0-.243.749l1.317 4.053c.2.617-.505 1.13-1.03.749l-3.448-2.505a.67.67 0 0 0-.787 0L4.32 14.72c-.525.381-1.23-.132-1.03-.749L4.607 9.92a.67.67 0 0 0-.243-.749L.915 6.665c-.524-.381-.255-1.21.394-1.21H5.57a.67.67 0 0 0 .637-.463L7.525.938Z"
    />
  </Svg>
)
export default OwnerProfileStarIcon
