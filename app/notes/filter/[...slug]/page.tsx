import { fetchNotes } from "@/lib/api/notes";
import NoteList from "@/components/NoteList/NoteList";
import type { NoteTag } from "@/types/note";

interface NotesFilterPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function NotesFilterPage({
  params,
}: NotesFilterPageProps) {
  const { slug } = await params;
  const currentTag = slug[0];

  const tag = currentTag === "all" ? undefined : (currentTag as NoteTag);

  const data = await fetchNotes(1, "", tag);

  return <NoteList notes={data.notes} />;
}
