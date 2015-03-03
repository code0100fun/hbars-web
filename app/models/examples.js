export default [
  { slug: "tags", name: "tags", template: "%p some inline content", context: {} },
  { slug: "nested-tags", name: "nested tags", template: "%p\n  %span some nested content", context: {} },
  { slug: "classes-ids", name: "classes & ids", template: "%p#foo.bar baz", context: {} },
  { slug: "inline-expressions", name: "inline expressions", template: "%p #{foo}", context: {foo: "bar"} },
  { slug: "block-expressions", name: "block expressions", template: "%ul\n  - each names as |name|\n    %li Hello #{name}! ",
    context: {
      names: [
        "hbars",
        "HTMLBars",
        "Handlebars",
        "HTML"
      ]
    }
  },
  {
    slug: "if-else-unless",
    name: "if/else/unless",
    template:
      '=input type="checkbox" checked=foo\n' +
      'click me!\n' +
      '%p #{if foo "Hello" "Goodby"}\n' +
      '%p\n' +
      '  -if foo\n' +
      '    World\n'+
      '  -else if foo\n' +
      '    Moon\n' +
      '  -unless foo\n' +
      '    Mars',
    context: { foo:true, bar: true }
  },
  { slug: "raw-attributes", name: "raw attributes", template: '%img(src="http://emberjs.com/images/community/tomsters/Ember-Munich-Half-sm.png" width=200)', context: {}},
  {
    slug: "literal-binding",
    name: "literal binding", template:
    '%p\n' +
    '  =input type="range" value=height max=400\n' +
    '%img{ src=imageUrl height=height }',
    context: {
      imageUrl: "http://emberjs.com/images/community/tomsters/Ember-London-Half-sm.png",
      height: 200
    }
  },
  {
    slug: "quoted-binding",
    name: "quoted binding",
    template: '%img{ src="#{imageUrl}" height="#{height}" }',
    context: {
      imageUrl: "http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200",
      height: 200
    }
  },
  {
    slug: "helpers",
    name: "helpers",
    template: '%p{action "click"} Don\'t Click Me\n',
    context: {
      callback: "alert('Deploying botnet');"
    }
  },
  {
    slug: "interpolation",
    name: "interpolation",
    template: '%p Hello #{first} #{if middle middle} #{last}',
    context: {
      first: 'Chase',
      middle: null,
      last: 'McCarthy'
    }
  },
];
