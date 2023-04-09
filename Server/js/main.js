$(document).ready(() => {
    $('#get-clients-btn').click(() => {
      $.get('/clients', (data) => {
        console.log(data);
        const clients = data;
        const clientsList = $('#clients-list');
        clientsList.empty();
        for (let i = 0; i < clients.length; i++) {
          const client = clients[i];
          const listItem = $('<li>').text(`${client.name} - ${client.email}`);
          clientsList.append(listItem);
        }
      });
    });
  });
  

  function validateForm() {
    var name = document.forms[0]["name"].value;
    var email = document.forms[0]["email"].value;

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    if (email == "") {
        alert("Please enter your email address.");
        return false;
    }

    return true;
}
