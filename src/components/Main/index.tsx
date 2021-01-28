import React from 'react'

import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJs e Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="imagem átomo e react avançado" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Ilustration
        src="/img/hero-illustration.svg"
        alt="desenvolvedor em frente ao computador"
      />
    </S.Wrapper>
  )
}

export default Main
//
