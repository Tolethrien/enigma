import OptionSlot from "./_components/optionSlot";
import Modal from "./_components/modal";
import ScrollableContent from "@/app/components/scrollContent";
import Link from "next/link";
import { getUserData } from "@/server/supabase/back";
import { deleteUser } from "@/server/supabase/actionsUser";
export type ParamType =
  | "name"
  | "email"
  | "stegano"
  | "password"
  | "avatar"
  | "delete"
  | "upload";
interface Props {
  searchParams: { option: ParamType };
}
export default async function UserSettings({ searchParams }: Props) {
  const { meta } = await getUserData();
  if (!meta) return <div>something went wrong...</div>;
  return (
    <>
      {searchParams.option && <Modal modalType={searchParams.option} />}
      <div className="flex justify-between px-4 pb-8 pt-4">
        <h2 className="w-full text-center text-2xl">Options</h2>
        <Link href="/dashboard" className="text-2xl">
          X
        </Link>
      </div>
      <ScrollableContent>
        {/* user */}
        <div className="w-full px-4">
          <p className="w-full border-b text-center text-2xl">User</p>
          <OptionSlot
            optionName="Name"
            optionValue={meta.display_name}
            param={"name"}
          />
          <OptionSlot
            optionName="Email"
            optionValue={meta.email}
            param={"email"}
          />
          <OptionSlot
            optionName="Password"
            optionValue="********"
            param={"password"}
          />

          <OptionSlot
            optionName="Avatar"
            optionValue="ava.png"
            param={"avatar"}
          />
        </div>
        {/* persona */}
        <div className="w-full px-4">
          <p className="w-full border-b text-center text-2xl">
            Personalization
          </p>
          <p className="py-4 text-center">Nothing to personlize yet :) </p>
          {/* <OptionSlot
              optionName="Use Stegano..."
              optionValue="true"
              param={"stegano"}
              /> */}
        </div>
        {/* Badge */}
        <div className="flex w-full flex-col items-center px-4 text-center *:py-2">
          <p className="w-full border-b text-2xl">Badge</p>
          <p>
            There is no Badge uploaded, you cannot decrypt your data without it!
          </p>
          <div className="h-[320px] w-[280px] rounded-md border-2 border-gray-500"></div>
        </div>
        {/* Denger zone */}
        <div className="w-full px-4 text-center *:py-2">
          <p className="w-full border-b text-2xl">Danger Zone</p>
          <form>
            <button formAction={deleteUser} className="text-xl text-red-700">
              Delete Account
            </button>
          </form>
          <form>
            <p className="text-xl text-violet-700">Upload Badge</p>
          </form>
        </div>
      </ScrollableContent>
    </>
  );
}
