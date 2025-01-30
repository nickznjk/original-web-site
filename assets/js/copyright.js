$(function () {
  const now = new Date();
  console.log(now);

  const year = now.getFullYear();
  console.log(year);

  $(".copyright").html("Copyright &copy; " + year + " 西川光毅");
});
