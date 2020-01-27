/** @jsx jsx */ import { css, jsx } from '@emotion/core';
// ^-- Importing jsx and using pragma should not be needed. Trying to get around
// a bundler bug.
import { MouseEvent } from 'react';
import React from 'react';
//import styled from '@emotion/styled'

import { colors } from '../styleVariables';
export interface IButtonAppearance {
  color: string;
  backgroundColor: string;
}

export interface IButtonAppearanceSet {
  primary: IButtonAppearance;
  default: IButtonAppearance;
}

const buttonAppearances: IButtonAppearanceSet = {
  primary: {
    color: colors.white,
    backgroundColor: colors.primary,
  },
  default: {
    color: colors.darkGray,
    backgroundColor: colors.lightGray,
  },
};

export interface IButtonProps {
  children: React.ReactNode;
  onClick(e: MouseEvent<HTMLElement>): void;
  buttonType?: 'default' | 'primary';
}

/*
const StyledButton = styled.button<IButtonAppearance>`
  background-color: ${(props) => props.backgroundColor};
`
*/

const Button = ({ buttonType: type = 'default', ...props }: IButtonProps) => {
  const appearance = buttonAppearances[type];
  const style = css`
    background-color: ${appearance.backgroundColor};
    border-radius: 3px;
    color: ${appearance.color};
    cursor: pointer;
    display: inline-block;
    font-family: sans-serif;
    padding: 4px 10px;
  `;
  //return <button onClick={props.onClick} {...appearance}>{props.children}</StyledButton>

  return (
    <div onClick={props.onClick} css={style}>
      {props.children}
    </div>
  );
};

export default Button;
