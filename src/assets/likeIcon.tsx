interface LikeIconProps {
  liked: boolean
}

const LikeIcon = ({ liked }: LikeIconProps) => {
  return <svg width='21' height='21' viewBox='0 0 21 21' fill={liked ? '#323232' : 'none'} xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M3.77782 11.5263L9.08532 18.2823C9.8371 19.2392 11.1629 19.2392 11.9147 18.2823L17.2222 11.5263C18.8022 9.515 19.623 6.98572 18.4359 4.57383C17.0644 1.78717 14.5512 1.21762 12.3673 3.08897C11.6163 3.73237 11 4.46711 10.699 4.84831C10.5945 4.98077 10.4056 4.98077 10.301 4.84831C10 4.46711 9.38367 3.73237 8.63274 3.08897C6.44884 1.21762 3.93559 1.78717 2.5641 4.57383C1.37704 6.98572 2.19783 9.515 3.77782 11.5263Z'
      stroke='#323232' strokeWidth='2.67' strokeLinejoin='round' />
  </svg>
}

export default LikeIcon