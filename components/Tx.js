import Modal from "./Modal";

export default function Transaction({ vendorImage, vendorName, txName, price, modalTitle, modalDescription, modalExitMessage }) {
    return (
        <div className={`relative p-5 rounded-xl flex flex-col space-y-5 md:flex-row md:space-x-5 ${price?.substring(0,1) === '-' ? 'bg-red-100 dark:bg-red-800 dark:bg-opacity-40' : 'bg-green-100 dark:bg-green-800 dark:bg-opacity-40'} md:h-24 md:items-center justify-start`}>
            <img className={`h-12 w-12 rounded-xl ${vendorImage ? 'opacity-100' : 'hidden md:block opacity-0'}`} src={vendorImage} />
            <div className="flex flex-col space-y-1 col-span-2">
                <div className="truncate">{txName}</div>
                <div className="italic truncate">{vendorName}</div>
            </div>
            <div className="text-4xl font-bold whitespace-nowrap">{price}</div>
            <div className="absolute top-0 md:bottom-5 right-5">
                <Modal
                    title={modalTitle}
                    description={modalDescription}
                    exitMessage={modalExitMessage}
                />
            </div>
        </div>
    )
}