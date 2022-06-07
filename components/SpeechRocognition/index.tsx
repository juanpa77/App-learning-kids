
type props = {
  transcript: string
  listening: boolean
  startListening: () => void
  stoptListening: () => void
  resetTranscript: () => void
}

const Dictaphone = ({ listening, resetTranscript, transcript, startListening, stoptListening }: props) => {
  return (
    <div style={{ gridArea: 'SP' }}>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={startListening}>Start</button>
      <button onClick={stoptListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  )
}

export default Dictaphone
