module.exports = function(grunt) {
  var extendsCodeSnippet = 
    'var __extends = this.__extends || function (d, b) {\n' +
    '    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];\n' +
    '    function __() { this.constructor = d; }\n' +
    '    __.prototype = b.prototype;\n' +
    '    d.prototype = new __();\n' +
    '};';
  
  grunt.registerMultiTask('cleanTsExtends', 'In compiled TypeScript files remove all __extends declarations except the first one', function() {
    this.files.forEach(function(file) {
      var fileContents = grunt.file.read(file.src[0], { encoding: 'UTF-8' });
      var firstOccurrence = fileContents.indexOf(extendsCodeSnippet) + 1;
      var i;
      
      while ((i = fileContents.indexOf(extendsCodeSnippet, firstOccurrence)) >= 0) {
        fileContents = fileContents.substring(0, i) + fileContents.substring(i + extendsCodeSnippet.length, fileContents.length);
      }
      
      grunt.file.write(file.src[0], fileContents, { encoding: 'UTF-8' });
    });
  });
};