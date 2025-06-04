'use client'

import { Menu } from "@mantine/core"
import Image from "next/image"
import { useEffect, useState } from "react";
import NotificationItem from "./NotificationItem";



const Notifications = () => {
    const [haveUnread, setHaveUnread] = useState(false)
    const parsedNotifications = [{ title: "Welcome to PP Forume!" }]
    const [menuWidth, setMenuWidth] = useState(400);

    useEffect(() => {
        const calcWidth = () => {
            return window.innerWidth <= 420 ? 300 : 400;
        };
        setMenuWidth(calcWidth());
    }, [])

    return (
        <Menu closeOnItemClick position="bottom-end" offset={18} shadow="md" radius={"lg"} width={500}>
            <Menu.Target>
                <div className='rounded-full bg-primary200 h-12 w-12 flex items-center justify-center relative'>
                    <button className="relative h-6 w-6">
                        <Image quality={100} fill src={"/notification-03.svg"}
                            alt="notification"
                        />
                        {haveUnread && <div className="w-2 h-2 rounded-full bg-red-500 absolute top-0 left-0"></div>}
                    </button>
                </div>
            </Menu.Target>

            <Menu.Dropdown className="font-manrope py-3 px-6 notification-dropdown-custom">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold">Notifications</h3>
                </div>

                <div className="border border-neutralAlpha10 my-5"></div>

                <div className="max-h-[400px] overflow-y-auto custom-scrollbar-notification-menu flex flex-col gap-4 px-1">
                    {parsedNotifications.map((notification: any, index: any) => {
                        return <NotificationItem key={index} notification={notification} />
                    })}
                </div>

            </Menu.Dropdown>
        </Menu>
    )
}

export default Notifications