import { lusitana } from '@/app/ui/fonts';

export default async function Form() {
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          <form action="">
            <input
              type="text"
              className="flex grow flex-col justify-between rounded-xl m-1 bg-gray-50 p-4"
              placeholder="gmail"
            />
            <textarea
              className="flex grow flex-col justify-between rounded-xl bg-gray-50 m-1 p-4"
              placeholder="message"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="flex grow flex-col justify-between rounded-xl bg-blue-500 m-1 p-3 text-white cursor-pointer hover:bg-blue-600"
            />
          </form>
        </div>
        <div className="flex items-center pb-2 pt-6"></div>
      </div>
    </div>
  );
}
