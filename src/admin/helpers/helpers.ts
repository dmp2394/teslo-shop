export const getInitials = (fullname: string = '') => {
    return (
        fullname
            .trim()
            .split(/\s+/)
            .map(word => word[0].toUpperCase())
            .join('')
    );
}