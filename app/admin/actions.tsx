'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function refreshCache(formData: FormData) {
    if (formData.get('secret') !== process.env.ADMIN_SECRET) {
        return
    }

    revalidatePath('/agenda');
    revalidatePath('/low-techs');
    revalidatePath('/low-techs/[slug]/page');
    redirect('/')
}   