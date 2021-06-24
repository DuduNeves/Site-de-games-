
 
function organizar()
{ 
    
    let jogosfinalizados = Number(document.getElementById("jogosfinalizados").value)

    let jogosincompletos = Number(document.getElementById("jogosincompletos").value)     



    let total = (jogosfinalizados * 3) + (jogosincompletos * 2);
    alert (`O seu total é de ${total} jogos jogados`)

    if (total <= 10)
        {
          alert(`Seu Rank é PAPELÃO`)
        }
    else if (total <= 30)
        {
            alert(`Seu Rank é LATA`)
        }
    else if (total <= 60)
        {
            alert(`Seu Rank é COBRE`)
        }
    else if (total <= 100)
        {    
        alert(`Seu Rank é BRONZE`)
        }
    else if (total <= 200)
        {
        alert(`Seu Rank é PRATA`)
        }    
    else if (total <= 350)
        {
            alert(`Seu Rank é OURO `)
        }
    else if (total <= 500)
        {
            alert(`Seu Rank é PLATINA`)
        }
    else if (total <= 750)
        {
            alert("Seu Rank é DIAMANTE")
        }
    else{
            alert(`Seu Rank é CAMPEÃO`)
        } 
}