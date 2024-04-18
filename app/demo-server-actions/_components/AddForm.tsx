"use client";

import { createTodo } from '@/app/demo-server-actions/actions';
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();
  return (
    <button type="submit" className="simple-button bg-sky-700" aria-disabled={pending}>
      {pending ? 'loading...' : 'ADD'}
    </button>
  );
}

export function AddForm() {
  const [state, formAction] = useFormState(createTodo, initialState);

  return (
    <form action={formAction}>

      <div className="flex gap-3">
        <input type="text" name="title" required defaultValue="" className="text-black"/>
        <SubmitButton />
      </div>

      <p aria-live="polite" role="status">
        {state?.message}
      </p>
    </form>
  );
}
