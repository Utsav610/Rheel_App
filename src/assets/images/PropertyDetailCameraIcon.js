import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PropertyDetailCameraIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.595 9.778a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.845 10.378v-5.7c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656c.32-.163.74-.163 1.58-.163h.792c.092 0 .138 0 .18-.005a.75.75 0 0 0 .543-.336c.024-.035.044-.077.086-.16.082-.164.123-.247.17-.318A1.5 1.5 0 0 1 6.101.788c.085-.01.177-.01.362-.01h2.264c.184 0 .276 0 .361.01a1.5 1.5 0 0 1 1.086.67c.047.072.088.155.17.32.042.082.063.124.086.16a.75.75 0 0 0 .543.335c.042.005.088.005.18.005h.792c.84 0 1.26 0 1.58.163a1.5 1.5 0 0 1 .656.656c.164.32.164.74.164 1.58v5.7c0 .84 0 1.26-.164 1.582a1.5 1.5 0 0 1-.655.655c-.321.164-.741.164-1.581.164h-8.7c-.84 0-1.26 0-1.581-.164a1.5 1.5 0 0 1-.656-.655c-.163-.321-.163-.741-.163-1.581Z"
    />
  </Svg>
)
export default PropertyDetailCameraIcon