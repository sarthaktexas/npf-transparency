import HeadObject from '../components/head'
import Nav from '../components/nav';
import Stats from '../components/Stats';
import Table from '../components/Table';

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      <Nav />
      <main className="md:w-5/6 mx-auto">
        <Stats />
        <Table />
      </main>
    </div>
  )
}
