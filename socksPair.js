var n,val=0,c=0,k=-1;
var a = [],b = [],f = [];
function enterSocks(){
    n = document.getElementById('n1').value;
    for(let i=0;i<n;i++){
        var ck = prompt("Enter Colors (One Color at a time)");
        if(ck!=null){
        a[i] = ck;
        }
        else{
            i--;
        }
    }

   

     for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            if(a[j]==a[i]) 
            {
                c++;
            }
        }
        if(c==0){
            k++;
            b[k] = a[i];
        }
        c=0;
    }
   
    document.getElementById('color').innerHTML = a;
}

function findPairs(){
    var c=0;
    var R = 0;
    for(let i=0;i<b.length;i++){
        for(let j=0;j<n;j++){
            if(a[j]==b[i]){
                c++;
            }
        }
        f[i]=c;
        c=0;
    }
   //document.getElementById('result').innerHTML = R;

    for(let i=0;i<f.length;i++){

        if(f[i]!=1 && f[i]%2!=0 ){
            R += (f[i]-1)/2;
           
        }
        else if (f[i]!=1){
            R += f[i]/2;
        }
    }
    
    document.getElementById('result').innerHTML = R;
}






