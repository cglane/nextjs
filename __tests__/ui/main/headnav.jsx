
// import '@testing-library/jest-dom'
// import { render, screen } from '@testing-library/react'
// import HeadNav from '../../../app/ui/base/headnav'
// // Mocking the useContext hook to provide a fake context
// const mockUseContext = jest.fn();
// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useContext: () => mockUseContext(),
// }));

// // Mocking the Next.js Image component
// jest.mock('next/image', () => ({
//   __esModule: true,
//   default: () => <img />,
// }));

// // Mocking the Progress component
// jest.mock('@/app/ui/base/progress_bar', () => () => <div>Progress</div>);

// describe('HeadNav Component', () => {
//   beforeEach(() => {
//     // Set up fake context values
//     mockUseContext.mockReturnValue({
//       language: 'English',
//       setLanguage: jest.fn(),
//     });
//   });

//   it('renders correctly', () => {
//     render(<HeadNav session={{ user: { firm: { name: 'Case Law Firm' } } }} />);
    
//     // Check if the logo image is displayed
//     expect(screen.getByRole('img')).toBeInTheDocument();

//     // Check if the text "case status" is displayed
//     expect(screen.getByText('case status')).toBeInTheDocument();

//     // Check if the firm name is displayed
//     expect(screen.getByText('Case Law Firm')).toBeInTheDocument();

//     // Check if the Progress component is rendered
//     expect(screen.getByText('Progress')).toBeInTheDocument();
//   });

//   // Add more tests as necessary to cover interactions and other state changes
// });