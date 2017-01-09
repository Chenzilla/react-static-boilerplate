var dummyjson = require('dummy-json');

const myHelpers = {
	sentenceNumber: () => dummyjson.utils.randomInt(10, 15),
	sentenceLength: () => dummyjson.utils.randomInt(10, 25),
	questionNumber: () => dummyjson.utils.randomInt(5, 8),
	questionLength: () => dummyjson.utils.randomInt(5, 15),
	questionType: () => dummyjson.utils.randomArrayItem(["false_negative", "categorical", "contextual"])
}

let myPartials = {
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

let template = `{
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

let result = dummyjson.parse(template, {helpers: myHelpers, partials: myPartials}); // Returns a string
let database = JSON.parse(result)["records"];

const FakeServerCall = () => {
	return database[Math.floor(Math.random()*database.length)];
}
console.log(FakeServerCall());
