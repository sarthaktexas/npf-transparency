import Stats from './Stats'

export default function Info() {
    return (
        <div className="relative">
            <div className="relative lg:fixed flex flex-col space-y-10">
                <div className="flex flex-row space-x-5 items-center">
                    <img className="rounded-lg w-16 h-16" alt="Nonprofit Foundation logo" src="https://nonprofit.foundation/wp-content/uploads/2020/11/116186049_348751036154255_7772979786752124081_n.jpg" />
                    <div className="text-3xl font-bold">Nonprofit<br />Foundation</div>
                </div>
                <Stats />
            </div>
        </div>
    )
}