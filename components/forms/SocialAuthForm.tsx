"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";

import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";

import { Button } from "../ui/button";

const SocialAuth = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-[10px] px-4 py-3.5";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.log(error);

      toast({
        title: "Sign-in Failed",
        description:
          error instanceof Error
            ? error.message
            : "An error occured during sign-in",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src={"/icons/github.svg"}
          width={20}
          height={20}
          alt="Github Logo"
          className="invert-colors mr-2.5 object-contain"
        />
      </Button>

      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
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
