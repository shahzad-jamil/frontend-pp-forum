interface props {
    notification: any
}




const NotificationItem: React.FC<props> = ({notification}) => {
    return (
        <div>{notification.title}</div>
    )
}

export default NotificationItem