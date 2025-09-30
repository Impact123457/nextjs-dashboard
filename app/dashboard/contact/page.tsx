import { Card } from '@/app/ui/dashboard/card';
import { lusitana } from '@/app/ui/fonts';
import CardWrapper from '@/app/ui/dashboard/card';
import MapWithGoogleMapReact from '@/app/ui/dashboard/map';
import Form from '@/app/ui/dashboard/form';
import { Suspense } from 'react';
export default function Page() {
  return(
  <main>
    <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Contact</h1>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense>
             <CardWrapper />
        </Suspense>
    </div>
    <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Map</h1>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense>
            <MapWithGoogleMapReact />
        </Suspense>
    </div>
    <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Form</h1>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense>
            <Form />
        </Suspense>
    </div>
    
    </main>);
}