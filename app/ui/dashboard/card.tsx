import { lusitana } from '@/app/ui/fonts';
import {
  PhoneIcon,
  HomeIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
  mail: InboxIcon,
  phone: PhoneIcon,
  address: HomeIcon,
};

export default async function CardWrapper() {
  const mail = "ema@gmail.com";
  const phone = "234542123"; // brez presledkov za `tel:`
  const address = "Mozirje 23";

  return (
    <>
      <Card title="mail" value={mail} type="mail" />
      <Card title="phone" value={phone} type="phone" />
      <Card title="address" value={address} type="address" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: string;
  type: 'mail' | 'phone' | 'address';
}) {
  const Icon = iconMap[type];

  // definira link glede na type
  let href: string | undefined;
  if (type === 'mail') href = `mailto:${value}`;
  if (type === 'phone') href = `tel:${value}`;
  if (type === 'address') href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(value)}`;

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>

      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${lusitana.className} block truncate rounded-xl bg-white px-4 py-8 text-center text-2xl hover:underline`}
        >
          {value}
        </a>
      ) : (
        <p
          className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
        >
          {value}
        </p>
      )}
    </div>
  );
}
