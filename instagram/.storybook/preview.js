import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { StoryRouter } from 'storybook-react-router';

initialize();

const queryClient = new QueryClient();
export const decorators = [
  mswDecorator,
  (Story, { parameters }) => {
    useEffect(
      () => () => {
        queryClient.clear();
      },
      []
    );
    return (
      <div id="application">
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      </div>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
  backgrounds: {
    default: 'white',
    values: [{ name: 'white', value: '#fff' }],
  },
  layout: 'fullscreen',
};
