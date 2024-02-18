// app/demo-todolist/page.tsx

import { AddForm } from '@/app/demo-todolist/_components/AddForm';
import { DeleteForm } from '@/app/demo-todolist/_components/DeleteForm';
import { Users } from '@/app/demo-todolist/_components/Users';
import { getTodos } from '@/app/demo-todolist/actions';

export type Todo = {
  id: string;
  title: string;
}

export default async function Home() {
  let todos = await getTodos()

  return (
    <main>
      <h1 className="widget-title">TODO LIST with SERVER ACTIONS</h1>

      <AddForm />

      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id} className="flex gap-3 my-3 ">
             • {todo.title}
              <DeleteForm todo={todo} />
            </li>
          ))
        }
      </ul>

      <hr/>

      <Users />
    </main>
  );
}
