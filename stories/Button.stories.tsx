import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../'

export default {
  component: Button,
  title: 'Button',
};

export const default_ = () => <Button onClick={action('clicked')}>Hello</Button>;
export const primary = () => <Button onClick={action('clicked')} buttonType="primary">Hello</Button>;