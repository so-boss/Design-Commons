export const typography = {
  typefaces: [
    {{#each fonts}}
{
  name: "{{name}}",
    family:{
  name: "{{{fontFamily}}}"
}
},
{{/each}}
],
  text_styles: [
    {{#each typeStyles}}
  {
    name: "{{name}}",
      family: {
    token: "{{fontFamilyVariable}}",
      name: "{{{fontFamily}}}"
  },
    fontSize : "{{fontSize}}",
      lineHeight: "{{lineHeight}}",
    letterSpacing : "{{letterSpacing}}"
  },
  {{/each}}
  ]
  };
