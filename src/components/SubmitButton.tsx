"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return <>{pending ? <h1>pending</h1> : <p>not pending</p>}</>;
}
