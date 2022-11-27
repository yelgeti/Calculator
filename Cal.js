function insert (num)
{
    document.getElementById('t').value+=num;
}

function equal()
{
    let exp = document.getElementById('t').value;
    let exp1 = eval(exp);
    document.getElementById('t').value = exp1;
}

function back()
{
    document.getElementById("t").value=" ";
}