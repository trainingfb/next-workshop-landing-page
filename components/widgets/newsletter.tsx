// /components/widgets/newsletter.tsx

export default function Newsletter() {

  return (
    <form className="flex flex-col items-center w-full">
        <h1 className="widget-title">Subscribe the Newsletter</h1>

        <div className="mb-6">
          <label
            htmlFor="emailInput"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your e-mail address
          </label>

          <input
            type="text" id="emailInput"
            name="email" required defaultValue=""
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <button type="submit">
            ADD
          </button>
        </div>
    </form>
  )
}
