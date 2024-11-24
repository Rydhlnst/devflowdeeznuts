import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const SocialAuth = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-[10px] px-4 py-3.5";
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass}>
        <Image
          src={"/icons/github.svg"}
          width={20}
          height={20}
          alt="Github Logo"
          className="invert-colors mr-2.5 object-contain"
        />
      </Button>

      <Button className={buttonClass}>
        <Image
          src={"/icons/google.svg"}
          width={20}
          height={20}
          alt="Google Logo"
          className="mr-2.5 object-contain"
        />
      </Button>
    </div>
  );
};

export default SocialAuth;
