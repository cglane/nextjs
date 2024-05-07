import React from 'react';
import { render } from '@testing-library/react';
import Page from './page';
import LeftColumn from './ui/base/left_column';
import RightColumn from './ui/base/right_column';
import HeadNav from './ui/base/headnav';
import { getSession } from '@/auth';

const dir = process.cwd();
console.log(dir, 'directory');
jest.mock('./ui/base/left_column');
jest.mock('./ui/base/right_column');
jest.mock('./ui/base/headnav');
jest.mock('./auth', () => ({
  getSession: jest.fn(),
}));

describe('Page component', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    LeftColumn.mockClear();
    RightColumn.mockClear();
    HeadNav.mockClear();
    getSession.mockClear();
  });

  it('renders correctly', () => {
    getSession.mockImplementation(() => ({ user: 'testUser' }));
    const { asFragment } = render(<Page />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('contains HeadNav with session data', () => {
    const sessionData = { user: 'testUser' };
    getSession.mockImplementation(() => sessionData);
    const { getByTestId } = render(<Page />);
    expect(HeadNav).toHaveBeenCalledWith({ session: sessionData }, {});
  });

  it('includes both LeftColumn and RightColumn components', () => {
    const { getByTestId } = render(<Page />);
    expect(LeftColumn).toHaveBeenCalled();
    expect(RightColumn).toHaveBeenCalled();
  });
});
