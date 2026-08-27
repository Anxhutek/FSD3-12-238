import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    console.log("client url:", req.url);
    const product =[{
        name:"iphone 14",
        price: 2400,
        qty: 5,
        discount: 15,
    },
    {
        name:"iphone 17",
        price: 22400,
        qty: 50,
        discount: 25,
    },
    {
        name:"iphone 18",
        price: 200,
        qty: 500,
        discount: 25,
    }
];
    res.end(JSON.stringify(product));
});
server.listen(3000, () => {
    console.log('Server is listening on port at 3000....');
});


