function switchtheme() {
  const theme = document.getElementsByClassName("theme")[0].value;
  let header = document.querySelector(`header`);
  if (theme === `light`) {
    document.body.style.backgroundColor = `white`;
    header.style.backgroundColor = `black`;
  } else {
    document.body.style.backgroundColor = `#191430`;
    header.style.backgroundColor = `#191430`;
  }
}
