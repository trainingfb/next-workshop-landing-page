// app/demo-server-actions/_components/Todos.tsx
"use client";

import { getTodos } from '@/app/demo-server-actions/actions';
import { Todo } from '@/model/todo';
import { useState } from 'react';

export function SimpleTodosList() {
  const [todos, setTodos] = useState<Todo[]>([])

  return <div>
    <h1 className="widget-title">Simple List with form server actions</h1>

    <button
      className="simple-button bg-sky-700"
      onClick={async () => {
      const res = await getTodos()
      setTodos(res)
    }}>Load Todos</button>

    <pre>{JSON.stringify(todos, null, 2)}</pre>
  </div>
}
