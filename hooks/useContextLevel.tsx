
import { useContext } from 'react'
import { LevelContext } from '../context/LevelContext'

const useLevel = () => useContext(LevelContext)

export default useLevel
