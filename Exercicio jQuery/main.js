$(document).ready(function () {
    $("#tarefa").submit(function (e) {
      e.preventDefault();
      const taskName = $("#Adiciona-tarefa").val();
      if (taskName.trim() !== "") {
        $("#lista-tarefas").append("<li>" + taskName + "</li>");
        $("#Adiciona-tarefa").val("");
      }
    });
  
    $(document).on("click", "li", function () {
      $(this).toggleClass("completed");
    });
  });