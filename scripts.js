 function showSection(sectionId) { 
            document.querySelectorAll('section').forEach(section => { 
                section.style.display = 'none'; 
            }); 
            document.getElementById(sectionId).style.display = 'flex'; 
        } 
