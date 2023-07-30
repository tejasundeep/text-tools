const Slugify = ({title}) => {
    if (typeof title !== 'string') {
        throw new TypeError('Expected a string');
    }

    const cleanedTitle = title
        .normalize('NFD') // normalize string
        .replace(/[\u0300-\u036f]/g, '') // remove diacritics
        .toLowerCase() // convert to lower case
        .replace(/[^a-z0-9 ]/g, '-') // replace all non-alphanumeric characters (excluding space) with hyphen
        .replace(/\s+/g, '-') // replace spaces with hyphen
        .replace(/-+/g, '-') // replace multiple hyphens with single hyphen
        .replace(/^-|-$/g, ''); // trim leading/trailing hyphen
    
    return cleanedTitle === '' ? '' : cleanedTitle;
};

export default Slugify;