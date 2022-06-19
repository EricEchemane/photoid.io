import { showNotification } from '@mantine/notifications';

enum ErrorCodes {
    fileTooLarge = 'file-too-large'
}

class PhotoUploadErrorClass {
    show(errorCode: string) {
        switch (errorCode) {
            case ErrorCodes.fileTooLarge:
                showNotification({
                    title: 'Your photo is too large',
                    message: 'Photo must not exceed 5mb. Try another',
                    color: 'red',
                    autoClose: 7000
                });
                break;
            default:
                break;
        }
    }
}

export const PhotoUploadError = new PhotoUploadErrorClass();