const express = require('express');
const hbs = require('hbs');
var app = express();
const port = process.env.PORT || 3000;
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('gettodaysDate',() =>{
    return  new Date().getFullYear()
});

// app.use((req,res,next)=>{
// res.render('maintainance.hbs'); 
// })
app.use((req,res,next) => {
    var now =new Date().toString();
    console.log(`${now}:${req.method} ${req.url}`);
    next();
});

app.get('/',(req , res)=>{
    //res.send('<h1>yoo yoo varma</h1>');
        // res.send({
        //     name: 'gopal varma',
        //     technologies:[
        //         'java',
        //         'js',
        //         'jquery',
        //         'nodejs',
        //         'angular'
        //     ]
        // })  
    res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
});
app.get('/Bosh',(req,res)=>{
    res.send('about  opening folder');
    
});
app.get('/help',(req,res)=>{
    res.render('help.hbs',{
        pageTitle:'help',
        welcomeMessage:'welcome to my website',
    })
})

app.get('/about',(req,res)=>{
    //res.send('about  opening folder');
    res.render('about.hbs',{
        pageTitle : 'about.HBS page',
        htag: 'trail to be running',
       
    });
});
app.get('/home',(req,res)=>{
    //res.send('about  opening folder');
    res.render('home.hbs',{
        pageTitle : 'home.HBS page',
        htag: 'trail to be running in home'
       
    });
});
app.get('/projects',(req , res) => {
    res.render('projects.hbs',{
        pageTitle: 'project.hbs',
        htag:'project creation and git commit and heroku staging'
    }); 
});
app.get('/procs',(req,res)=>{
    res.render('procs.hbs',{
        pageTitle: 'Procs'
    })
});

app.get('/Bad',(req,res)=>{
    res.send({
       errorMessage : 'unable to find the server'
    })
})
app.listen(port,()=>{
    console.log(`server is up on port ${port}`)
});