const getFormTitle = data => {
    let title = "I'm";
    switch (data.option) {
        case 'Worker':
            title = `${title} Worker`;
            break;
        case 'Employer':
            title = `${title} Employer`;
            break;

        default:
            title = '';
    }
    return title;
};

export default getFormTitle;
