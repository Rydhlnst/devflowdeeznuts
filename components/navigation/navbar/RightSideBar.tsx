import TagCards from "@/components/cards/TagCards";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const hotQuestions = [
  { _id: "1", title: "How to create a custom hook in react?" },
  { _id: "2", title: "How to create a good Layout?" },
  { _id: "3", title: "How to use redux?" },
  { _id: "4", title: "How to use react router?" },
  { _id: "5", title: "How to use react context?" },
];

// untuk namai tags
const popularTags = [
  { _id: "1", name: "Javascript", questions: 100 },
  { _id: "2", name: "React", questions: 130 },
  { _id: "3", name: "Typescript", questions: 70 },
  { _id: "4", name: "NextJS", questions: 320 },
  { _id: "5", name: "React-Query", questions: 50 },
];

const RightSideBar = () => {
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-1 p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
      </div>

      <div className="mt-7 flex w-full flex-col gap-[30px]">
        {hotQuestions.map(({ _id, title }) => (
          <Link
            key={_id}
            href={ROUTES.PROFILE(_id)}
            className="flex cusror-pointer items-center justify-between gap-7"
          >
            <p className="body-medium text-dark500_light700">{title}</p>
            <Image
              src={"/icons/chevron-right.svg"}
              alt="Chevron"
              width={20}
              height={20}
              className="invert-colors"
            />
          </Link>
        ))}
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, questions, name }) => (
            // Mengambil fungsi komponen tagcards dan memenuhi yang dibutuhkan tagcards dari populartags
            <TagCards
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;