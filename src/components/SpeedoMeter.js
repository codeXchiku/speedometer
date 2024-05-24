import Speedometer, {
    Background,
    Arc,
    Needle,
    Progress,
    Marks,
    Indicator,
  } from 'react-speedometer';

const SpeedoMeter = () => {
  return (
    <Speedometer
    value={120}
    fontFamily='squada-one'
>
    <Background />
    <Arc/>
    <Needle/>
    <Progress/>
    <Marks/>
    <Indicator/>
</Speedometer>
  )
}

export default SpeedoMeter