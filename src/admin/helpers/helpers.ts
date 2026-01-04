export const getInitials = (fullName: string = '') => {
    if (fullName === '')
        return '';

    return (
        fullName
            .trim()
            .split(/\s+/)
            .map(word => word[0].toUpperCase())
            .join('')
    );
}