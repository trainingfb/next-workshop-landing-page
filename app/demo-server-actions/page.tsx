// app/demo-server-actions/page.tsx

import { AddForm } from '@/app/demo-server-actions/_components/AddForm';
import { DeleteForm } from '@/app/demo-server-actions/_components/DeleteForm';
import { SimpleTodosList } from '@/app/demo-server-actions/_components/SimpleTodosList';
import { getTodos } from '@/app/demo-server-actions/actions';

export default async function Home() {
  let todos = await getTodos()

  return (
    <main>
      <SimpleTodosList />

      <hr className="my-8"/>

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


    </main>
  );
}
