import Image from 'next/image'
import SearchSpaces from './components/DatePicker/page'
import { TbClick } from "react-icons/tb";

export default function Home() {
  return (
    <main className="grid flex-col items-center justify-between p-24">
      <SearchSpaces />
      <h2 className={`mb-3 text-4xl font-semibold p-12`}>
          REVOLUTIONIZING EVENTS <br></br>
          WITH JUST ONE CLICK{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            <TbClick />
          </span>
        </h2>
    </main>
  )
}
