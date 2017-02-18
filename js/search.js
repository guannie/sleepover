var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

var room = ['MA1', 'P19', 'L50', 'Pulai Spring'
];

$('.search-bar #search').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'room',
  source: substringMatcher(room)
});