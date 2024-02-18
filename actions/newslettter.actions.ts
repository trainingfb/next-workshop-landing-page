// /actions/newslettter.actions.ts

"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod"; //  npm i zod


export async function send(
  prevState: {
    message: string; // return object
    status: number
  },
  formData: FormData,
) {
  const email = formData.get("email");

  const response = await fetch('https://json-server-vercel-for-tutorials.vercel.app/send', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({ email: email }),
  });

  // revalidatePath("/");
  return { message: `Email sent to ${email}`, status: 200 }

}

/**
 * Error handling
 * @param prevState
 * @param formData
 */
export async function send2(
  // return object
  prevState: {
    message: string;
    status: number
  },
  formData: FormData,
) {
  const schema = z.object({
    email: z.string().min(2),
  });
  const parse = schema.safeParse({
    email: formData.get("email"),
  });


  if (!parse.success) {
    return { message: "Failed to create the payload", status: 404 };
  }

  const data = parse.data;

  try {
    const response = await fetch('https://json-server-vercel-for-tutorials.vercel.app/send', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as needed, like authorization tokens
      },
      // body: JSON.stringify({ email: data.email }),
    });

    if (!response.ok) {
      return { message: "Failed to send email #1", status: 404  };
    }

    revalidatePath("/");
    return { message: `Email sent to ${data.email}`, status: 200 }

  } catch(error) {
    return { message: "Failed to sent email #2", status: 404  };
  }


}
