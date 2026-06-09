export const handleError = (error: any) => {
    if (error?.message && typeof error.message === 'string') {
        console.error(error.message);
    }
    else if (error?.message && Array.isArray(error.message)) {
        return error.message.join(',\n');
    }
    else {
        return 'Error';
    }
}