let sentiment;
let statusEl;
let submitBtn;
let inputBox;
let sentimentResult;

function setup() {
  noCanvas();
  
  sentiment = ml5.sentiment('movieReviews', modelReady);

 
  statusEl = createP('Loading Model...');
  inputBox = createInput('Enter Text');
  inputBox.attribute('size', '50');
  submitBtn = createButton('submit');
  sentimentResult = createP('sentiment score:');

 
  submitBtn.mousePressed(getSentiment);
}

function getSentiment() {
  
  const text = inputBox.value();

 
  const prediction = sentiment.predict(text);

  
  sentimentResult.html(`Sentiment score: ${prediction.score}`);
}

function modelReady() {
  
  statusEl.html('model loaded');
}