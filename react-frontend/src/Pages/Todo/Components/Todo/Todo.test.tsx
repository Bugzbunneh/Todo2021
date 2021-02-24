import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Todo } from './Todo';
import { ITodo } from 'Pages/Todo/Interfaces/ITodo';

afterEach(cleanup);

const mockCompleteTodoData: ITodo = {
  todoId: 1,
  title: 'Title1 test',
  description: 'Description1 test',
  userId: 'User1',
  dateDeadline: new Date(2019, 0, 1),
  dateCreated: new Date(2019, 0, 1),
  dateCompleted: new Date(2019, 0, 1),
};

const mockIncompleteTodoData: ITodo = {
  todoId: 1,
  title: 'Title1 test',
  description: 'Description1 test',
  userId: 'User1',
  dateDeadline: new Date(2019, 0, 1),
  dateCreated: new Date(2019, 0, 1),
  dateCompleted: null,
};

test('When Todo renders it should contain title, description and date created', () => {
  render(<Todo todo={mockCompleteTodoData} />);

  screen.getByText('Title1 test');
  screen.getByText('Description1 test');
  screen.getByText('Created at: 1/1/2019');
});

test('When Todo is not completed the delete and complete buttons should render', () => {
  render(<Todo todo={mockIncompleteTodoData} />);

  screen.getByRole('button', { name: /Complete/i });
  screen.getByRole('button', { name: /Delete/i });
});

test('When Todo is completed the complete button should be hidden', () => {
  render(<Todo todo={mockCompleteTodoData} />);

  expect(
    screen.queryByRole('button', { name: /Complete/i }),
  ).not.toBeInTheDocument();
});
