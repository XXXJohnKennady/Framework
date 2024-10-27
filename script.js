let sites = JSON.parse(localStorage.getItem('sites')) || [];

function addSite() {
    const siteName = document.getElementById('siteName').value.trim();
    const siteURL = document.getElementById('siteURL').value.trim();
    
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
    siteList.innerHTML = '<h2>Favorite Sites</h2>';

    sites.forEach((site, index) => {
        const linkWrapper = document.createElement('div');
        linkWrapper.className = 'site-link';

        const link = document.createElement('a');
        link.href = site.url;
        link.target = '_blank';
        link.textContent = site.name;

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeSite(index);

        linkWrapper.appendChild(link);
        linkWrapper.appendChild(removeBtn);
        siteList.appendChild(linkWrapper);
    });
}

function removeSite(index) {
    sites.splice(index, 1);
    localStorage.setItem('sites', JSON.stringify(sites));
    displaySites();
}

displaySites();
function addSite() {
    console.log("Add button clicked"); // Debug line
    const siteName = document.getElementById('siteName').value.trim();
    const siteURL = document.getElementById('siteURL').value.trim();
    
    if (siteName && siteURL) {
        sites.push({ name: siteName, url: siteURL });
        localStorage.setItem('sites', JSON.stringify(sites));
        document.getElementById('siteName').value = '';
        document.getElementById('siteURL').value = '';
        displaySites();
    }
}
