function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("show");
}

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function selectPlan(plan){
  alert("You selected " + plan + " plan.");
}

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! We will contact you soon.");
  this.reset();
});

function openLogin(){
  document.getElementById("loginModal").style.display="flex";
}

function closeLogin(){
  document.getElementById("loginModal").style.display="none";
}

function login(){
  const user=document.getElementById("username").value;
  const pass=document.getElementById("password").value;

  if(user==="client" && pass==="1234"){
    localStorage.setItem("loggedIn",true);
    document.getElementById("loginModal").style.display="none";
    document.getElementById("dashboard").style.display="block";
  } else {
    alert("Invalid Login");
  }
}

function logout(){
  localStorage.removeItem("loggedIn");
  document.getElementById("dashboard").style.display="none";
}