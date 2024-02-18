"use client";

import { createTodo } from '@/app/demo-todolist/actions';
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();
  return (
    <button type="submit" aria-disabled={pending}>
      {pending ? 'loading...' : 'ADD'}
    </button>
  );
}

export function AddForm() {
  const [state, formAction] = useFormState(createTodo, initialState);

  return (
    <form action={formAction}>

      <input type="text" name="title" required defaultValue="" className="text-black"/>

      <SubmitButton />

      <hr/>
      <p aria-live="polite" role="status">
        {state?.message}
      </p>
    </form>
  );
}
