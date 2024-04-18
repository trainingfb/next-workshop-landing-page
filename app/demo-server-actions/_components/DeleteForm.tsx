// app/demo-server-actions/_components/DeleteForm.tsx

"use client";

import { deleteTodo } from '@/app/demo-server-actions/actions';
import { Todo } from '@/model/todo';
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: "",
};

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button className="simple-button bg-red-800" type="submit" aria-disabled={pending}>
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
