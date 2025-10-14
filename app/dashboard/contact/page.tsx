import Map from '@/app/ui/dashboard/contact/map';
import Form from '@/app/ui/dashboard/contact/form';
import CardWrapper from '@/app/ui/dashboard/contact/cards';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'contacts',
};

export default async function Page() {

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Contact
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <Map />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <Form />
        </Suspense>
      </div>
    </main>
  );
}