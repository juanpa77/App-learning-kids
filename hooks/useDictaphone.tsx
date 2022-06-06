import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
type dictaphone = {
  transcript: string
  listening: boolean
  startListen: () => void
  stopListen: () => void
  resetTranscript: () => void
}

const useDictaphone = (): dictaphone => {
  const {
    transcript,
    listening,
    resetTranscript
  } = useSpeechRecognition()

  const startListen = () => SpeechRecognition.startListening({ continue: true, languague: 'es-UY' })
  const stopListen = () => SpeechRecognition.stopListening()

  return { transcript, listening, startListen, stopListen, resetTranscript }
}
export default useDictaphone
