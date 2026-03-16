import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import { fetchNoteById } from "@/lib/api/notes";

interface NotePreviewModalPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NotePreviewModalPage({
  params,
}: NotePreviewModalPageProps) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <Modal>
      <NotePreview note={note} />
    </Modal>
  );
}
