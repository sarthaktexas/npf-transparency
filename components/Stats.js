import useSWR from 'swr';
import fetcher from '../lib/fetcher'

export default function Stats() {
    let data = useSWR('/api/stats', fetcher).data;
    return (
        <div className="px-4 md:px-0 my-10 flex flex-col space-y-8 ">
            <section>
                <h2 className="text-xl">Account Balance</h2>
                <div className="text-3xl font-bold">{data?.totalAmount}</div>
            </section>
            <section>
                <h2 className="text-xl">Amount Raised this Month</h2>
                <div className="text-3xl font-bold">{data?.amountRaisedMonth}</div>
            </section>
            <section>
                <h2 className="text-xl">Amount Spent this Month</h2>
                <div className="text-3xl font-bold">{data?.amountSpentMonth}</div>
            </section>
        </div>
    )
}