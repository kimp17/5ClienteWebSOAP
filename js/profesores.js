var parser = new X2JS();
function ProfesorList($) {
  xhr('data/profesores.xml',function (data) {
    var xml = parser.xml_str2json(data);
    $.profesores = xml.profesores.profesor;
    framux.render();
  });
};
function ProfesorDetail($, params) {
  xhr('data/profesor' + params[0] + '.xml',function(data) {
    var xml = parser.xml_str2json(data);
    $global.profesor = xml.profesor;
    $.prof = $global.profesor;
    framux.render();
  });
};