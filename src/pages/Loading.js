import { useRef } from "react";

const LoadingPage = () => {
  return (
    <div>
      <h1 style={{color: '#c8c8c8', marginInline: '0.5rem'}}>Loading
        <span id='dot1'>.</span>
        <span id='dot2'>.</span>
        <span id='dot3'>.</span>
      </h1>
    </div>
  )
}

export default LoadingPage;