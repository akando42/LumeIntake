This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run Projects
```
### Install dependencices
$ yarn 

### Run locally
$ yarn start

### Build for Deployment
$ yarn build
```

## Questions

1. Name - String
2. Email - String
3. DOB - Date 
4. Emergency Contact Name - String
5. Emergency Contact Number - String
6. Reason for your Visit - String
7. Healthy Lifestyle Dedication ? - String
8. What are your priorities ? - Multi-Selections, Array
9. Let's discuss your "Feels" ? - Object
10. Let's discuss your "Looks" ? - Object
11. Let's discuss your "Functions" ? - Object
12. Let's discuss your "Medical History" ? - Object
13. More on Medical History ? - Object
14. Your Diet - String, Number
15. Your Exercise Habits - String, Number
16. Your Sleep Habits - String, Number
17. Addtional Info about Medical History ? - Text Field
18. Signed Date - Date

### Proxy Server

```
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/.netlify/functions',
    proxy({
      target: 'http://localhost:9000',
      changeOrigin: true,
    })
  );
};

```

