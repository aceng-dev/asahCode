// if-else statemen
function cekNilaiRaport(nilaiRaport){
    if(nilaiRaport >= 90){
        console.log('Predikat A');
    }else if (nilaiRaport >= 80){
        console.log('Predikat B');
    }else if(nilaiRaport >= 75){
        console.log('Predikat C');
    }else{
        console.log('Maaf Kamu Tidak Memenuhi Kebutuhan')
    }
}
cekNilaiRaport(75);

function cekRoleMlbb(role){
    switch(role){
        case 'Mid' :
            console.log(`Aku Ke ${role}`);
            break;
        case 'Roam' :
            console.log(`Aku Ke ${role}`);
            break;
        case 'Junggle':
            console.log(`Aku Ke ${role}`);
            break;
        case 'Exp':
            console.log(`Aku Ke ${role}`);
            break;
        case 'Gold':
            console.log(`Aku Ke ${role}`);
            break;
        default :
        console.log('Males Main');
    }
}

cekRoleMlbb('Junggle');
cekRoleMlbb('Gold');
