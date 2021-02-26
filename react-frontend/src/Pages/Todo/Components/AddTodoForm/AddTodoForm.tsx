/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import React, { useContext } from 'react';
import {
  Fieldset,
  FieldLabel,
  FieldInput,
  FieldError,
  PrimaryButton,
  SubmissionSuccess,
} from 'Shared/Styles';
import { StoreContext } from 'Stores/Provider';

type FormData = {
  title: string;
  description: string;
  dateDeadline?: Date;
};

export const AddTodoForm: React.FC = () => {
  const { todoListStore } = useContext(StoreContext);

  const {
    register,
    errors,
    handleSubmit,
    formState,
    reset,
  } = useForm<FormData>({
    mode: 'onBlur',
  });

  const [successfullySubmitted, setSuccessfullySubmitted] = React.useState(
    false,
  );

  const submitForm = async (data: FormData) => {
    setSuccessfullySubmitted(false);
    const createdTodo = todoListStore.postTodo({ ...data });
    if (createdTodo) {
      setSuccessfullySubmitted(true);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Fieldset disabled={formState.isSubmitting}>
        <div
          css={css`
            display: grid;
            grid-gap: 5px;
          `}
        >
          <div
            css={css`
              grid-column: 1 / 1;
            `}
          >
            <FieldLabel
              htmlFor="title"
              css={css`
                color: white;
              `}
            >
              Title
            </FieldLabel>
          </div>
          <div
            css={css`
              grid-column: 2 / 2;
            `}
          >
            <FieldLabel
              htmlFor="description"
              css={css`
                color: white;
              `}
            >
              Description
            </FieldLabel>
          </div>
          <div
            css={css`
              grid-column: 3 / 3;
            `}
          >
            <FieldLabel
              htmlFor="dateDeadline"
              css={css`
                color: white;
              `}
            >
              Deadline
            </FieldLabel>
          </div>
          <div
            css={css`
              grid-row: 2 / 2;
              grid-column: 1 / 1;
            `}
          >
            <FieldInput
              id="title"
              name="title"
              type="text"
              ref={register({
                required: true,
              })}
            />
          </div>
          <div
            css={css`
              grid-row: 2 / 2;
              grid-column: 2 / 2;
            `}
          >
            <FieldInput
              id="description"
              name="description"
              ref={register({
                required: true,
              })}
            />
          </div>
          <div
            css={css`
              grid-row: 2 / 2;
              grid-column: 3 / 3;
            `}
          >
            <FieldInput
              id="dateDeadline"
              name="dateDeadline"
              type="date"
              ref={register({
                validate: (value) => new Date(value) > new Date(),
              })}
            />
          </div>
          <div
            css={css`
              grid-row: 2 / 2;
              grid-column: 4 / 4;
            `}
          >
            <PrimaryButton type="submit">Add Todo</PrimaryButton>
          </div>
          <div
            css={css`
              grid-row: 3 / 3;
              grid-column: 1 / 1;
            `}
          >
            {errors.title && errors.title.type === 'required' && (
              <FieldError>*You must enter a title</FieldError>
            )}
          </div>
          <div
            css={css`
              grid-row: 3 / 3;
              grid-column: 2 / 2;
            `}
          >
            {errors.description && errors.description.type === 'required' && (
              <FieldError>*You must enter a description</FieldError>
            )}
          </div>
          <div
            css={css`
              grid-row: 3 / 3;
              grid-column: 3 / 3;
            `}
          >
            {errors.dateDeadline && errors.dateDeadline.type === 'validate' && (
              <FieldError>*The deadline must be after today</FieldError>
            )}
          </div>
          <div
            css={css`
              grid-row: 3 / 3;
              grid-column: 4 / 4;
            `}
          >
            {successfullySubmitted && (
              <SubmissionSuccess>Success!</SubmissionSuccess>
            )}
          </div>
        </div>
      </Fieldset>
    </form>
  );
};
