"use client";


import { getTodos } from '@/app/demo-todolist/actions';
import { useState } from 'react';

export function Users() {

  const [users, setUsers] = useState<any[]>([])

  return <div>
    users

    <button onClick={async () => {
      const res = await getTodos()
      setUsers(res)
    }}>Get Data</button>

    <hr/>
    <pre>{JSON.stringify(users, null, 2)}</pre>
  </div>
}
