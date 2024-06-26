import { getCardData, getFolderData } from "@/server/supabase/actionsDB";
import SetPassCard from "../../components/setPassCard";
import FolderTitle from "../../components/folderTitle";

export default async function PassCardEdit({
  params,
}: {
  params: { cardID: number; folder: number };
}) {
  const passCard = await getCardData(params.cardID);
  const folderData = await getFolderData(params.folder);

  return (
    <>
      <FolderTitle
        data={folderData}
        closePath={`/dashboard/${params.folder}`}
        withButton={false}
      />
      <SetPassCard type="edit" data={passCard} />
    </>
  );
}
