

function scrollToBottom() {
  var chat_body = window["$"](".layout .content .chat .chat-body");
  if (chat_body.get(0))
    setTimeout(() => {
      chat_body.scrollTop(chat_body.get(0).scrollHeight, -1)
    }, 0);
}
