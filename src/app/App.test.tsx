import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Initialization', () => {
  test('it renders without crashing', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
  test('it renders Ant Design component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('button', { name: /ant design works/i })
    ).toBeInTheDocument();
  });
  test('renders route content when navigating to root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/home route/i)).toBeInTheDocument();
  });
});
