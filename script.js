function search_product(){
    let input = document.getElementById('searchbar').value
    input = input.tolocaleLowerCase();
    let x=document.getElementsByClassName('products');

    for(i=0;i<x.length;i++)
    {
        if(!x[i].innerHTML.toLocaleLowerCase().includes(input))
        {
            x[i].style.display="none";
        }
        else{
            x[i].style.display="none";
        }
    }
}