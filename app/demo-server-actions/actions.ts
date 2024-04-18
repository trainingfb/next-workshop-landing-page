// app/demo-server-actions/actions.ts

"use server";
import { Todo } from '@/model/todo';
import { revalidatePath } from "next/cache";
import { z } from "zod";

// const API = 'https://jsonplaceholder.typicode.com/todos?userId=1';
const API = 'https://json-server-vercel-for-tutorials.vercel.app/todos';


export async function getTodos(): Promise<Todo[]> {

  const res = await fetch(
    `${API}`,
    {
      //  cache: 'no-store',
      // next: { revalidate: 5 }
    }
  );
  return res.json();
}



export async function createTodo(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const schema = z.object({
    title: z.string().min(2),
  });
  const parse = schema.safeParse({
    title: formData.get("title"),
  });


  if (!parse.success) {
    return { message: "Input is not valid!" };
  }

  const data = parse.data;

  console.log(data.title)
  try {
    const response = await fetch(`${API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // cache: 'no-store',
      body: JSON.stringify({ title: data.title }),
    });

    if (!response.ok) {
      return { message: "Failed to create todo #1", status: 404  };
    }

    revalidatePath("/");
    return { message: `Added todo ${data.title}`, status: 'ok' }

  } catch(error) {
    return { message: "Failed to create todo #2", status: 404  };
  }

}

export async function deleteTodo(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const schema = z.object({
    id: z.string().min(1),
    //todo: z.string().min(1),
  });
  const data = schema.parse({
    id: formData.get("id"),
    //todo: formData.get("todo"),
  });

  try {
    const response = await fetch(`${API}/${data.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return { message: "Failed to create todo #1", status: 404  };
    }

    revalidatePath("/");
    return { message: `Deleted todo ${data.id}`, status: 'ok'  }

  } catch(error) {
    return { message: "Failed to delete todo", status: 404  };
  }
}


