import {useState, useEffect} from 'react'

import {
  MainContainer,
  Title,
  BmiLevelsImage,
  CardContainer,
  MeasurementsContainer,
  MeasurementCard,
  Measurement,
  Unit,
  MeasurementValue,
  ButtonsContainer,
  Button,
  ResultContent,
  ResultText,
} from './styledComponents'

const getBmi = (height, weight) => {
  const heightInMeters = height / 100
  const bmi = weight / heightInMeters ** 2
  return bmi.toFixed(2)
}

const BmiCalculator = () => {
  const heightAccess = JSON.parse(localStorage.getItem('height'))
  const WeightAccess = JSON.parse(localStorage.getItem('weight'))

  const [height, setHeight] = useState(
    heightAccess !== null ? heightAccess : 170,
  )
  const [weight, setWeight] = useState(
    WeightAccess !== null ? WeightAccess : 60,
  )

  useEffect(() => {
    document.title = `Your BMI: ${getBmi(height, weight)}`
  }, [height, weight])

  //   useEffect(() => {
  //     localStorage.setItem('height', JSON.stringify(height))

  //     console.log('height')
  //   })
  // console.log any plus minus clicked height weight output

  //   useEffect(() => {
  //     localStorage.setItem('weight', JSON.stringify(weight))
  //     console.log('weight')
  //   })

  useEffect(() => {
    localStorage.setItem('height', JSON.stringify(height))
    console.log('height')
  }, [height])

  useEffect(() => {
    localStorage.setItem('weight', JSON.stringify(weight))
    console.log('weight')
  }, [weight])

  const onIncrementWeight = () => {
    setWeight(prevWeight => prevWeight + 1)
  }

  const onDecrementWeight = () => {
    setWeight(prevWeight => prevWeight - 1)
  }

  const onIncrementHeight = () => {
    setHeight(prevHeight => prevHeight + 1)
  }

  const onDecrementHeight = () => {
    setHeight(prevHeight => prevHeight - 1)
  }

  return (
    <MainContainer>
      <Title>BMI CALCULATOR</Title>
      <BmiLevelsImage
        src="https://assets.ccbp.in/frontend/hooks/bmi-levels-img.png"
        alt="bmi levels"
      />
      <CardContainer>
        <MeasurementsContainer>
          <MeasurementCard>
            <Measurement>Height</Measurement>
            <MeasurementValue>
              {height}
              <Unit>cms</Unit>
            </MeasurementValue>
            <ButtonsContainer>
              <Button onClick={onDecrementHeight}>-</Button>
              <Button onClick={onIncrementHeight}>+</Button>
            </ButtonsContainer>
          </MeasurementCard>
          <MeasurementCard>
            <Measurement>Weight</Measurement>
            <MeasurementValue>
              {weight}
              <Unit>kgs</Unit>
            </MeasurementValue>
            <ButtonsContainer>
              <Button onClick={onDecrementWeight}>-</Button>
              <Button onClick={onIncrementWeight}>+</Button>
            </ButtonsContainer>
          </MeasurementCard>
        </MeasurementsContainer>
        <ResultContent>
          BMI: <ResultText>{getBmi(height, weight)}</ResultText>
        </ResultContent>
      </CardContainer>
    </MainContainer>
  )
}

export default BmiCalculator
