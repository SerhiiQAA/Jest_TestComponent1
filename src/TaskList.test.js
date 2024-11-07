import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskList from './TaskList';

describe('TaskList', () => {
  it('renders a list of tasks', () => {
    const tasks = ['Task 1', 'Task 2', 'Task 3'];
    render(<TaskList tasks={tasks} />);
    
    tasks.forEach(task => {
      expect(screen.getByText(task)).toBeInTheDocument();
    });
  });

  it('renders an empty list when no tasks are provided', () => {
    render(<TaskList tasks={[]} />);
    
    expect(screen.queryByRole('listitem')).toBeNull();
  });
});
