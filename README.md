
<h1 align="center">server-monitor</h1>
   
  
<p align="center">
    <img src="https://img.shields.io/github/repo-size/Playfrog4u/server-monitor" />
    <img src="https://img.shields.io/github/languages/top/Playfrog4u/server-monitor"  />
    <img src="https://img.shields.io/github/issues/Playfrog4u/server-monitor" />
    <img src="https://img.shields.io/github/last-commit/Playfrog4u/server-monitor" >
    <a href="https://twitter.com/Playfrog4u">
        <img alt="Twitter: Playfrog4u" src="https://img.shields.io/twitter/follow/Playfrog4u.svg?style=social" target="_blank" />
    </a>
</p>
  
<p align="center">
    <img src="https://img.shields.io/badge/-node.js-green" />
    <img src="https://img.shields.io/badge/-json-orange" />
</p>
   
## Description
  
A simple project to monitor URLs for when it stops responding.
  

## Installation & Configuration
### Clone the repo
```sh
git clone https://github.com/Playfrog4u/server-monitor.git
```
 
 ### Install required packages
```sh
yarn
```

Copy and modify the `/configs/urls.template.json` to `/configs/urls.json`

Copy and modify the `/configs/webhooks.template.json` to `/configs/webhooks.json`
  
## Usage
Run the following command at the root folder of this project

### Single Run
```sh
yarn start
```

### Run in background
```sh
yarn pm2-start
```

### Stop running in background
```sh
yarn pm2-stop
```

## Contributing
:octocat: [Tristen Russ](https://github.com/Playfrog4u)

## Questions
✉️ Contact me with any questions: [GitHub](https://github.com/Playfrog4u)<br />

    
