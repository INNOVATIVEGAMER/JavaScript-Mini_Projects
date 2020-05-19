document.getElementById('loan-form').addEventListener('submit', startUp);

function startUp(e)
{
    document.querySelector('#loading').style.display = 'block';
    document.querySelector('#results').style.display = 'none';

    setTimeout(calculateResults,2500);
    e.preventDefault();
}

function calculateResults()
{
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
  
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)) 
    {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

        document.querySelector('#loading').style.display = 'none';
        document.querySelector('#results').style.display = 'block';
    } 
    else 
    {
        showError('Please check your numbers');
    }

}

function showError(error)
{
    document.querySelector('#loading').style.display = 'none';
    document.querySelector('#results').style.display = 'none';
    
    const errDiv = document.createElement('div');
    errDiv.className = 'alert alert-danger';

    const heading  = document.querySelector('.heading');
    const card = document.querySelector('.card');

    errDiv.appendChild(document.createTextNode(error));
    
    card.insertBefore(errDiv,heading);

    setTimeout(clearerr,3000);
}

function clearerr()
{
    document.querySelector('.alert').remove();
}