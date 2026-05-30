 function login() {
      const telahome = document.getElementById('home').style.display
      let usuario = document.getElementById('user').value;
      let senha = document.getElementById('password').value;

      if (usuario === 'jb' && senha === '123') {
        alert('Login bem-sucedido!');
         mostrarHome();
         ocultarLogin();
      } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
      }}
      
      function logout() {
        esconderHome();
        mostrarLogin();
      }
      

      function mostrarHome() {
        document.getElementById('home').style.display = 'block';
        
      }

      function ocultarLogin() {
        document.getElementById('login').style.display = 'none';
      
      }

      function esconderHome() {
        document.getElementById('home').style.display = 'none';
        
      }

      function mostrarLogin() {
        document.getElementById('login').style.display = 'block';
        
      }

    