import toast from 'react-hot-toast';

export const notify = (type , message ) => {
    if(type === "success") {
        toast.success(message)
    }else {
        toast.error(message)
    }
}