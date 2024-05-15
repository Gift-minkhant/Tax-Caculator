function percTax(element)  {
    element.style = "background-color: #00ff00; outline: 5px solid#00ff00;";
    var selected = document.querySelector('.selected');
    element.clsslist.add("selected");
    if(selected) {
        selected.classList.remove('selected');
        selected.style ="background-color: rgb(55, 55, 255)";
        }
}
function solve()    {
    var cost = document.getElementById('cost').value;
    var perc = document.querySelector('.selected').value;
    var amount = Number.parseFloat(cost) * Number.parseFloat(perc) /
    100 + Number.parseFloat(cost);
    document.getElementById('amount').value = amount
}