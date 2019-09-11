const data = [
    'Data 1' ,
    'Data 2' ,
    'Data 3' ,
    'Data 4' ,
    'Data 5'
];

const data2 = [
    {id: 1, name: 'Data1'},
    {id: 2, name: 'Data2'},
    {id: 3, name: 'Data3'}
];

data2.map((response)=>{
    console.log(response.name);
})
data.map((response)=>{
    console.log(response);
})