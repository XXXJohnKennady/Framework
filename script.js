let sites = JSON.parse(localStorage.getItem('sites')) || [];

function addSite() {
    const siteName = document.getElementById('siteName').value;
    const siteURL = document.getElementById('siteURL').value;
    
    if (siteName && siteURL) {
        sites.push({ name: siteName, url: siteURL });
        localStorage.setItem('sites', JSON.stringify(sites));
        document.getElementById('siteName').value = '';
        document.getElementById('siteURL').value = '';
        displaySites();
    }
}

function displaySites() {
    const siteList = document.getElementById('siteList');
    siteList.innerHTML = '<h2>Categories</h2>';

    sites.forEach((site, index) => {
        const link = document.createElement('a');
        link.href = site.url;
        link.className = 'site-link';
        link.target = '_blank';
        link.textContent = `${site.name}`;
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeSite(index);

        const wrapper = document.createElement('div');
        wrapper.appendChild(link);
        wrapper.appendChild(removeBtn);
        siteList.appendChild(wrapper);
    });
}

function removeSite(index) {
    sites.splice(index, 1);
    localStorage.setItem('sites', JSON.stringify(sites));
    displaySites();
}

displaySites();
