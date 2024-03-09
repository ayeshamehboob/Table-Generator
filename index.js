// let a1=  parseInt(window.prompt("Enter the number you want table for: "));
//         let a2=  parseInt(window.prompt("Enter the limit: "));

    function generateTable(){
        var number = document.getElementById('table').value;
        var limit = document.getElementById('limit').value;
        var tableHTML = `<table><tr><th> Table </th></tr>`;

        if (number < 20) {
            for (var i = limit; i >= 1; i--) {
                tableHTML += "<tr><td>" + number + " x " + i + "</td><td>" + " = " + (number * i) + "</td></tr>";
            }
        } else {
            for (var i = 1; i <= limit; i++) {
                tableHTML += "<tr><td>" + number + " x " + i + "</td><td>" + " = " + (number * i) + "</td></tr>";
            }
        }
      
        tableHTML += "</table>";
        document.querySelector('.printTable').innerHTML = tableHTML;
      }
       
      
   

    
