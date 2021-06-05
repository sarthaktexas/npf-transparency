import useSWR from 'swr';
import fetcher from '../lib/fetcher'

export default function Table() {
    let data = useSWR('/api/txs', fetcher).data;
    data = data?.map(tx => [tx.id, tx.date, tx.description, tx.amount, tx.vendor, tx.vendorLogo])
    return (
        <table className="dark:text-white w-full overflow-ellipsis border-collapse">
            <thead>
                <tr className="text-left">
                    <th className="w-2/12 px-2 py-1">Date</th>
                    <th className="w-5/12 px-2 py-1">Description</th>
                    <th className="w-3/12 px-2 py-1">Amount</th>
                    <th className="w-2/12 px-2 py-1">Vendor</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((tx) => (
                    <tr key={tx[0]} className={`${tx[3]?.substring(0, 1) === '-' ? 'bg-red-400 bg-opacity-30' : 'bg-green-500 bg-opacity-20'} border-t border-gray-200 dark:border-gray-600`}>
                        <td className="px-2 py-1">{tx[1]}</td>
                        <td>
                            <img src={tx[5]} className={`w-auto h-6 rounded float-left mr-2 md:mr-5 ${tx[5] ? '' : 'hidden'}`} />
                            {tx[2]}
                        </td>
                        <td>{tx[3]}</td>
                        <td>{tx[4]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}