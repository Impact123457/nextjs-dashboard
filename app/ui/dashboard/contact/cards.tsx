import {
  DocumentIcon,
  FaceSmileIcon,
  PhoneIcon,
  MapIcon,
  
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

const iconMap = {
  Gmail: DocumentIcon,
  Phone: PhoneIcon,
  Facebook: FaceSmileIcon,
  Adress: MapIcon,
};
import { fetchCardData } from '@/app/lib/data';

export default async function CardWrapper() {
    
    const gmail = "acmeg@gmail.com";
    const facebook = "AcmeFB";
    const address = "tomsic oliva 12";
    const phone = "070 123 123";
  
  return (
    <>
      <Card title="Gmail" value={gmail} type="Gmail" />
      <Card title="Phone number" value={phone} type="Phone" />
      <Card title="Facebok" value={facebook} type="Facebook" />
      <Card
        title="Adress"
        value={address}
        type="Adress"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'Gmail' | 'Phone' | 'Facebook' | 'Adress';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
