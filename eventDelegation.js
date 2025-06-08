<ul id="parentList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>


document.getElementById("parentList").addEventListener('click', (event)=>{
    if(event.target.tagName === 'LI'){
        alert("You clicked: " + event.target.textContent);
    }
})