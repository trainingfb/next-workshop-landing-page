// /components/widgets/newsletter.tsx
"use client";
import { send, send2 } from '@/actions/newslettter.actions';
import { useFormStatus, useFormState} from "react-dom";

const initialState = {
  message: "",
  status: 0
};

// NEW
function SubmitButton() {
  const { pending, data, method, /*action*/ } = useFormStatus();
  console.log(data?.get("email"))
  console.log(method)
  return (
    <button type="submit" aria-disabled={pending}>
      {pending ? 'loading...' : 'ADD'}
    </button>
  );
}

export default function Newsletter() {
  const [state, formAction] = useFormState(send, initialState);

  return (
    <form action={formAction}  className="flex flex-col items-center w-full">
        <h1 className="widget-title">Subscribe the Newsletter</h1>

        <div className="mb-6">
          <label
            htmlFor="emailInput"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            { state.message || ' Your e-mail address'}
          </label>

          {/*NEW*/}
          <input
            type="text" id="emailInput"
            name="email" required defaultValue=""
            disabled={!!state.message && state.status === 200}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          {/*NEW*/}
          <SubmitButton />
        </div>
    </form>
  )
}
