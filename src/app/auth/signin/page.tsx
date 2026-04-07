"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/ui/Button";

export default function SignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl
    });

    if (result?.error) {
      setError("بيانات الدخول غير صحيحة");
      return;
    }

    router.push(result?.url ?? callbackUrl);
    router.refresh();
  };

  return (
    <div className="mx-auto max-w-md rounded-xl border border-mda-beige/30 bg-mda-card p-6">
      <h1 className="mb-4 text-2xl font-bold">تسجيل الدخول</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-mda-beige">البريد الإلكتروني</label>
          <input
            id="email"
            type="email"
            className="w-full rounded-lg border border-mda-beige/30 bg-mda-bg px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="mb-1 block text-sm text-mda-beige">كلمة المرور</label>
          <input
            id="password"
            type="password"
            className="w-full rounded-lg border border-mda-beige/30 bg-mda-bg px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error ? <p className="text-sm text-red-300">{error}</p> : null}
        <Button type="submit">دخول</Button>
      </form>
    </div>
  );
}
