export const getInitials = (fullname: string = '') => {
    if (fullname === '')
        return '';

    return (
        fullname
            .trim()
            .split(/\s+/)
            .map(word => word[0].toUpperCase())
            .join('')
    );
}