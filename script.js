
      function showSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
      }
      function closeSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
      }

      
        var counter = 1;
        setInterval(function(){
            document.getElementById('radio' + counter).checked = true;
            counter++;

            if(counter > 4){
                counter = 1
            }
        }, 5000);
   
  