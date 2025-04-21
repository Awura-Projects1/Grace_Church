"use server";
import { useRouter } from "next/navigation";
import fetcher from "./fetcher";
import toast from "react-hot-toast";

export async function getManyAnnouncements() {
  try {
    const response = await fetcher.get(`/announcements`);
    return response.data;
  } catch (error) {
    return { error };
  }
}

export async function deleteAnnouncement(id: number) {
  try {
    const response = await fetcher.delete(`/announcements/${id}`);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error deleting announcement:",
      error.response?.data || error.message
    );
    throw error;
  }
}
