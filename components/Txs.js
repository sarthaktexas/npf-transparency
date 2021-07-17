import Tx from './Tx'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'

export default function Transactions() {
    let data = useSWR('/api/txs', fetcher).data;
    //data = data?.map(tx => [tx.id, tx.date, tx.description, tx.amount, tx.vendor, tx.vendorLogo])
    return (
        <div className="flex flex-col space-y-4 col-span-2">
            {data?.map((tx) => (
                <Tx
                    key={tx.id}
                    vendorImage={tx.vendorLogo}
                    vendorName={tx.vendor}
                    txName={tx.description}
                    price={tx.amount}
                    modalTitle={tx.description}
                    modalDescription={JSON.stringify(tx, 2)}
                />
            ))}
        </div>
    )
}