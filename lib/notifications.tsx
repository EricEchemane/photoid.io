import { hideNotification, showNotification } from '@mantine/notifications';

enum ErrorCodes {
    fileTooLarge = 'file-too-large'
}

class PhotoUploadErrorClass {
    show(errorCode: string) {
        switch (errorCode) {
            case ErrorCodes.fileTooLarge:
                showNotification({
                    id: ErrorCodes.fileTooLarge,
                    title: 'Your photo is too large',
                    message: 'Photo must not exceed 5mb. Try another',
                    color: 'red',
                    autoClose: 3000
                });
                break;
            default:
                break;
        }
    }
    clear() {
        hideNotification(ErrorCodes.fileTooLarge);
    }
}

class PrintingErrorClass {
    show() {
        showNotification({
            id: 'no-photo-selected',
            title: 'No photo is selected',
            message: 'Upload your photo first',
            color: 'orange',
            autoClose: 3000
        });
    }
}

export const PhotoUploadError = new PhotoUploadErrorClass();
export const PrintingError = new PrintingErrorClass();