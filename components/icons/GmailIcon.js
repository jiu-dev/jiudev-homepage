const GmailIcon = props => {
  return (
    <svg
      className="w-10 h-10"
      fill="white"
      viewBox="0,0,256,256"
      width={20}
      height={20}
      {...props}
    >
      <g transform="scale(5.12,5.12)">
        <path d="M5.5,7c-2.48047,0 -4.5,2.01953 -4.5,4.5v0.42578l24,17.07422l24,-17.07422v-0.42578c0,-2.48047 -2.01953,-4.5 -4.5,-4.5zM6.35156,9h37.29297l-18.64453,13zM1,14.02734v24.47266c0,2.48047 2.01953,4.5 4.5,4.5h39c2.48047,0 4.5,-2.01953 4.5,-4.5v-24.47266l-6,4.26953v22.70313h-36v-22.70312z"></path>
      </g>
    </svg>
  )
}

export default GmailIcon
