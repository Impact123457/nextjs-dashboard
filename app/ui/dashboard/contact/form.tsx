import { lusitana } from '@/app/ui/fonts';

export default async function Form() { // Remove props
  
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Contact us
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">

        <div className="bg-white px-6">
            <form action="">
                <input type="text" className='flex grow flex-col justify-between rounded-xl m-1 bg-gray-50 p-4' placeholder='gmail'/>
                <textarea className='flex grow flex-col justify-between rounded-xl bg-gray-50 m-1 p-4' placeholder='message'>

                </textarea>
                <input type="submit" className='flex grow flex-col justify-between rounded-xl bg-blue-500 p-3 text-white'/>
            </form>
        </div>
        <div className="flex items-center pb-2 pt-6">
        </div>
      </div>
    </div>
  );
}
