function update(jscolor, part) {
  document.getElementById(part).innerHTML = "#" + jscolor
}

$(document).ready(function(){
  $("#fieldNormalText").html($("#colNormalText").val());
  $("#fieldBackground").html($("#colBackground").val());
  $("#fieldComment").html($("#colComment").val());
  $("#fieldConstant").html($("#colConstant").val());
  $("#fieldStatement").html($("#colStatement").val());
  $("#fieldStatementOp").html($("#colStatement").val());
  $("#fieldIdentifier").html($("#colIdent").val());
  $("#fieldPreprocStatement").html($("#colPreprocStatement").val());
  $("#fieldType").html($("#colType").val());
  $("#fieldSpecial").html($("#colSpecial").val());
  $("#fieldUnderlined").html($("#colUnderlined").val());
  $("#fieldErr").html($("#colError").val());
  $("#fieldTodo").html($("#colTodo").val());
  $("#fieldStatusline").html($("#colStatusline").val());
  $("#fieldIndentChar").html($("#colIndentChar").val());
  $("#fieldLineNum").html($("#colLineNum").val());
  $("#fieldGutErr").html($("#colGutErr").val());
  $("#fieldGutWarn").html($("#colGutWarn").val());
  $("#fieldCurLine").html($("#colCurLine").val());
  $("#fieldCurLineNum").html($("#colCurLineNum").val());
  $("#fieldCol").html($("#colCol").val());
  nameUpd();
})
