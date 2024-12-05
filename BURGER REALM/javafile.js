const validUsers = [
    { username: 'prithiviraaj1210@gmail.com', password: 'prithiviraaj2004' },
    { username: 'prith@gmail.com', password: '1210' },
    { username: 'user3@example.com', password: 'password3' }
  ];
  
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    validUsers.push({ username, password });
  
    console.log('New user added:', { username, password });
    console.log('Updated validUsers:', validUsers);
  
    // Redirect to the login page or show a success message
    alert('Sign up successful! Please log in.');
    window.location.href = 'loginpage.html';
  });


  

  
  // Function to handle form submission
  function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get entered username and password from the form
    const enteredUsername = document.querySelector('input[name="uname"]').value;
    const enteredPassword = document.querySelector('input[name="psw"]').value;
    
    // Check if entered username and password match any user in the array
    const isValidUser = validUsers.some(user => 
      user.username === enteredUsername && user.password === enteredPassword
    );
    
    if (isValidUser) {
      // Navigate to another HTML page (Replace with your desired page)
      window.location.replace('customburger.html'); // Replace with your desired HTML file
    } else {
      // Display an alert if credentials are invalid
      alert('Invalid username or password!');
    }
  }
  
  // Get the modal
  



  let totalCost = 0;
  
  function addIngredient(price) {
      totalCost += price;
      document.getElementById('totalCost').innerText = 'Total Cost: Rs.' + totalCost;
      let q=document.getElementById('quantity').value
      let c=totalCost;
      document.getElementById('cost').innerText=c;
  }
  
  function addFunction(ingredient, price) {
      addIngredient(price);
  }


  function finishburger(){
        alert("The total cost for your BURGER:"+totalCost);
  }




 
 $(document).ready(function() {
            $("#showButton").click(function() {
                $("#hiddenElements").removeClass("hidden");
            });
        });
  


    document.addEventListener('DOMContentLoaded', function () {
        var burgerCarousel = document.getElementById('burgerCarousel');
        var carouselInstance = new bootstrap.Carousel(burgerCarousel, {
            interval: 3000,
            pause: false
        });

        window.addEventListener('scroll', function () {
            var rect = burgerCarousel.getBoundingClientRect();
            var inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

            if (inView) {
                carouselInstance.cycle();
            } else {
                carouselInstance.pause();
            }
        });
    });

    document.getElementById('payButton').addEventListener('click', function() {
    const upiId = document.getElementById('upiId').value;
    if (!upiId) {
        alert('Please enter your UPI ID.');
        return;
    }

    const amount = document.getElementById('cost').innerText; // Replace with the desired amount
    const name = document.getElementById('fullname').innerText; // Replace with your name or merchant name
    const transactionNote = 'Payment for services'; // Replace with the transaction note
    const upiUrl = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&tn=${transactionNote}`;

    // Redirect to UPI app
    window.location.href = upiUrl;
});


