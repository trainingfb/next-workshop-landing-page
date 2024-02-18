// app/error.tsx

'use client'

import Link from 'next/link';

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <Link href="/about">Go to About</Link> -
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

