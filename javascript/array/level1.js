const arr = ['kaylin', 'ram', 'gopal', 'ankit']

const userDetails = {
    'kaylin': 'khanal',
    'alisha': 'rauniyar',
    'ayush': 'rai',
    'gopal': 'tharu'
}
const ans = arr.map((item)=>{
    if(userDetails[item]){
        return item + userDetails['item']
    }
}).filter(item=>item)
console.log(ans);
git s

// expected output :
// ['kaylin khanal', 'gopal tharu']