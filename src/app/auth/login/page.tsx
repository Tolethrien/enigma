import { getUserData } from "@/supabase/back";
import { redirect } from "next/navigation";
import Link from "next/link";
import Input from "@/app/_components/input";
import { login } from "@/supabase/actionsUser";

export default async function Login({
  searchParams,
}: {
  searchParams: { invalid: "true" };
}) {
  const { user } = await getUserData();
  if (user) redirect("/dashboard");
  return (
    <div className="flex h-full flex-col">
      <h1 className="my-[8vh] text-center text-5xl">Enigma</h1>
      <div className="mt-[10vh] flex w-full flex-grow flex-col items-center gap-8">
        <form className="relative flex flex-col gap-8 *:text-2xl *:placeholder:text-lg">
          {searchParams.invalid && (
            <p className="absolute -top-10 left-1/2 w-full -translate-x-1/2 text-nowrap text-2xl text-red-700">
              Invalid login credentials
            </p>
          )}
          <Input
            placeholder="Email"
            type="email"
            formID="email"
            required
          ></Input>
          <Input
            placeholder="password"
            type="password"
            formID="password"
            required
          ></Input>
          <button formAction={login}>Login</button>
        </form>
        <Link
          href={"./register"}
          className="flex w-full items-center justify-center text-2xl"
        >
          Register
        </Link>
      </div>
      <Link href={"./reset"} className="my-[15vh] mr-6 text-right text-2xl">
        forgot again?
      </Link>
    </div>
  );
}
