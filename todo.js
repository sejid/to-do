             table = document.getElementById("table");

         function addHtmlTableRow()
         {

             var newRow = table.insertRow(table.length),
                 cell1 = newRow.insertCell(0),
                 cell2 = newRow.insertCell(1),
                 cell3 = newRow.insertCell(2),
                 tekst = document.getElementById("tekst").value;

             cell1.innerHTML = tekst;
             cell2.innerHTML = '<input type="checkbox"/>';
             cell3.innerHTML= '<button id="kanta" class="glyphicon glyphicon-trash" onclick="removeSelectedRow(this);"></button>';

             selectedRowToInput();
             document.getElementById("tekst").value='';
         }

         function selectedRowToInput()
     {

         for(var i = 1; i < table.rows.length; i++)
         {
             table.rows[i].onclick = function()
             {

               document.getElementById("tekst").value = this.cells[0].innerHTML;
             };
         }
     }
     selectedRowToInput();


     function removeSelectedRow(o)
      {

   var p=o.parentNode.parentNode;
       p.parentNode.removeChild(p);
     }
