
import AppLayout from '../../components/AppLayout'
import Button from '../../components/Button/styled'
import Card from '../../components/Card/styled'
import useSyllables from '../../hooks/useSyllables'

// type Props = {}

export default function LearnToRead () {
  const { syllables, index, handell } = useSyllables()
  console.log(syllables)
  return (
    <AppLayout>
      <Card color='#FF2D55'>
        <h1>{syllables[index]}</h1>
        <Button onClick={handell}>p</Button>
      </Card>
    </AppLayout>
  )
}
