import Link from 'next/link'
import { useEffect } from 'react'
import { CgDarkMode } from 'react-icons/cg'
import {useTheme} from 'next-themes'

export default function Nav() {
    const {theme, setTheme} = useTheme()
    useEffect(() => {
        console.log('Made by Sarthak Mohanty. All Rights Reserved. Want to hire me? https://srtk.me')
    })
    return (
        <nav className="dark:text-white">
            <ul className="flex flex-wrap sm:justify-between items-start sm:items-center p-8 mt-6 sm:mt-0">
                {
                    theme === 'light' ? <li><img alt="Nonprofit Foundation logo" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffc19db9d-eaf1-4b4a-a9e6-683b0013833a%2Flogo.png?table=block&id=3f8e816b-1820-4814-8df5-8e5a410b4411&spaceId=b8cd0f7a-865c-4360-b3a4-5b4f2d8ae360&width=200&userId=ac2f3beb-7ccb-47a1-a7e9-782beb1799a0&cache=v2"/></li> : <li><img alt="Nonprofit Foundation logo" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F547e3b9a-f99c-4151-8552-28328b98eb9e%2Fn.png?table=block&id=cf12be4e-6ce5-4965-9aab-e5c3568656f0&spaceId=b8cd0f7a-865c-4360-b3a4-5b4f2d8ae360&width=200&userId=ac2f3beb-7ccb-47a1-a7e9-782beb1799a0&cache=v2" /></li>
                }
                <ul className={`mx-auto sm:mx-0 flex flex-row space-x-5`}>
                    <li>
                        <button
                            onClick={() => {
                                setTheme(theme === 'dark' ? 'light' : 'dark');
                                document.querySelector("#theme_toggle").classList.toggle("rotate-180");
                            }}
                            className="p-5 md:p-2 rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 transform duration-200" id="theme_toggle">
                            <CgDarkMode size={24} />
                        </button>
                    </li>
                </ul>
            </ul>
        </nav>
    )
}