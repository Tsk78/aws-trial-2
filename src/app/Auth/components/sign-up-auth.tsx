"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons main";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SignUp } from "../components/sign-up";
import { redirect } from "next/navigation";


export function SignUpAuth() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const user = {
      email,
      password,
    };
    console.log(user);
    await SignUp(user.email, user.password);
  };
  const handleApply = async (e: React.FormEvent<Element>) => {
    e.preventDefault();
    console.log("handleApply");
    setIsLoading(true);
    // Call your handleSubmit function here
    // Simulate a network request
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    await handleSubmit(e);
    setIsLoading(false);
    redirect("/Auth/Login");
  };

  return (
    <div className="grid gap-6" >
      <form onSubmit={handleApply}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Input
              id="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading} onClick={handleApply}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        <Link href="/Nurse">Google</Link>
      </Button>
    </div>
  );
}
