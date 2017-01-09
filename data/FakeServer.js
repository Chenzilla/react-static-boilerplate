var dummyjson = require('dummy-json');

var myHelpers = {
	sentenceNumber: function() {
		return dummyjson.utils.randomInt(10, 15);
	},
	sentenceLength: function() {
		return dummyjson.utils.randomInt(10, 25);
	},
	questionNumber: function() {
		return dummyjson.utils.randomInt(5, 8);
	},
	questionLength: function() {
		return dummyjson.utils.randomInt(5, 15);
	},
	questionType: function() {
		return dummyjson.utils.randomArrayItem(["false_negative", "categorical", "contextual"]);
	}
}

var myPartials = {
	sentences: `[\
		{{#repeat (sentenceNumber)}}\
			"{{lorem (sentenceLength)}}"\
		{{/repeat}}]`,
	visibleIndex: `{{int 0 10}}`,
	highlightedIndices: '[{{int 0 5}}, {{int 5 10}}]',
	question: `{
		"id": {{@index}},
		"visibleIndex": {{> visibleIndex}},
		"highlightedIndices": {{> highlightedIndices}},
		"questionText": "{{lorem (questionLength)}}",
		"searchBar": {{boolean}},
		"questionType": "{{questionType}}"
	}`
};

var template = `{
	"records": [
		{{#repeat 20}}
			{	"id": {{@index}},
				"mainText": {{> sentences}},
				"questions": [
				{{#repeat (questionNumber)}}
					{{>question}}
				{{/repeat}}]
			}
		{{/repeat}}
	]
}`

var result = dummyjson.parse(template, {helpers: myHelpers, partials: myPartials}); // Returns a string
var database = JSON.parse(result)["records"];

function FakeServerCall(){
	return database[Math.floor(Math.random()*database.length)];
}
