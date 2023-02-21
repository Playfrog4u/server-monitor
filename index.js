const axios = require('axios');

const urls = require('./configs/urls.json');
const webhooks = require('./configs/webhooks.json');

let downURLs = [];

const fetchURL = async (url2Check) => {
    axios.get(url2Check.url, {timeout: 0}).then(() => {
        removeDownedURL(url2Check);
    }).catch((error) => {
        console.log(error);
        if(!url2Check.currentDowns) url2Check.currentDowns = 0;
        url2Check.currentDowns++;
        if(url2Check.currentDowns == url2Check.downLimit) addDownedURL(url2Check);
    });
    setTimeout(() => {
        fetchURL(url2Check)
    }, url2Check.fetchTime);
}

addDownedURL = (url) => {
    let index = downURLs.findIndex(x => x.url == url.url);
    if (index === -1) {
        let message = `:warning: ${url.name} is down :fearful:`;
        downURLs.push({ name: url.name, url: url.url, downedTime: new Date() });
        sendWebhook(message);
    }
}
removeDownedURL = (url) => {
    url.currentDowns = 0;
    let index = downURLs.findIndex(x => x.url === url.url);
    if (index === 0) {
        let diffTime = Math.abs(new Date().valueOf() - downURLs[index].downedTime.valueOf());
        let days = diffTime / (24 * 60 * 60 * 1000);
        let hours = (days % 1) * 24;
        let minutes = (hours % 1) * 60;
        let secs = (minutes % 1) * 60;
        [days, hours, minutes, secs] = [Math.floor(days), Math.floor(hours), Math.floor(minutes), Math.floor(secs)];
        let message = `:tada: ${url.name} is back online :tada:\nWas down for ${hours} hours, ${minutes} minutes, and ${secs} seconds :cry:`;
        downURLs.splice(index, 1);
        sendWebhook(message);
    }
}

sendWebhook = (message) => {
    console.info(message)
    webhooks.forEach(webhook => {
        axios({
            method: 'post',
            url: webhook,
            data: {
                text: message
            }
        });
    });
}

urls.forEach((urls2Fetch) => fetchURL(urls2Fetch));