const getContributors = async({perPage=30, page=1}) => {
    try {
        const data = await fetch(``);
        return await data.json();
    } catch (error) {
        console.log(error);
        return null
    }
}

export { getContributors }