import Modal from "./Modal";

export default function Transaction({ vendorImage, vendorName, txName, price, modalTitle, modalDescription, modalExitMessage }) {
    return (
        <div className={`relative p-5 rounded-xl grid grid-cols-7 gap-10 ${price?.substring(0,1) === '-' ? 'bg-red-100' : 'bg-green-100'} h-24 items-center justify-start`}>
            <img className={`h-12 w-12 rounded-xl ${vendorImage ? 'opacity-100' : 'opacity-0'}`} src={vendorImage} />
            <div className="flex flex-col space-y-1 col-span-2">
                <div className="truncate">{txName}</div>
                <div className="italic truncate">{vendorName}</div>
            </div>
            <div className="text-4xl font-bold whitespace-nowrap">{price}</div>
            <div className="absolute bottom-5 right-5">
                <Modal
                    title={modalTitle}
                    description={modalDescription}
                    exitMessage={modalExitMessage}
                />
            </div>
        </div>
    )
}