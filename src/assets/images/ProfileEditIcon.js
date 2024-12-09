import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ProfileEditIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={9}
    fill="none"
    {...props}
  >
    <Path
      fill="#303030"
      d="m4.951 2.247 2.435 2.435-3.34 3.343a1.066 1.066 0 0 1-.57.296l-2.004.334c-.025.004-.046.004-.072.004a.434.434 0 0 1-.423-.499l.335-2.003c.038-.216.14-.414.295-.57l3.344-3.34Zm3.546-1.112A1.694 1.694 0 0 0 7.28.628c-.46 0-.892.178-1.217.507l-.512.512 2.435 2.435.511-.512c.33-.325.508-.756.508-1.217 0-.46-.178-.892-.508-1.218Z"
    />
  </Svg>
)
export default ProfileEditIcon