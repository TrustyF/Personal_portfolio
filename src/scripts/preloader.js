// preload routes
function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

const runIdle = (fn) => {
    if ('requestIdleCallback' in window) {
        requestIdleCallback(fn, {timeout: 2000});
    } else {
        setTimeout(fn, 1000);
    }
}

function runChunks(items, chunkSize, fn) {

    let chunks = chunkArray(items, chunkSize)

    let i = 0;

    const processNextChunk = () => {
        if (i >= chunks.length) return;
        chunks[i].forEach(fn); // call your processing function on each item
        i++;
        runIdle(processNextChunk);
    };

    runIdle(processNextChunk);
}

export async function preload(router) {
    await router.isReady()
    await new Promise(resolve => window.addEventListener('load', resolve));
    await new Promise(requestAnimationFrame);

    const preload_routes = () => {

        const routes = router.getRoutes()

        runChunks(routes, 2, (r) => {
            if (typeof r.component === 'function') r.component();

            r.children?.forEach(child => {
                if (typeof child.component === 'function') child.component();
            });
        })
    }

    const preload_thumbnails = async () => {
        try {
            const res = await fetch('/assets/manifest.json');
            const manifest = await res.json();

            //  2. Preload small images / thumbnails
            const projectThumbnails = manifest['projects'].map(f => `/assets/project_images/${f}/thumb.webp`);
            const softwareIcons = manifest['software_icons'].map(f => `/assets/software_icons/${f}`);
            const peopleIcons = manifest['people_icons'].map(f => `/assets/people_icons/${f}`);
            const companyIcons = manifest['company_icons'].map(f => `/assets/company_icons/${f}`);
            const icons = manifest['icons'].map(f => `/assets/icons/${f}`);
            const allUrls = [...projectThumbnails, ...softwareIcons, ...peopleIcons,
                ...companyIcons, ...icons];

            runChunks(allUrls, 3, (url) => {
                const img = new Image()
                img.src = url
            })

        } catch (e) {
            console.warn('Failed to preload manifest', e)
        }
    }

    runIdle(preload_routes)
    runIdle(preload_thumbnails)
}


