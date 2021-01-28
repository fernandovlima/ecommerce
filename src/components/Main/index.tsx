import React from 'react'

import * as S from './styles'

const Main: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="imagem átomo e react avançado" />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        Typescript, ReactJS, NextJs e Styled Components
      </S.Description>
      <S.Ilustration
        src="/img/hero-illustration.svg"
        alt="desenvolvedor em frente ao computador"
      />
    </S.Wrapper>
  )
}

export default Main
//
