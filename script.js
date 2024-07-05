var dia = 1
if(dia < 1 || dia > 7){
    console.log('erro')
} else {
    switch (dia) {
        case 1 :
            console.log('segunda')
            break;
        case 2 :
            console.log('terça')
            break;
        case 3 :
            console.log('quarta')
            break;
        case 4 :
            console.log('quinta')
            break;
        case 5 :
            console.log('sexta')
            break;
        case 6 :
            console.log('sábado')
            break;
        case 7 :
            console.log('domingo')
            break;
    
        default:
            break;
    }
}
