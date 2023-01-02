import { AppearanceTypes, useToasts } from 'react-toast-notifications';
export default function ToastNotification({message, type}: {message: string, type: AppearanceTypes}){
    const { addToast } = useToasts()
    return addToast(message, { appearance: type, autoDismiss: true })
}