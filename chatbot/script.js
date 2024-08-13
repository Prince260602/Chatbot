const userMessage = [
  ["hi", "hey", "hello"],
  ["sure", "yes", "no"],
  ["are you genius", "are you nerd", "are you intelligent"],
  ["i hate you", "i dont like you"],
  ["how are you", "how is life", "how are things", "how are you doing"],
  ["how is corona", "how is covid 19", "how is covid19 situation"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you", "who is your creator"],
  ["your name please", "your name", "may i know your name", "what is your name", "what do you call yourself"],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "ok", "okay", "nice", "welcome"],
  ["thanks", "thank you"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["corona", "covid19", "coronavirus"],
  ["you are funny"],
  ["i dont know"],
  ["boring"],
  ["im tired"],
  ["how is the weather", "what's the weather like", "is it raining", "is it sunny"],
  ["what time is it", "what's the time", "can you tell me the time"],
  ["do you have a favorite color", "what's your favorite color", "what color do you like"],
  ["do you play games", "what games do you like", "are you into gaming"],
  ["what are your hobbies", "what do you do for fun", "what are your interests"],
  ["can you speak other languages", "do you know any other languages", "what languages can you speak"],
  ["what is the meaning of life", "why are we here", "what is the purpose of life"],
  ["what is your favorite food", "do you like pizza", "what kind of food do you like"],
  ["tell me a fun fact", "what is an interesting fact", "give me a trivia"],
  ["what is your favorite movie", "do you watch movies", "what kind of movies do you like"],
  ["what's your favorite book", "do you read books", "what book do you recommend"],
  ["what's the latest news", "tell me the news", "what's happening in the world"],
  ["do you have any pets", "what pets do you like", "do you like animals"],
  ["what's your favorite holiday", "do you celebrate holidays", "what holiday do you enjoy"],
  ["how can I improve my mood", "I'm feeling down", "give me some advice on feeling better"],
  ["can you help me with math", "what's 2 plus 2", "I need help with a math problem"],
  ["what's the best way to learn a new skill", "how do I learn something new", "give me tips for learning"],
  ["do you have any motivational quotes", "give me a quote", "I need some motivation"]
];

const botReply = [
  ["Hello!", "Hi!", "Hey!", "Hi there!"],
  ["Okay"],
  ["Yes I am!"],
  ["I'm sorry about that. But I like you dude."],
  ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"],
  ["Getting better. There?", "Somewhat okay!", "Yeah fine. Better stay home!"],
  ["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually"],
  ["I am always young."],
  ["I am just a bot"],
  ["Sabitha Kuppusamy"],
  ["I am Stark"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["You're welcome"],
  ["Briyani", "Burger", "Sushi", "Pizza"],
  ["Dude!"],
  ["Yes?"],
  ["Please stay home"],
  ["Glad to hear it"],
  ["Say something interesting"],
  ["Sorry for that. Let's chat!"],
  ["Take some rest, Dude!"],
  ["The weather is quite nice today.", "It's sunny and warm.", "Looks like it's raining a bit."],
  ["It's about 3 PM right now.", "The time is 5:30 PM.", "It's currently 10 AM."],
  ["I don't have a favorite color, but I like blue.", "I think blue is a nice color.", "I like a lot of colors, but blue is cool."],
  ["I don't play games, but I can talk about them.", "I know a lot about games!", "I don't play games, but I can help you with game info."],
  ["I enjoy learning new things and chatting.", "My hobbies include chatting with you.", "I like to assist and learn new things."],
  ["I can understand and speak many languages.", "I primarily speak English, but I can understand other languages too.", "I can chat in several languages."],
  ["The meaning of life is a big question. Many people have different answers.", "Some say it's to find happiness and fulfillment.", "The purpose of life is often considered to be finding one's own path."],
  ["I don't eat, but pizza sounds delicious!", "Pizza is a popular choice for many people.", "I think pizza is great!"],
  ["Did you know? Honey never spoils.", "Here's a fun fact: Octopuses have three hearts.", "Did you know? A group of flamingos is called a 'flamboyance'."],
  ["I don’t watch movies, but I know a lot about them.", "I’ve heard that 'The Shawshank Redemption' is a great movie.", "I’ve read that 'Inception' is a fascinating film."],
  ["I don’t read books, but I can suggest some popular ones.", "You might enjoy 'To Kill a Mockingbird'.", "How about '1984' by George Orwell?"],
  ["I can look up the latest news for you.", "Check out a news website for the most recent updates.", "What kind of news are you interested in?"],
  ["I don’t have pets, but I think dogs are great.", "Cats are lovely, aren’t they?", "I’d probably like a pet if I could have one."],
  ["I think holidays are wonderful! Christmas is a great one.", "Halloween is fun with all the costumes!", "I’d imagine New Year’s Eve is quite exciting."],
  ["Try listening to some music or watching a movie.", "Sometimes talking to someone can help lift your spirits.", "Exercise can also boost your mood."],
  ["Sure! 2 plus 2 is 4.", "I can help with math problems.", "Just let me know what you need help with."],
  ["Practice is key. Start small and build up.", "Learning online through tutorials can be effective.", "Setting goals and being consistent helps."],
  ["Here’s a motivational quote: 'The only way to do great work is to love what you do.' - Steve Jobs", "How about: 'Believe you can and you’re halfway there.' - Theodore Roosevelt", "Here’s one: 'The future belongs to those who believe in the beauty of their dreams.' - Eleanor Roosevelt"]
];

const alternative = [
  "Same here, dude.",
  "That's cool! Go on...",
  "Dude...",
  "Ask something else...",
  "Hey, I'm listening..."
];

const synth = window.speechSynthesis;

function voiceControl(string) {
  let u = new SpeechSynthesisUtterance(string);
  u.text = string;
  u.lang = "en-aus";
  u.volume = 1;
  u.rate = 1;
  u.pitch = 1;
  synth.speak(u);
}

function sendMessage() {
  const inputField = document.getElementById("input");
  let input = inputField.value.trim();
  input !== "" && output(input);
  inputField.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      let input = inputField.value.trim();
      input !== "" && output(input);
      inputField.value = "";
    }
  });
});

function output(input) {
  let product;

  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

  text = text
    .replace(/[\W_]/g, " ")
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .trim();

  let comparedText = compare(userMessage, botReply, text);

  product = comparedText
    ? comparedText
    : alternative[Math.floor(Math.random() * alternative.length)];
  addChat(input, product);
}

function compare(triggerArray, replyArray, string) {
  let item;
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] === string) {
        let items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  if (item) return item;
  else return containMessageCheck(string);
}

function containMessageCheck(string) {
  let expectedReply = [
    ["Good Bye, dude", "Bye, See you!", "Dude, Bye. Take care of your health in this situation."],
    ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
    ["Have a pleasant evening!", "Good evening too", "Evening!"],
    ["Good morning, Have a great day!", "Morning, dude!"],
    ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
  ];
  let expectedMessage = [
    ["bye", "tc", "take care"],
    ["night", "good night"],
    ["evening", "good evening"],
    ["morning", "good morning"],
    ["noon"]
  ];
  let item;
  for (let x = 0; x < expectedMessage.length; x++) {
    if (expectedMessage[x].includes(string)) {
      let items = expectedReply[x];
      item = items[Math.floor(Math.random() * items.length)];
    }
  }
  return item;
}

function addChat(input, product) {
  const mainDiv = document.getElementById("message-section");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.classList.add("message");
  userDiv.innerHTML = `<span id="user-response">${input}</span>`;
  mainDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.classList.add("message");
  botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
  mainDiv.appendChild(botDiv);
  var scroll = document.getElementById("message-section");
  scroll.scrollTop = scroll.scrollHeight;
  voiceControl(product);
}
