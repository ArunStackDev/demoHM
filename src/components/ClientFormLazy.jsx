import { lazy, Suspense } from "react";

const ClientForm = lazy(() => import("./ClientForm.jsx"));

function ClientFormLazy() {
  return (
    <Suspense
      fallback={
        <div className="w-full max-w-[380px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px] lg:min-h-[85vh] p-6 mt-10 mx-auto lg:mx-0 lg:ml-20 flex flex-col gap-4 rounded-2xl shadow shadow-2xl shadow-gray-600 bg-white/70 backdrop-blur-md border border-white/40">
          <div className="h-6 w-36 rounded bg-gray-200/80 animate-pulse" />
          <div className="h-10 w-full rounded bg-gray-200/70 animate-pulse" />
          <div className="h-10 w-full rounded bg-gray-200/70 animate-pulse" />
          <div className="h-10 w-2/3 rounded bg-gray-200/70 animate-pulse" />
          <div className="h-10 w-full rounded bg-gray-200/70 animate-pulse" />
          <div className="h-10 w-1/2 rounded bg-gray-200/70 animate-pulse" />
          <div className="mt-4 h-11 w-full rounded bg-gray-300/70 animate-pulse" />
        </div>
      }
    >
      <ClientForm />
    </Suspense>
  );
}

export default ClientFormLazy;
