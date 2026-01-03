import React, { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: 40, textAlign: 'center' }}>Loading marketplace...</div>}>
    </Suspense>
  );
}