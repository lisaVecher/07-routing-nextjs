import Modal from "@/components/Modal/Modal";
import NotePreview from "@/app/@modal/(.)notes/[id]/NotePreview.client";
import { fetchNoteById } from "@/lib/api";

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
