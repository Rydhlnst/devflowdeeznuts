import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { signOut } from "@/auth";
import React from "react";
import Link from "next/link";
import LocalSearch from "@/components/search/LocalSearch";

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;

  const session = await auth();
  const questions = [{ _id: "1" }];

  console.log(session);
  return (
    <>
      <section className="w-full flex flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient py-3 min-h-[46px] px-4 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          imgSrc="/icons/search.svg"
          placeholder="Search Questions..."
          otherClasses="flex-1"
          route="/"
        />
      </section>
      HomeFilter
      <div className="mt-10 flex w-full flex-col gap-6 ">
        <p>Question card 1</p>
        <p>Question card 1</p>
        <p>Question card 1</p>
        <p>Question card 1</p>
      </div>
    </>
  );
};

export default Home;
