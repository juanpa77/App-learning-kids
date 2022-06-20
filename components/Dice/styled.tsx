import styled from '@emotion/styled'

export const Container = styled('div')`
  perspective: 800px;
  width: 100px;
  height: 100px;
`

export const Cube = styled('div')`
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
`
export const Side = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: red;
  font-size: 40px;
  text-align: center;
  border-radius: 20px;
  /* opacity: 0.6; */
`
export const Front = styled(Side)`
  transform: rotateY(0deg) translateZ(50px);
  background-color: #ee4444;
`
export const Right = styled(Side)`
  transform: rotateY(90deg) translateZ(50px);
  background-color: #f9f1d0;
`
export const Back = styled(Side)`
  transform: rotateY(180deg) translateZ(50px);
  background-color: #b2bb0a;
`
export const Left = styled(Side)`
  transform: rotateY(-90deg) translateZ(50px);
  background-color: #8855ff; 
`
export const Top = styled(Side)`
  transform: rotateX(90deg) translateZ(50px);
  background-color: #0099ff;
`
export const Buttom = styled(Side)`
  transform: rotateX(-90deg) translateZ(50px);
  background-color: #22cc88;
`
