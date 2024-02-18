"use client";

import { deleteTodo } from '@/app/demo-todolist/actions';
import { Todo } from '@/app/demo-todolist/page';
import { text } from 'node:stream/consumers';
import { id } from 'postcss-selector-parser';
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: "",
};

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      {pending ? 'loading...' : 'Delete' }
    </button>
  );
}

export function DeleteForm({ todo }: { todo: Todo }) {
  const [state, formAction] = useFormState(deleteTodo, initialState);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={todo.id} />
      <input type="hidden" name="text" value={todo.title || ''} />

      <DeleteButton />

      <p aria-live="polite" role="status">
        {state?.message}
      </p>
    </form>
  );
}
