import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import '../css/Timer.css';

function CountDown({ start, setCountDown,showNext }) {

  const [delay, giveDelay] = useState(false);
  let [key, setKey] = useState(0);
  const [stopTimer, setStopTimer] = useState(true);
  const [time, setTime] = useState('');

  useEffect(() => {
    if (time === 0) {
      start()
      setCountDown(false)
      showNext()
    }

  }, [time])

  useEffect(() => {
    setTimeout(() => {
      giveDelay(true);
    }, 3000);
  }, []);


  function renderTime({ remainingTime }) {


    if (remainingTime === 0) {
      setTime(0)
      return <div className="timer-response">답변해 주시기 바랍니다</div>;
    }

    return (
      <div className="timer">
        <div className="text"> 답변 준비 시간
        </div>
        <div className="value">{remainingTime}초</div>
        <div className="text">남았습니다</div>
      </div>
    );

}
if (delay === true){
  return (

    <div className="timer-container">
      <div className="timer-header">
      </div>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={key}
          isPlaying={stopTimer}
          size={300}
          duration={30}
          colors={['#B0AAE3', '#1187CF', '#B0AAE3', '#F5320B']}
          colorsTime={[30, 20, 10, 0]}
          onComplete={() => {
            return { shouldRepeat: false } 
          }}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>

    </div>
  );
}


return (

  <div className="timer-container">
    <div className="timer-header">
    </div>
    <div className="timer-wrapper">
      <CountdownCircleTimer
        key={key}
        isPlaying={false}
        size={300}
        duration={30}
        colors={['#B0AAE3', '#1187CF', '#B0AAE3', '#F5320B']}
        colorsTime={[30, 20, 10, 0]}
        onComplete={() => {
          return { shouldRepeat: false } 
        }}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>

  </div>
);



}
export default CountDown



