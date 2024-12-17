import Link from "next/link";

export default function DontHaveAccount() {
  return (
    <div className="w-full text-center text-sm leading-[19.6px] mt-10 3xl:text-base">
      Don&apos;t have an account?&nbsp;
      <Link href="/register" className="text-orange">
        Sign up
      </Link>
    </div>
  );
}
