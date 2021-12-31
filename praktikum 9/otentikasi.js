const login = document.querySelector('#login');
  login.addEventListener('click', function(){
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    
    if(username == "fiqih" && password == "291202"){
      alert('benar')
      document.body.innerHTML="<h1>ANDA BERHASIL LOGIN</h1>"
    }else{
      alert('password salah\nmasukkan\nusername: fiqih\npassword: 291202')
    }
  })