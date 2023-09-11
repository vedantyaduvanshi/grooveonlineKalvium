var buttonSumbit = document.getElementById("SubmitButton");


console.log(buttonSumbit)





buttonSumbit.addEventListener('click', function handleClick() {
   
    document.getElementById('successText').textContent = "Thank you for Shopping with us !";
    buttonSumbit.style.visibility="hidden"
});