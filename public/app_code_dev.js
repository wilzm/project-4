var updateView = async (button) => {
    let api = '';

    if (button.dataset.querytype == 'by_name') {
        let queryvalue = document.querySelector('#nameQuery').value;
        api = `/api/by_name/${queryvalue}`; 
    } else if (button.dataset.querytype == 'by_age') {
        let queryStartAge = document.querySelector('#startAgeQuery').value;
        let queryEndAge = document.querySelector('#endAgeQuery').value;
        api = `/api/by_age/${queryStartAge}/${queryEndAge}`; 
    }

    const data = await fetch(api);
    const model = await data.json();
    render_view(model);
}
