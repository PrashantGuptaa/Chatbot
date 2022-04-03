var username = document.getElementById("username").innerText;
var emailId = document.getElementById("emailId").innerText;

function decrementPadding(count) {
    var element = document.getElementsByClassName("chat-container");

    Array.prototype.filter.call(element, function (Element) {
        if (count > 4) {
            Element.style.paddingBottom = "12%";
            var $target = $('html,body');
            $target.animate({
                scrollTop: $target.height()
            }, 1000);
        } else {
            Element.style.paddingBottom = "50%";
        }
    });
}


$(function () {
    var count = 0;
    var socket = io();
    $('form').submit(function (e) {
        e.preventDefault(); // prevents page reloading
        socket.emit('chat_message', $('#m').val());
        $('#m').val('');
        return false;
    });
    // append the chat text message
    socket.on('chat_message', function (msg) {
        const elem = a = document.getElementsByTagName('div');
        const message = elem[elem.length - 1].innerHTML.toLowerCase();
            if(message.includes("bye")){
                setTimeout(() => {
                    window.location.href = "http://localhost:5000/feedback"; 
                }, 1000);
            } 
        $('#messages').append($('<li>').html(msg));
        decrementPadding(count++);
    });
    // append text if someone is online
    socket.on('is_online', function (username) { 
        $('#messages').append($('<li>').html(username));
    });

    socket.emit('username', username, emailId);
});