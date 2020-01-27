import React from 'react';

export default {
  title: 'Welcome',
};

export const toStorybook = () => <div>Welcome to the component library</div>;

toStorybook.story = {
  name: 'to Storybook',
};
