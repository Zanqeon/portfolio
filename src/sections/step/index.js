import React from 'react'
import Section from 'components/section'
import Step from 'components/step'

export default function StepSection ({
  description,
  stepNumber,
  title
}) {
  return (
    <Section>
    <Step
      description={description}
      stepNumber={stepNumber}
      title={title}
      />
    </Section>
  )
}
