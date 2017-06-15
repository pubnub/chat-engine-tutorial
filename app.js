const ChatEngine = ChatEngineCore.create({
  publishKey: 'pub-c-c6303bb2-8bf8-4417-aac7-e83b52237ea6',
  subscribeKey: 'sub-c-67db0e7a-50be-11e7-bf50-02ee2ddab7fe'
});

let me = ChatEngine.connect('ian');

let chat = new ChatEngine.Chat('tutorial-room');

const appendMessage = (username, text, extraClass = 'line') => {

  let message =
    $(`<div class="list-group-item" />`).addClass(extraClass)
      .append($('<strong>').text(username + ': '))
      .append($('<span>').text(text));

  $('#log').append(message);

  $("#log").animate({ scrollTop: $('#log').prop("scrollHeight") }, "slow");

};

chat.on('$.ready', (payload) => {
  appendMessage('Status', 'Connected to chat!');
});

chat.on('$.online', (payload) => {
  appendMessage('Status', payload.user.uuid + ' has come online!');
});

chat.on('message', (payload) => {
  appendMessage(payload.sender.uuid, payload.data);
});

$("#message").keypress(function(event) {

    if (event.which == 13) {
        chat.emit('message', $("#message").val());
        $("#message").val('');
        event.preventDefault();
    }

});
