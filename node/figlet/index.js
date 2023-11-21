import figlet from "figlet";

figlet("Happy Diwali from edSlash", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});