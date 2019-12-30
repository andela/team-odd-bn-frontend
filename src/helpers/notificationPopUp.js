import { toast } from 'react-toastify';

export const notificationError = (notification) => toast.error(notification);
export const notificationSuccess = (notification) => toast.success(notification);
