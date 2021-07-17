import HeadObject from '../components/head'
import Info from '../components/Info';
import Nav from '../components/nav';
import Txs from '../components/Txs'

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      {/* <Nav /> */}
      <main className="mx-auto my-20 flex flex-col space-y-10 md:space-y-0 md:grid md:grid-cols-3 w-5/6">
        <Info />
        <Txs />
      </main>
    </div>
  )
}
